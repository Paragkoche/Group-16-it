import { userRepo } from "@/database/repo";
import { Users } from "@/database/users";
import { verifyToken } from "@/helper/jwt";
import type { NextFunction, Request, Response } from "express";

export interface AuthRequest extends Request {
  userData: Users;
}

export const authReq = async (
  req: AuthRequest,
  res: Response,
  nextFun: NextFunction
) => {
  try {
    const token = req.cookies.token;
    if (!token || token == "")
      return res.status(404).json({
        message: "UnAuth",
      });
    const token_data = verifyToken(token);
    if (!token_data || typeof token_data == "string")
      return res.status(404).json({
        message: token_data,
      });
    const userData = await userRepo.findOne({
      where: {
        id: token_data.id,
      },
    });
    if (!userData || userData == null)
      return res.status(404).json({
        message: "UnAuth or user not found",
      });
    req.userData = userData;
    return nextFun();
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      message: "INTERNAL SERVER ERROR!!!",
    });
  }
};
