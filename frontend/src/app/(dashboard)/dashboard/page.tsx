"use client";
import { getAllFile, getAllUsers } from "@/api";
import FileCard from "@/components/Card";
import { Box, Button, Typography } from "@mui/joy";
import React from "react";

const page = () => {
  const [users, setUsers] = React.useState();
  const [files, setFiles] = React.useState([]);
  React.useEffect(() => {
    (async () => {
      let data = await getAllUsers();
      let file = await getAllFile();
      setUsers(JSON.parse(data).data);
      setFiles(JSON.parse(file.data));
    })();
  }, []);

  return (
    <Box component="main" className="Main" sx={[{ p: 2 }]}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,240px)",
          gap: 2,
        }}
      >
        {files.length !== 0 ? (
          users &&
          files.map((v: any) => <FileCard {...v} users={users} option={true} />)
        ) : (
          <Typography>No File Found</Typography>
        )}
      </Box>
    </Box>
  );
};

export default page;
