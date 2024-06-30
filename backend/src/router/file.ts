import { fileRepo, userRepo } from "@/database/repo";
import { AuthRequest, authReq } from "@/middleware/auth.middleware";
import { Router } from "express";
import multer from "multer";
import fs from "fs";
import { randomUUID } from "crypto";
import { shareWithBody } from "@/helper/schema";
const router = Router();

// Define multer storage options
const storage = multer.diskStorage({
  destination: (req: AuthRequest, file, cb) => {
    // Get the user ID from the request
    const userId = req.userData.id;
    // Define the destination path including the user ID
    const destination = `./static/${userId}/`;
    fs.mkdirSync(destination, { recursive: true });
    cb(null, destination);
  },
  filename: (req, file, cb) => {
    cb(null, `${randomUUID()}_$_${file.originalname}`);
  },
});

// Initialize multer with the custom storage options
const uploader = multer({ storage: storage });

//upload files
router.post(
  "/upload-file",
  authReq,
  uploader.array("files"),
  async (req: AuthRequest, res) => {
    try {
      const files = req.files as Express.Multer.File[];
      const saveFiles = [];
      if (!files)
        return res.status(401).json({
          message: "files not attached",
        });

      for (let i of files) {
        const dbFiles = await fileRepo.find();
        const newFile = fileRepo.create({
          prvHash: dbFiles.at(-1)?.hash ?? "null",
          owner: req.userData,
          fileUrl: i.path.split("\\").join("/"),
        });
        console.log(newFile);
        let s = await fileRepo.save(newFile);
        saveFiles.push(s);
      }
      return res.json(saveFiles);
    } catch (e) {
      console.log(e);

      return res.status(500).json({
        message: e,
      });
    }
  }
);

router.get("/all-file", authReq, async (req: AuthRequest, res) => {
  try {
    return res.json(
      await fileRepo.find({
        where: {
          owner: {
            id: req.userData.id,
          },
        },
      })
    );
  } catch (e) {
    return res.status(500).json({
      message: e,
    });
  }
});

router.post("/shareWith", authReq, async (req: AuthRequest, res) => {
  try {
    const data = shareWithBody.safeParse(req.body);
    if (data.error) {
      return res.status(405).json(data.error.errors);
    }
    const file = await fileRepo.findOne({ where: { id: data.data.fileId } });
    if (!file) {
      return res.status(405).json({
        message: "File not found",
      });
    }

    file.mode = data.data.mode;
    if (data.data.mode == "public") {
      let f = await fileRepo.save(file);
      return res.json(f);
    }
    let usersArray = [];
    for (let v of data.data.shareWithUserId) {
      const user = await userRepo.findOne({
        where: {
          id: v.id,
        },
      });
      if (!user) {
        return res.status(404).json({
          message: "User not found id : " + v.id,
        });
      }
      usersArray.push(user);
    }
    file.shareWith = usersArray;
    const updateFileData = await fileRepo.save(file);

    return res.json({
      data: updateFileData,
    });
  } catch (e) {
    return res.status(500).json({
      message: e,
    });
  }
});

router.get("/getShareFile/:id", authReq, async (req: AuthRequest, res) => {
  try {
    const fileId = req.params.id;
    const allpub = await fileRepo.find({
      where: {
        mode: "public",
      },
    });
    const fileData = await fileRepo.find({
      where: {
        shareWith: {
          id: fileId,
        },
      },
      relations: ["owner", "shareWith"],
    });
    if (!fileData) return res.status(404).json({ message: "File not found" });

    return res.json([...new Set([...fileData, ...allpub])]);
  } catch (e) {
    return res.status(500).json({
      message: e,
    });
  }
});

export default router;
