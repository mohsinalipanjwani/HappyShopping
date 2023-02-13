/*
 * LoginScreen Messages
 *
 * This contains all the text for the LoginScreen
 */

import { defineMessages } from "react-intl";

export const scope = "app.screens.LoginScreen";

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: "Profile setting",
  },

  
  uploadButton: {
    id: `${scope}.uploadButton`,
    defaultMessage: "Upload New Photo",
  },

  resetButton: {
    id: `${scope}.resetButton`,
    defaultMessage: "Reset",
  },


  imageNote: {
    id: `${scope}.imageNote`,
    defaultMessage: "Allowed PNG or JPEG. Max size of 800K.",
  },

  
  firstNameLabel: {
    id: `${scope}.firstNameLabel`,
    defaultMessage: "First Name",
  },

  firstNamePlaceholder: {
    id: `${scope}.firstNamePlaceholder`,
    defaultMessage: "First Name",
  },

  
  lastNameLabel: {
    id: `${scope}.lastNameLabel`,
    defaultMessage: "Last Name",
  },

  lastNamePlaceholder: {
    id: `${scope}.lastNamePlaceholder`,
    defaultMessage: "Last Name",
  },

  
  emailLabel: {
    id: `${scope}.emailLabel`,
    defaultMessage: "Email",
  },

  emailPlaceholder: {
    id: `${scope}.emailPlaceholder`,
    defaultMessage: "Email",
  },

  
  phoneLabel: {
    id: `${scope}.phoneLabel`,
    defaultMessage: "Phone",
  },


  phonePlaceholder: {
    id: `${scope}.phonePlaceholder`,
    defaultMessage: "Phone",
  },


  
  addressLabel: {
    id: `${scope}.addressLabel`,
    defaultMessage: "Address",
  },


  addressPlaceholder: {
    id: `${scope}.addressPlaceholder`,
    defaultMessage: "Address",
  },

  
  dobLabel: {
    id: `${scope}.dobLabel`,
    defaultMessage: "Birthday",
  }
});
