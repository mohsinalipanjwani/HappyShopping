import React from "react";
import { Avatar, Badge, IconButton } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ThemeSwitcher from "components/ThemeSwitch";

const RightMenu = () => {
  return (
    <>
      <ThemeSwitcher />
      <IconButton>
        <Badge badgeContent={3} color="success">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <IconButton>
        <Avatar
          sx={{ width: 30, height: 30 }}
          alt="John"
          //   src={require("../../public/8.jpg")}
        />
      </IconButton>
    </>
  );
};

export default RightMenu;
