import express from "express";
import UsersPath from "@/router/users";
import FilesPath from "@/router/file";
import cookieParser from "cookie-parser";
import cors from 'cors';

const app = express();
app.use(cors({
    origin(requestOrigin, callback) {
        callback(null, requestOrigin)
    },
    credentials: true
}))
app.use(express.json());
app.use(cookieParser());
app.use("/static", express.static("static"))
app.use("/users", UsersPath);
app.use("/files", FilesPath);
export default app;
