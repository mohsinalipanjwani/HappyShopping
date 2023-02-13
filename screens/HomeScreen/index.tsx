import dynamic from "next/dynamic";

import { Box, Typography } from "@mui/material";
import ThemeSwitcher from "components/ThemeSwitch";
import FormattedMessage from "theme/FormattedMessage";

import { useAuthContext } from "contexts/AuthContext";
import { Button } from "@mui/material";

import messages from "./messages";
import { BoxWrapper } from "./Styled";

const PageLayout = dynamic(() => import("components/PageLayout"), {
  ssr: false,
});

const HomeScreen: React.FC = () => {
  const { signOut } = useAuthContext();

  return (
    <PageLayout>
      <Box>
        <BoxWrapper>
          <Typography>
            <FormattedMessage {...messages.title} />
          </Typography>
          <ThemeSwitcher />
        </BoxWrapper>
        <Typography sx={{ ml: 4 }}>
          <FormattedMessage {...messages.description} />
        </Typography>
        <Button onClick={() => signOut()}>SignOut</Button>
      </Box>
    </PageLayout>
  );
};

export default HomeScreen;
