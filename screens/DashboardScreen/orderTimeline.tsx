// @mui
import PropTypes from "prop-types";
import { Card, Typography, CardHeader, CardContent } from "@mui/material";
import {
  Timeline,
  TimelineDot,
  TimelineItem,
  TimelineContent,
  TimelineSeparator,
  TimelineConnector,
} from "@mui/lab";

interface listProps {
  id: number;
  time: string;
  title: string;
  type: string;
}

interface OrderTimelineProps {
  title?: JSX.Element | string;
  subheader?: JSX.Element | string;
  list: listProps[];
}

const OrderTimeline: React.FC<OrderTimelineProps> = ({
  title,
  subheader,
  list,
}) => {
  return (
    <Card>
      <CardHeader title={title} subheader={subheader} />

      <CardContent
        sx={{
          "& .MuiTimelineItem-missingOppositeContent:before": {
            display: "none",
          },
        }}
      >
        <Timeline>
          {list.map((item, index) => (
            <OrderItem
              key={item.id}
              item={item}
              isLast={index === list.length - 1}
            />
          ))}
        </Timeline>
      </CardContent>
    </Card>
  );
};
export default OrderTimeline;

// ----------------------------------------------------------------------

interface itemProps {
  isLast: boolean;
  item: {
    time: string;
    title: string;
    type: string;
  };
}

const OrderItem: React.FC<itemProps> = ({ item, isLast }) => {
  const { type, title, time } = item;
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot
          color={
            (type === "order1" && "primary") ||
            (type === "order2" && "success") ||
            (type === "order3" && "info") ||
            (type === "order4" && "warning") ||
            "error"
          }
        />
        {isLast ? null : <TimelineConnector />}
      </TimelineSeparator>

      <TimelineContent>
        <Typography variant="subtitle2">{title}</Typography>

        <Typography variant="caption" sx={{ color: "text.secondary" }}>
          {time}
        </Typography>
      </TimelineContent>
    </TimelineItem>
  );
};
