import ThemeSwitcher from "components/ThemeSwitch";
import {
  DrawerHeader,
  AppBar,
  Drawer,
  Search,
  SearchIconWrapper,
  StyledInputBase,
  Toolbar,
  BoxWrapper,
} from "./Styled";
import Image from "theme/Image";
import {
  Badge,
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  //   Toolbar,
} from "@mui/material";
import React from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";
import MenuData from "./Menu";
import { getItem } from "localforage";
// import messages from "./messages";

const Sidebar: React.FC = () => {
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <>
      {/* <BoxWrapper> */}
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <BoxWrapper>
            <IconButton
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Search>
              <StyledInputBase placeholder="Search Form" />
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
            </Search>
          </BoxWrapper>
          <BoxWrapper>
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
                src={require("../../public/8.jpg")}
              />
            </IconButton>
          </BoxWrapper>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          {/* <Image lazyLoad={true}>
            <img src={require("../../public/logo.svg")} />
          </Image> */}
          <IconButton onClick={handleDrawerClose}>
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
      </Drawer>
    </>
  );
};

export default Sidebar;
