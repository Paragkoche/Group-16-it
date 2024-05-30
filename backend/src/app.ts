import express from "express";
import UsersPath from "@/router/users";
import FilesPath from "@/router/file";
import cookieParser from "cookie-parser";
import cros from 'cors';

const app = express();
app.use(cros({
    origin: process.env.NEXT_PUBLIC_API_BASE_URL,
    credentials: true
}))
app.use(express.json());
app.use(cookieParser());
app.use("/users", UsersPath);
app.use("/files", FilesPath);
export default app;
