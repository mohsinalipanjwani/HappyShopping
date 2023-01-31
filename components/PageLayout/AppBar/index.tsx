import React from "react";
import { BottomNavigationActionTypeMap, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import RightMenu from "./RightMenu";
import SearchField from "./Search Field";
import { AppBar, BoxWrapper, Toolbar } from "./Styled";

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
