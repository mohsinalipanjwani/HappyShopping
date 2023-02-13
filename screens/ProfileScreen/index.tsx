import React, { SyntheticEvent, useState } from "react";

import { Box, Card, Container, Typography } from "@mui/material";
import { TabList, TabPanel, TabContext } from "@mui/lab";

import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

import PageLayout from "components/PageLayout";
import FormattedMessage from "theme/FormattedMessage";

import General from "./Tabs/General";
import TabSecurity from "./TabSecurity";
import TabInfo from "./TabInfo";
import messages from "./messages";
import { Tab, TabName } from "./Styled";

const ProfileScreen: React.FC = () => {
  // ** State
  const [value, setValue] = useState<string>("general");

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <PageLayout>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 4,
        }}
      >
        <Container maxWidth={false}>
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
            mb={2}
          >
            <Typography sx={{ m: 1 }} variant="h4">
              <FormattedMessage {...messages.title} />
            </Typography>
          </Box>
          <Card>
            <TabContext value={value}>
              <TabList
                onChange={handleChange}
                aria-label="account-settings tabs"
                sx={{
                  borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
                }}
              >
                <Tab
                  value="general"
                  label={
                    <Box sx={{ display: "flex", alignItems: "center", height: "50px" }}>
                      <PersonOutlineIcon />
                      <TabName>General</TabName>
                    </Box>
                  }
                />
                <Tab
                  value="security"
                  label={
                    <Box sx={{ display: "flex", alignItems: "center", height: "50px" }}>
                      <LockOpenIcon />
                      <TabName>Security</TabName>
                    </Box>
                  }
                />
                <Tab
                  value="social"
                  label={
                    <Box sx={{ display: "flex", alignItems: "center", height: "50px" }}>
                      <InfoOutlinedIcon />
                      <TabName>Social Link</TabName>
                    </Box>
                  }
                />
                <Tab
                  value="mail"
                  label={
                    <Box sx={{ display: "flex", alignItems: "center", height: "50px" }}>
                      <InfoOutlinedIcon />
                      <TabName>Mail Setting</TabName>
                    </Box>
                  }
                />
                <Tab
                  value="products"
                  label={
                    <Box sx={{ display: "flex", alignItems: "center", height: "50px" }}>
                      <InfoOutlinedIcon />
                      <TabName>Products</TabName>
                    </Box>
                  }
                />
                <Tab
                  value="orders"
                  label={
                    <Box sx={{ display: "flex", alignItems: "center", height: "50px" }}>
                      <InfoOutlinedIcon />
                      <TabName>Orders</TabName>
                    </Box>
                  }
                />
              </TabList>

              <TabPanel sx={{ p: 0 }} value="general">
                <General />
              </TabPanel>
              <TabPanel sx={{ p: 0 }} value="security">
                <TabSecurity />
              </TabPanel>
              <TabPanel sx={{ p: 0 }} value="info">
                <TabInfo />
              </TabPanel>
            </TabContext>
          </Card>
        </Container>
      </Box>
    </PageLayout>
  );
};

export default ProfileScreen;
