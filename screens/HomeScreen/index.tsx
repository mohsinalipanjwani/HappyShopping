import Typography from "@mui/material/Typography";
import ThemeSwitcher from "components/ThemeSwitch";
import FormattedMessage from "theme/FormattedMessage";

import messages from "./messages";
import { BoxWrapper } from "./Styled";
import Sidebar from "components/Sidebar";

const HomeScreen: React.FC = () => {
  return (
    <>
      <Sidebar />
      {/* <BoxWrapper>
        <Typography>
          <FormattedMessage {...messages.title} />
        </Typography> */}
      <ThemeSwitcher />
      {/* </BoxWrapper> */}
      {/* <Typography sx={{ ml: 4 }}>
        <FormattedMessage {...messages.description} />
      </Typography> */}
    </>
  );
};

export default HomeScreen;
