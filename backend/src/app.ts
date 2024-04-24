import express from "express";
import { userRepo } from "./database/repo";

const app = express();
app.use(express.json());
app.post("/createUser", (req, res) => {
  try {
    const { email, password } = req.body;
    const newUser = userRepo.create({
      email,
      password,
    });
    const sUser = userRepo.save(newUser);

    res.json(sUser);
  } catch (e) {
    res.status(500).json(e);
  }
});
export default app;
