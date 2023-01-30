import React from "react";
import ThemeSwitcher from "components/ThemeSwitch";
import { Avatar, Badge, IconButton } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";

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
