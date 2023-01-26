import React  from "react";
import { Paper, Select, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



const RevenueChart = ({
  title,
  chart,
  ...other
}: any) => {
  // local
  var theme = useTheme();

  return (
    <Paper {...other}>
      <Typography variant="h5" color="text" sx={{ padding: theme.spacing(3, 3, 0)}} >
        {title}
      </Typography>
      <ResponsiveContainer width="100%" height={350}>
      <BarChart
          data={chart}
          margin={{ top: 20, right: 30, left: 0, bottom: 20 }}
        >
          <Legend
            layout="horizontal"
            verticalAlign="top"
            align="center"
            iconType="circle"
            formatter={(value, entry, index) =>
              <Typography variant="subtitle1" component="span" sx={{color: theme.palette.primary.dark }}>
                { value[0].toUpperCase() + value.substring(1) }
              </Typography>
            }
            wrapperStyle={{
              paddingBottom: "20px"
            }}
          />
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="us" fill="#5897FB" />
          <Bar dataKey="europe" fill="#5897FB" />
          <Bar dataKey="asian" fill="#FF9076" />
          <Bar dataKey="africa" fill="#D85DF7" />
        </BarChart>
      </ResponsiveContainer>
    </Paper>
  );
};

export default RevenueChart;
