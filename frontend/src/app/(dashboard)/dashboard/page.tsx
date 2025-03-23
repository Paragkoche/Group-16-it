"use client";
import { getAllFile, getAllUsers } from "@/api";
import FileCard from "@/components/Card";
import {
  CalendarMonth,
  CalendarViewMonthRounded,
  CalendarViewWeek,
  Inventory,
} from "@mui/icons-material";
import { Box, Button, ListItemButton, Snackbar, Typography } from "@mui/joy";
import React from "react";

const page = () => {
  const [users, setUsers] = React.useState();
  const [files, setFiles] = React.useState([]);
  const reload = async () => {
    let data = await getAllUsers();
    let file = await getAllFile();
    setUsers(JSON.parse(data).data);
    setFiles(JSON.parse(file.data));
  };
  const [open, setOpen] = React.useState(true);

  React.useEffect(() => {
    (async () => {
      let data = await getAllUsers();
      let file = await getAllFile();
      setUsers(JSON.parse(data).data);
      setFiles(JSON.parse(file.data));
      setOpen(false);
    })();
  }, []);

  return (
    <>
      <Box component="main" className="Main" sx={[{ p: 2 }]}>
        {files.length !== 0 ? (
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,240px)",
              gap: 2,
            }}
          >
            {users &&
              files.map((v: any) => (
                <FileCard {...v} users={users} reload={reload} option={true} />
              ))}{" "}
          </Box>
        ) : (
          <Typography
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
            }}
          >
            <Inventory />
            Empty
          </Typography>
        )}
      </Box>
      <Snackbar
        open={open}
        animationDuration={500}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        color={"neutral"}
        autoHideDuration={500}
      >
        welcome to Blockchain Drive
      </Snackbar>
    </>
  );
};

export default page;
