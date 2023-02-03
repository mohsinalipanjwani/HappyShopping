/*
 * OrderListScreen Messages
 *
 * This contains all the text for the OrderListScreen
 */

import { defineMessages } from "react-intl";

export const scope = "app.screens.OrderListScreen";

export default defineMessages({
  listTitle: {
    id: `${scope}.listTitle`,
    defaultMessage: "Order List",
  },
  searchIdPlaceholder:{
    id: `${scope}.searchIdPlaceholder`,
    defaultMessage: "Search Order Id",
  },
  searchPlaceholder:{
    id: `${scope}.searchPlaceholder`,
    defaultMessage: "Search...",
  },
  statusLabel: {
    id: `${scope}.statusLabel`,
    defaultMessage: "Status",
  },
  limitRowLabel: {
    id: `${scope}.limitRowLabel`,
    defaultMessage: "Show 10",
  },
  editButton: {
    id: `${scope}.editButton`,
    defaultMessage: "Edit",
  },
  detailButton: {
    id: `${scope}.detailButton`,
    defaultMessage: "Detail",
  },

});
