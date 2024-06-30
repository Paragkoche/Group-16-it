import { fileRepo, userRepo } from "@/database/repo";
import { createToken } from "@/helper/jwt";
import { verifyPassword } from "@/helper/password";
import { CreateAndLoginUserBody } from "@/helper/schema";
import { AuthRequest, authReq } from "@/middleware/auth.middleware";
import { deleteFolderRecursive } from "@/utl/file";
import { Router } from "express";
import { Not } from "typeorm";
// import { Not } from "typeorm";

const router = Router();
router.post("/createUser", async (req, res) => {
  try {
    const data = CreateAndLoginUserBody.safeParse(req.body);
    if (data.error) {
      return res.status(405).json(data.error.errors);
    }
    const newUser = userRepo.create({
      ...data.data,
    });
    const sUser = await userRepo.save(newUser);
    res.cookie("token", createToken({ id: sUser.id }));
    return res.json(sUser);
  } catch (e) {
    return res.status(500).json(e);
  }
});
router.post("/LoginUsers", async (req, res) => {
  try {
    const data = CreateAndLoginUserBody.safeParse(req.body);
    if (data.error) {
      return res.status(405).json(data.error.errors);
    }
    const usersData = await userRepo.findOne({
      where: {
        email: data.data.email,
      },
    });
    if (!usersData) {
      return res.status(404).json({
        message: "user not found",
      });
    }
    if (!(await verifyPassword(data.data.password, usersData.password))) {
      return res.status(401).json({
        message: "incorrect password",
      });
    }
    res.cookie("token", createToken({ id: usersData.id }));
    return res.json(usersData);
  } catch (e) {
    return res.status(500).json(e);
  }
});
router.delete("/delete-users", authReq, async (req: AuthRequest, res) => {
  try {
    const userId = req.userData.id;

    // Fetch the user's files from the database
    const userFiles = await fileRepo.find({ where: { owner: { id: userId } } });
    if (userFiles.length > 0) {
      // Nullify the owner field to break the relationship
      userFiles.map(async (v) => {
        await fileRepo
          .createQueryBuilder()
          .update(v)
          .set({ owner: undefined })
          .where("owner = :userId", { userId })
          .execute();
      });
    }

    // Delete the files from the database
    await fileRepo.delete({ owner: { id: userId } });
    deleteFolderRecursive(`./static/${userId}`);
    await userRepo.delete({ id: req.userData.id });
    return res.send("Done");
  } catch (e) {
    return res.status(500).json({
      message: e,
    });
  }
});
router.get("/ref-token", authReq, async (req: AuthRequest, res) => {
  res.cookie("token", createToken({ id: req.userData.id }));
  return res.json(req.userData);
});
router.post("/log-out", authReq, async (req: AuthRequest, res) => {
  res.clearCookie("token");
  return res.send("OK");
});
router.get("/all-users", authReq, async (req: AuthRequest, res) => {
  return res.json({
    data: await userRepo.find({
      where: {
        id: Not(req.userData.id),
      },
      select: {
        id: true,
        email: true,
      },
    }),
  });
});

export default router;
