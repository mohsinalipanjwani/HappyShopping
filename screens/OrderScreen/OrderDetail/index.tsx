import dynamic from "next/dynamic";
import {
  Container,
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
} from "@mui/material";

import FormattedMessage, { useFormattedMessage } from "theme/FormattedMessage";
import ContactCard from "components/ContactCard";

import DetailCardHead from "./detailCardHead";
import OrderProduct from "./detail/orderProduct";
import Notes from "./detail/notes";
import messages from "./messages";
import { CardHeaderWrapper } from "../Styled";
import { contactData, rows, amountDetail, status } from "./data";

const PageLayout = dynamic(() => import("components/PageLayout"), {
  ssr: false,
});

const OrderDetail = () => {
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
              <FormattedMessage {...messages.detailTitle} />
            </Typography>
          </Box>
          <Card>
            <CardHeaderWrapper
              title={
                <DetailCardHead id={id} date={orderDate} status={status} />
              }
            />
            <CardContent sx={{ padding: 0 }}>
              <Container>
                <Grid container spacing={3} mt={1}>
                  <ContactCard data={contactData} isIcon={true} column={9} />
                </Grid>
                <Grid container spacing={3} mt={1}>
                  <Grid item xs={12} md={7}>
                    <OrderProduct
                      rows={rows}
                      subTotal={amountDetail.subTotal}
                      shipping={amountDetail.shipping}
                      grandTotal={amountDetail.grandTotal}
                      status={amountDetail.status}
                    />
                  </Grid>
                  <Grid item xs={12} md={1}></Grid>
                  <Grid item xs={12} md={4}>
                    <Notes />
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

export default OrderDetail;