/*
 * HomeScreen Messages
 *
 * This contains all the text for the HomeScreen
 */

import { defineMessages } from "react-intl";

export const scope = "app.screens.HomeScreen";

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: "Dashboard",
  },
  subTitle: {
    id: `${scope}.subTitle`,
    defaultMessage: "Whole data about your business her",
  },
  saleTitle: {
    id: `${scope}.saleTitle`,
    defaultMessage: "Sale statistics",
  },
  revenueTitle: {
    id: `${scope}.revenueTitle`,
    defaultMessage: "Revenue Base on Area",
  },
  orderTitle: {
    id: `${scope}.orderTitle`,
    defaultMessage: "Latest Order",
  },
  viewButton:{
    id: `${scope}.viewButton`,
    defaultMessage: "View Detail",
  }
 
});
