import * as React from "react";
import DrawerContent from "./DrawerContent";
import AppBarComponent from "./AppBar";
import { Box, Container } from "@mui/material";
import { DrawerHeader } from "./DrawerContent/Styled";
import Drawer from "./Drawer";
interface Props {
  children?: JSX.Element;
}

const PageLayout = (props: Props) => {
  const primaryDrawerWidth = 300;
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(!open);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <Box
        sx={{
          width: open ? primaryDrawerWidth : 60,
        }}
        component="nav"
      >
        <Drawer
          open={open}
          width={open ? primaryDrawerWidth : 60}
          onClose={handleDrawerClose}
        >
          <DrawerContent clickHandler={handleDrawerClose} />
        </Drawer>
      </Box>

      <AppBarComponent open={open} clickHandler={handleDrawerOpen} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${primaryDrawerWidth}px )` },
          marginTop: 4,
        }}
      >
        {props.children ? props.children : null}
      </Box>
    </Box>
  );
};

export default PageLayout;
