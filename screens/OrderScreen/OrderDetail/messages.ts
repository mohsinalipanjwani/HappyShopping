/*
 * OrderDetailScreen Messages
 *
 * This contains all the text for the OrderDetailScreen
 */

import { defineMessages } from "react-intl";

export const scope = "app.screens.OrderDetailScreen";

export default defineMessages({
  detailTitle: {
    id: `${scope}.detailTitle`,
    defaultMessage: "Order detail",
  },
  statusLabel:{
    id: `${scope}.statusLabel`,
    defaultMessage: "Change Status",
  },
  saveButton: {
    id: `${scope}.saveButton`,
    defaultMessage: "Save",
  },
  printButton: {
    id: `${scope}.printButton`,
    defaultMessage: "Print Button",
  },
  date:{
    id: `${scope}.date`,
    defaultMessage: "Wed, Aug 13, 2022, 4:34PM",
  },
  orderId:{
    id: `${scope}.orderId`,
    defaultMessage: "Order ID: ",
  },
  trackButton:{
    id: `${scope}.trackButton`,
    defaultMessage: "View Order Tracking",
  },
  notes:{
    id: `${scope}.notes`,
    defaultMessage: "Notes",
  },
  notesPlaceholder:{
    id: `${scope}.notesPlaceholder`,
    defaultMessage: "Type Some Note",
  },
  saveNoteButton:{
    id: `${scope}.saveNoteButton`,
    defaultMessage: "Save Note",
  },
  paymentInfoTitle:{
    id: `${scope}.paymentInfoTitle`,
    defaultMessage: "Payment info",
  },
  paymentCard:{
    id: `${scope}.paymentCard`,
    defaultMessage: "Master Card **** **** 4768",
  },
  paymentBusiness:{
    id: `${scope}.paymentBusiness`,
    defaultMessage: "Business name: Grand Market LLC",
  },
  paymentPhone:{
    id: `${scope}.paymentPhone`,
    defaultMessage: "Phone: +1 (800) 555-154-52",
  },
  subTotal:{
    id: `${scope}.subTotal`,
    defaultMessage: "Sub Total",
  },
  shipping:{
    id: `${scope}.shipping`,
    defaultMessage: "Shipping Cost",
  },
  grandTotal:{
    id: `${scope}.grandTotal`,
    defaultMessage: "Grand Total",
  },
  status:{
    id: `${scope}.status`,
    defaultMessage: "Status",
  }
});
