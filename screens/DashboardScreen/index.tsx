import FormattedMessage from "theme/FormattedMessage";
import { Paper, Box, Grid, Typography } from "@mui/material";

import messages from "./messages";
import StatisticsCard from "./statisticscard";
import SaleChart from "./salechart";
import RevenueChart from "./revenuechart";
import LatestOrder from "./latestorder";
import { cardData, revenueChartData, saleChartData } from "./data";

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
              <FormattedMessage {...messages.subtitle} />
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <StatisticsCard data={cardData} />
          <Grid item sm={12} md={8}>
            <SaleChart
              title={<FormattedMessage {...messages.saletitle} />}
              chart={saleChartData}
            />
          </Grid>
          <Grid item sm={12} md={4}>
            <RevenueChart
              title={<FormattedMessage {...messages.revenuetitle} />}
              chart={revenueChartData}
            />
          </Grid>

          <Grid item sm={12}>
            <LatestOrder
              title={<FormattedMessage {...messages.ordertitle} />}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default DashboardScreen;
