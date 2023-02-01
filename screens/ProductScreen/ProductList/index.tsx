import { Container, Box, Card, CardContent, Typography } from "@mui/material";

import FormattedMessage from "theme/FormattedMessage";
import Filters from "./filters";
import Lists from "./lists";
import messages from "./messages";
import { ButtonWrapper } from "theme/Buttons";
import PageLayout from "components/PageLayout";

const ProductList = () => {
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
              <FormattedMessage {...messages.listTitle} />
            </Typography>
            <Box sx={{ m: 1 }}>
              <ButtonWrapper variant="outlined" sx={{ mr: 1 }}>
                <FormattedMessage {...messages.exportButton} />
              </ButtonWrapper>
              <ButtonWrapper variant="outlined" sx={{ mr: 1 }}>
                <FormattedMessage {...messages.importButton} />
              </ButtonWrapper>
              <ButtonWrapper
                color="primary"
                variant="contained"
                sx={{ width: "150px" }}
              >
                <FormattedMessage {...messages.addButton} />
              </ButtonWrapper>
            </Box>
          </Box>
          <Card>
            <CardContent>
              <Filters />
              <Lists />
            </CardContent>
          </Card>
        </Container>
      </Box>
    </PageLayout>
  );
};

export default ProductList;
