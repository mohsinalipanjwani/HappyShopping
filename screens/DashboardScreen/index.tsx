import FormattedMessage from "theme/FormattedMessage";
import { Box, Grid, Typography } from "@mui/material";

import messages from "./messages";
import StatisticsCard from "./statisticsCard";
import SaleChart from "./saleChart";
import RevenueChart from "./revenueChart";
import LatestOrder from "./latestOrder";
import { cardData, saleChartData } from "./data";

const DashboardScreen: React.FC = () => {
  return (
    <>
      <Box sx={{ padding: "20px" }}>
        <Grid container spacing={3}>
          <Grid item sm={12} md={6}>
            <Typography variant="h4" component="h1">
              <FormattedMessage {...messages.title} />
            </Typography>
            <Typography variant="subtitle1" component="h6" mb={3}>
              <FormattedMessage {...messages.subTitle} />
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <StatisticsCard data={cardData} />
          <Grid item sm={12} md={8}>
            <SaleChart title={<FormattedMessage {...messages.saleTitle} />} />
          </Grid>
          <Grid item sm={12} md={4}>
            <RevenueChart
              title={<FormattedMessage {...messages.revenueTitle} />}
            />
          </Grid>

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
