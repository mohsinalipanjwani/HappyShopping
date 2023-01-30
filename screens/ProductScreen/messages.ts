/*
 * HomeScreen Messages
 *
 * This contains all the text for the HomeScreen
 */

import { defineMessages } from "react-intl";

export const scope = "app.screens.HomeScreen";

export default defineMessages({
  listTitle: {
    id: `${scope}.listTitle`,
    defaultMessage: "Products",
  },
  categoriesLabel: {
    id: `${scope}.categoriesLabel`,
    defaultMessage: "All Categories",
  },
  statusLabel: {
    id: `${scope}.statusLabel`,
    defaultMessage: "Status",
  },
  addButton: {
    id: `${scope}.addButton`,
    defaultMessage: "Create New",
  },
  importButton: {
    id: `${scope}.importButton`,
    defaultMessage: "Import",
  },
  exportButton: {
    id: `${scope}.exportButton`,
    defaultMessage: "Export",
  },
  editButton: {
    id: `${scope}.editButton`,
    defaultMessage: "Edit",
  },
  deleteButton: {
    id: `${scope}.deleteButton`,
    defaultMessage: "Delete",
  },


  // Add Product Page
  addTitle: {
    id: `${scope}.addTitle`,
    defaultMessage: "Add New Product",
  },
  publishButton: {
    id: `${scope}.publishButton`,
    defaultMessage: "Publish",
  },
  draftButton: {
    id: `${scope}.draftButton`,
    defaultMessage: "Save to draft",
  },
});
