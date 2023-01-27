import FormattedMessage from "theme/FormattedMessage";
import { Box, Grid, Typography } from "@mui/material";

import messages from "./messages";
import StatisticsCard from "./statisticsCard";
import SaleChart from "./saleChart";
import RevenueChart from "./revenueChart";
import LatestOrder from "./latestOrder";
import NewsUpdate from "./newsUpdate";
import OrderTimeline from "./orderTimeline";

import { cardData, newsData, orderData } from "./data";

const DashboardScreen: React.FC = () => {
  return (
    <>
      <Box sx={{ padding: "20px" }}>
        <Grid container spacing={3} mb={3}>
          <Grid item sm={12} md={6}>
            <Typography variant="h4" component="h1">
              <FormattedMessage {...messages.title} />
            </Typography>
            <Typography variant="subtitle1" component="h6">
              <FormattedMessage {...messages.subTitle} />
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={3} mb={3}>
          <StatisticsCard data={cardData} />
        </Grid>

        <Grid container spacing={3} mb={3}>
          <Grid item sm={12} md={8}>
            <SaleChart title={<FormattedMessage {...messages.saleTitle} />} />
          </Grid>

          <Grid item sm={12} md={4}>
            <RevenueChart
              title={<FormattedMessage {...messages.revenueTitle} />}
            />
          </Grid>
        </Grid>

        <Grid container spacing={3} mb={3}>
          <Grid item sm={12} md={8}>
            <NewsUpdate
              title={<FormattedMessage {...messages.newsTitle} />}
              subheader={<FormattedMessage {...messages.newsSubTitle} />}
              button={<FormattedMessage {...messages.newsButton} />}
              list={newsData}
            />
          </Grid>
          <Grid item sm={12} md={4}>
            <OrderTimeline
              title={<FormattedMessage {...messages.orderTimelineTitle} />}
              subheader={
                <FormattedMessage {...messages.orderTimelineSubTitle} />
              }
              list={orderData}
            />
          </Grid>
        </Grid>

        <Grid container spacing={3} mb={3}>
          <Grid item sm={12}>
            <LatestOrder
              title={<FormattedMessage {...messages.orderTitle} />}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default DashboardScreen;
