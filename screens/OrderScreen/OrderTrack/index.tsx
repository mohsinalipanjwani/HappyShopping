import dynamic from "next/dynamic";
import {
  Container,
  Box,
  Card,
  CardContent,
  Typography,
  OutlinedInput,
  Grid,
} from "@mui/material";

import FormattedMessage, { useFormattedMessage } from "theme/FormattedMessage";
import ContactCard from "components/ContactCard";

import DetailCardHead from "../OrderDetail/detailCardHead";
import OrderStage from "./stage";
import messages from "./messages";
import { steps } from "./data";
import { ButtonWrapper, CardHeaderWrapper } from "../Styled";
import { contactData, status } from "../OrderDetail/data";

const PageLayout = dynamic(() => import("components/PageLayout"), {
  ssr: false,
});

const OrderTrack = () => {
  const id = "440";
  const orderDate = useFormattedMessage(messages.date);

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
          </Box>
          <Card>
            <CardHeaderWrapper
              title={
                <DetailCardHead id={id} date={orderDate} status={status} />
              }
            />
            <CardContent>
              <Container>
                <Grid container spacing={15} pt={5} pb={5} sx={{ textAlign: "center" }}>
                  <Grid item xs={12}>
                    <OrderStage steps={steps} />
                  </Grid>
                  
                  <ContactCard data={contactData} isIcon={false} column={12} />
                  
                  <Grid item xs={12}>
                    <ButtonWrapper
                      variant="contained"
                      color="primary"
                      href="page-orders-tracking.html"
                      sx={{ width: "250px" }}
                    >
                      <FormattedMessage {...messages.detailButton} />
                    </ButtonWrapper>
                  </Grid>
                </Grid>
              </Container>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </PageLayout>
  );
};

export default OrderTrack;
