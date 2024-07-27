"use client";
import {
  AspectRatio,
  Box,
  Button,
  Card,
  CardOverflow,
  Chip,
  DialogContent,
  DialogTitle,
  Dropdown,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  Modal,
  ModalDialog,
  Select,
  Stack,
  Typography,
  Option,
  ListItemButton,
  ListItemDecorator,
} from "@mui/joy";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";
import InsertDriveFileRoundedIcon from "@mui/icons-material/InsertDriveFileRounded";

import { format } from "date-fns";
import React from "react";
import { useForm } from "react-hook-form";
import { shareWithBody } from "@/api/valid";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { deleteShare, shareFileWith } from "@/api";
import { CalendarMonth, CancelScheduleSend, Share } from "@mui/icons-material";
import { useRouter } from "next/navigation";
type props = {
  id: string;
  prvHash: string;
  hash: string;
  timeStamp: Date;
  fileUrl: string;
  mode: "public" | "onWith" | "private";
  users: any[];
  option?: boolean;
  reload?: () => void;
};

const FileCard = (props: props) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [mode, setMode] = React.useState("");
  const { register, handleSubmit, setValue } = useForm<
    z.infer<typeof shareWithBody>
  >({
    resolver: zodResolver(shareWithBody),
  });
  const router = useRouter();

  return (
    <>
      <Card variant="outlined" size="sm">
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ flex: 1, width: "50%" }}>
            <Typography
              level="title-md"
              noWrap
              sx={{ textOverflow: "ellipsis", width: "70%" }}
            >
              {props.fileUrl.split("$_").at(-1)}
            </Typography>
            <Typography level="body-sm">
              {format(props.timeStamp, "dd/MM/yyyy hh:mm aa")}
            </Typography>
          </Box>
          {props.option && props.option ? (
            <Box sx={{ display: "flex", gap: "5px" }}>
              <IconButton
                variant="soft"
                color="danger"
                sx={{ width: 24, height: 24 }}
                onClick={() => {
                  deleteShare(props.id).finally(() => {
                    if (props.reload) props.reload();
                  });
                }}
              >
                <CancelScheduleSend
                  fontSize="small"
                  sx={{ width: "14px  !important" }}
                />
              </IconButton>
              <IconButton
                variant="soft"
                sx={{ width: 24, height: 24 }}
                onClick={() => {
                  setOpen(true);
                }}
              >
                <Share fontSize="small" sx={{ width: "14px  !important" }} />
              </IconButton>
            </Box>
          ) : // <Dropdown>
          //   <MenuButton
          //     variant="plain"
          //     size="sm"
          //     sx={{
          //       maxWidth: "32px",
          //       maxHeight: "32px",
          //       borderRadius: "9999999px",
          //     }}
          //   >
          //     <IconButton
          //       component="span"
          //       variant="plain"
          //       color="neutral"
          //       size="sm"
          //     >
          //       <MoreVertRoundedIcon />
          //     </IconButton>
          //   </MenuButton>
          //   <Menu
          //     placement="bottom-end"
          //     size="sm"
          //     sx={{
          //       zIndex: "99999",
          //       p: 1,
          //       gap: 1,
          //       "--ListItem-radius": "var(--joy-radius-sm)",
          //     }}
          //   >
          //     <MenuItem
          //       onClick={() => {
          //         setOpen(true);
          //       }}
          //     >
          //       <ShareRoundedIcon />
          //       Share file
          //     </MenuItem>
          //   </Menu>
          // </Dropdown>
          null}
        </Box>
        <CardOverflow
          onClick={() => {
            window.open(
              process.env.NEXT_PUBLIC_API_URL + "/" + props.fileUrl,
              "_black"
            );
          }}
          sx={{
            borderBottom: "1px solid",
            borderTop: "1px solid",
            borderColor: "neutral.outlinedBorder",
            cursor: "pointer",
          }}
        >
          <AspectRatio ratio="16/9" color="primary" sx={{ borderRadius: 0 }}>
            {props.fileUrl.endsWith("png") ||
            props.fileUrl.endsWith("jpg") ||
            props.fileUrl.endsWith("jpeg") ? (
              <img
                alt=""
                src={process.env.NEXT_PUBLIC_API_URL + "/" + props.fileUrl}
              />
            ) : (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <InsertDriveFileRoundedIcon />
              </Box>
            )}
          </AspectRatio>
        </CardOverflow>
        <Typography level="body-xs">{props.mode}</Typography>
      </Card>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog>
          <DialogTitle>Share It</DialogTitle>
          <DialogContent>Fill in the information of share</DialogContent>
          <form
            onSubmit={handleSubmit(
              async (data) => {
                console.log({ ...data, fileId: props.id });
                await shareFileWith({ ...data, fileId: props.id });
                setOpen(false);
                if (props.reload) props.reload();
              },
              (e) => {
                alert("ERROR");
                console.log(e);
                if (props.reload) props.reload();
              }
            )}
          >
            <Stack spacing={2}>
              <FormControl>
                <Input
                  sx={{ display: "none" }}
                  type="string"
                  {...register("fileId")}
                />
              </FormControl>

              <FormLabel>Share mode</FormLabel>
              <Select
                name={register("mode").name}
                onChange={(e, v: any) => {
                  setMode(v);
                  setValue("mode", v);
                }}
                sx={{ minWidth: "15rem" }}
                slotProps={{
                  listbox: {
                    sx: {
                      width: "100%",
                    },
                  },
                }}

                //   {...register("shareWithUserId")}
              >
                {["public", "onWith"].map((v, i) => (
                  <Option key={i} value={v}>
                    {v}
                  </Option>
                ))}
              </Select>

              {mode != "public" ? (
                <>
                  {" "}
                  <FormLabel>Share with</FormLabel>
                  <Select
                    name={register("shareWithUserId").name}
                    multiple
                    renderValue={(selected) => {
                      return (
                        <Box sx={{ display: "flex", gap: "0.25rem" }}>
                          {selected.map((selectedOption, i) => (
                            <Chip key={i} variant="soft" color="primary">
                              {selectedOption.label}
                            </Chip>
                          ))}
                        </Box>
                      );
                    }}
                    sx={{ minWidth: "15rem" }}
                    slotProps={{
                      listbox: {
                        sx: {
                          width: "100%",
                        },
                      },
                    }}
                    onChange={(e, v: any[]) => {
                      console.log(v);
                      let vv = v.map((data) => JSON.parse(data));

                      setValue("shareWithUserId", vv);
                    }}

                    //   {...register("shareWithUserId")}
                  >
                    {props.users.map((v, i) => (
                      <Option key={i} value={JSON.stringify({ id: v.id })}>
                        {v.email}
                      </Option>
                    ))}
                  </Select>{" "}
                </>
              ) : null}

              <Button type="submit">Submit</Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
    </>
  );
};

export default FileCard;
