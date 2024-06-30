import { Axios } from "axios";
import { z } from "zod";
import { CreateAndLoginUserBody, shareWithBody } from "./valid";

const BaseURL = process.env.NEXT_PUBLIC_API_URL;

const api = new Axios({
  baseURL: BaseURL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export const createUser = async (
  data: z.infer<typeof CreateAndLoginUserBody>
) => {
  return api.post("/users/createUser", JSON.stringify(data));
};

export const LoginUser = async (
  data: z.infer<typeof CreateAndLoginUserBody>
) => {
  return api.post("/users/LoginUsers", JSON.stringify(data));
};

export const DeleteUsers = async () => {
  try {
    return (await api.delete("/users/delete-users")).data;
  } catch (e) {
    return e;
  }
};

export const getAllFile = async () => {
  return api.get("/files/all-file");
};

export const shareFileWith = async (data: z.infer<typeof shareWithBody>) => {
  return api.post("/files/shareWith", JSON.stringify(data));
};

export const getShareFile = async (id: string) => {
  return api.get(`/files/getShareFile/${id}`);
};

export const checkAuth = async () => {
  let _data = false;
  const { data } = await api.get("/users/ref-token");
  console.log(JSON.parse(data).id !== "");
  _data = JSON.parse(data).id ? JSON.parse(data).id !== "" : false;
  return [_data, _data ? JSON.parse(data) : ""];
};

export const getAllUsers = async () => {
  const { data } = await api.get("/users/all-users");
  return data;
};

export const logOut = async () => {
  return await api.post("/users/log-out");
};
