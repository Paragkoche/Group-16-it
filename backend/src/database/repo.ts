import db from "./index";
import { Users } from "./users";

export const userRepo = db.getRepository(Users);
