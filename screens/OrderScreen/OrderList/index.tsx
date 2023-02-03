import {
  Container,
  Box,
  Card,
  CardContent,
  Typography,
  OutlinedInput,
} from "@mui/material";

import FormattedMessage, { useFormattedMessage } from "theme/FormattedMessage";
import PageLayout from "components/PageLayout";

import Filters from "./filters";
import Lists from "./lists";
import messages from "./messages";

const OrderList = () => {
  const textPlaceholder = useFormattedMessage(messages.searchIdPlaceholder);

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
              <OutlinedInput
                id="searchId"
                name="searchId"
                fullWidth
                placeholder={textPlaceholder}
                sx={{ height: "50px", backgroundColor: (theme) => theme.palette.background.paper }}
              />
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

export default OrderList;
