"use client";
import * as React from "react";
import List from "@mui/joy/List";
import ListSubheader from "@mui/joy/ListSubheader";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import ListItemContent from "@mui/joy/ListItemContent";

import FolderRoundedIcon from "@mui/icons-material/FolderRounded";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";
import { Close, Menu, UploadFile } from "@mui/icons-material";
import { usePathname, useRouter } from "next/navigation";

export default function Navigation(props: {
  onClick?: () => void;
  isOpen?: boolean;
}) {
  const path = usePathname();
  const router = useRouter();
  console.log(props.isOpen);

  return (
    <List size="sm" sx={{ "--ListItem-radius": "8px", "--List-gap": "4px" }}>
      <ListItem nested>
        <ListItemButton sx={{ width: 35 }} onClick={props.onClick}>
          {/* {!props.isOpen ? <Menu /> : <Close />} */}
        </ListItemButton>
        {/* {!props.isOpen ?? (
          <ListSubheader sx={{ letterSpacing: "2px", fontWeight: "800" }}>
            Browse
          </ListSubheader>
        )} */}
        <List
          aria-labelledby="nav-list-browse"
          sx={{ "& .JoyListItemButton-root": { p: "8px" } }}
        >
          <ListItem>
            <ListItemButton
              onClick={() => router.push("/dashboard")}
              selected={path.endsWith("dashboard")}
            >
              <ListItemDecorator>
                <FolderRoundedIcon fontSize="small" />
              </ListItemDecorator>
              {/* {props.isOpen ? ( */}
              <ListItemContent>My files</ListItemContent>
              {/* ) : null} */}
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton
              onClick={() => router.push("/dashboard/upload-file")}
              selected={path.endsWith("upload-file")}
            >
              <ListItemDecorator>
                <UploadFile fontSize="small" />
              </ListItemDecorator>
              {/* {props.isOpen ? ( */}
              <ListItemContent>Upload file</ListItemContent>
              {/* ) : null} */}
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton
              onClick={() => router.push("/dashboard/share-files")}
              selected={path.endsWith("share-files")}
            >
              <ListItemDecorator>
                <ShareRoundedIcon fontSize="small" />
              </ListItemDecorator>
              {/* {props.isOpen ? ( */}
              <ListItemContent>Shared files</ListItemContent>
              {/* ) : null} */}
            </ListItemButton>
          </ListItem>
        </List>
      </ListItem>
    </List>
  );
}

export function _Navigation() {
  const path = usePathname();
  const router = useRouter();

  return (
    <List size="sm" sx={{ "--ListItem-radius": "8px", "--List-gap": "4px" }}>
      <ListItem nested>
        <ListSubheader sx={{ letterSpacing: "2px", fontWeight: "800" }}>
          Browse
        </ListSubheader>

        <List
          aria-labelledby="nav-list-browse"
          sx={{ "& .JoyListItemButton-root": { p: "8px" } }}
        >
          <ListItem>
            <ListItemButton
              onClick={() => router.push("/dashboard")}
              selected={path.endsWith("dashboard")}
            >
              <ListItemDecorator>
                <FolderRoundedIcon fontSize="small" />
              </ListItemDecorator>

              <ListItemContent>My files</ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton
              onClick={() => router.push("/dashboard/upload-file")}
              selected={path.endsWith("upload-file")}
            >
              <ListItemDecorator>
                <UploadFile fontSize="small" />
              </ListItemDecorator>

              <ListItemContent>Upload file</ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton
              onClick={() => router.push("/dashboard/share-files")}
              selected={path.endsWith("share-files")}
            >
              <ListItemDecorator>
                <ShareRoundedIcon fontSize="small" />
              </ListItemDecorator>

              <ListItemContent>Shared files</ListItemContent>
            </ListItemButton>
          </ListItem>
        </List>
      </ListItem>
    </List>
  );
}
