import Typography from "@mui/material/Typography";
import ThemeSwitcher from "components/ThemeSwitch";
import FormattedMessage from "theme/FormattedMessage";


import messages from "./messages";
import { BoxWrapper } from "./Styled";
import PageLayout from "../../components/PageLayout";
import { useAuthContext } from "contexts/AuthContext";
import { Button } from "@mui/material";

const HomeScreen: React.FC = () => {
const { signOut } = useAuthContext();

  return (
    <>
      <BoxWrapper>
        <Typography>
          <FormattedMessage {...messages.title} />
        </Typography>
        <ThemeSwitcher />
      </BoxWrapper>
      <Typography sx={{ ml: 4 }}>
        <FormattedMessage {...messages.description} />
      </Typography>
      <Button onClick={() => signOut()}>
        SignOut
      </Button>
    </>
  );
};

export default HomeScreen;
