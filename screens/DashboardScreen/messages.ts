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
  subtitle: {
    id: `${scope}.subtitle`,
    defaultMessage: "Whole data about your business her",
  },
  saletitle: {
    id: `${scope}.saletitle`,
    defaultMessage: "Sale statistics",
  },
  revenuetitle: {
    id: `${scope}.revenuetitle`,
    defaultMessage: "Revenue Base on Area",
  },
  ordertitle: {
    id: `${scope}.ordertitle`,
    defaultMessage: "Latest Order",
  },
 
});
