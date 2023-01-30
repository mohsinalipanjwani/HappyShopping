import React from "react";
import Image from "theme/Image";
import { LOGO } from "configs";
import { DrawerHeader } from "./Styled";
import MenuData from "./navLinks";
import {
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

interface BarComponentProps {
  open?: boolean;
  clickHandler?: any;
}

const DrawerContent: React.FC<BarComponentProps> = ({ open, clickHandler }) => {
  return (
    <>
      <DrawerHeader>
        <Box
          sx={{
            height: 50,
            display: "flex",
            position: "relative",
            width: "100%",
            justifyContent: "start",
          }}
        >
          <Image
            height={50}
            width={100}
            alt="mini-logo"
            lazyLoadProps={{ height: 50 }}
            src={LOGO}
            lazyLoad={true}
          />
        </Box>
        <IconButton onClick={clickHandler}>
          <MenuIcon />
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {MenuData.map((item: any) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default DrawerContent;
