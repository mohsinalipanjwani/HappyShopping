import { Container, Box, Grid, Typography } from "@mui/material";

import FormattedMessage from "theme/FormattedMessage";
import messages from "../messages";
import { ButtonWrapper } from "theme/Buttons";
import { Basic } from "./formLayout";
import PageLayout from "components/PageLayout";

const ProductAdd = () => {
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
              <FormattedMessage {...messages.addTitle} />
            </Typography>
            <Box sx={{ m: 1 }}>
              <ButtonWrapper variant="outlined" sx={{ mr: 1 }}>
                <FormattedMessage {...messages.draftButton} />
              </ButtonWrapper>
              <ButtonWrapper color="primary" variant="contained">
                <FormattedMessage {...messages.publishButton} />
              </ButtonWrapper>
            </Box>
          </Box>

          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={3}
          >
            <Grid item xs>
              <Basic />
            </Grid>
            <Grid item xs="auto"></Grid>
          </Grid>
        </Container>
      </Box>
    </PageLayout>
  );
};

export default ProductAdd;
