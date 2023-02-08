/*
 * OrderTrackScreen Messages
 *
 * This contains all the text for the OrderTrackScreen
 */

import { defineMessages } from "react-intl";

export const scope = "app.screens.OrderTrackScreen";

export default defineMessages({
  listTitle: {
    id: `${scope}.listTitle`,
    defaultMessage: "Order Tracking",
  },
  date:{
    id: `${scope}.date`,
    defaultMessage: "Wed, Aug 13, 2022, 4:34PM",
  },
  detailButton:{
    id: `${scope}.detailButton`,
    defaultMessage: "View Order Detail",
  },
});
