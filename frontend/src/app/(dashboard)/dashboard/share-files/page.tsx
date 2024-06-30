"use client";
import { getAllFile, getAllUsers, getShareFile } from "@/api";
import FileCard from "@/components/Card";
import { useAuth } from "@/providers/auth.provider";
import { Box, Button, Typography } from "@mui/joy";
import React from "react";

const page = () => {
  const [files, setFiles] = React.useState([]);
  const { user } = useAuth();
  console.log(user);

  React.useEffect(() => {
    (async () => {
      let file = await getShareFile(user.id);
      if (file.status == 200) setFiles(JSON.parse(file.data));
    })();
  }, [user]);

  return (
    <Box component="main" className="Main" sx={[{ p: 2 }]}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, 240px)",
          gap: 2,
        }}
      >
        {files.length !== 0 ? (
          files.map((v: any) => <FileCard {...v} users={[]} option={false} />)
        ) : (
          <Typography>No File Found</Typography>
        )}
      </Box>
    </Box>
  );
};

export default page;
