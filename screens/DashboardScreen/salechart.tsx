import React from "react";
import FormattedMessage from "theme/FormattedMessage";
import { Paper, Select, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import {
  ResponsiveContainer,
  Tooltip,
  Legend,
  AreaChart,
  Area,
  CartesianGrid,
  YAxis,
  XAxis,
} from "recharts";
import messages from "./messages";


const SaleChart = ({
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
        <AreaChart
          width={730}
          height={250}
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
          <defs>
            <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorVisitors" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorProducts" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#FFC8E6" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#FFC8E6" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="sales"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorSales)"
            dot={{
              stroke: "#4e45ff",
              strokeWidth: 1,
              r: 4,
              strokeDasharray: "",
            }}
          />
          <Area
            type="monotone"
            dataKey="visitors"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorVisitors)"
            dot={{
              stroke: "#22e46b",
              strokeWidth: 1,
              r: 4,
              strokeDasharray: "",
            }}
          />
          <Area
            type="monotone"
            dataKey="products"
            stroke="#FFC8E6"
            fillOpacity={1}
            fill="url(#colorProducts)"
            dot={{
              stroke: "#ff2ea0",
              strokeWidth: 1,
              r: 4,
              strokeDasharray: "",
            }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </Paper>
  );
};

export default SaleChart;
