import { Files } from "./files";
import db from "./index";
import { Users } from "./users";

export const userRepo = db.getRepository(Users);
export const fileRepo = db.getRepository(Files);
