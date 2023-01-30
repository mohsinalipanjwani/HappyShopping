import { BottomNavigationActionTypeMap, IconButton } from "@mui/material";
import React from "react";
import { AppBar, Toolbar, BoxWrapper } from "./Styled";
import MenuIcon from "@mui/icons-material/Menu";
import SearchField from "./Search Field";
import RightMenu from "./RightMenu";

interface BarComponentProps {
  open?: boolean;
  clickHandler?: any;
}

const AppBarComponent: React.FC<BarComponentProps> = ({
  open,
  clickHandler,
}) => {
  return (
    <>
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <BoxWrapper>
            <IconButton
              onClick={clickHandler}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <SearchField />
          </BoxWrapper>
          <BoxWrapper>
            <RightMenu />
          </BoxWrapper>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default AppBarComponent;
