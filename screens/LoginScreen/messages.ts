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
    defaultMessage: "Hello",
  },
  description: {
    id: `${scope}.description`,
    defaultMessage: "This is the basic starter project for react",
  },
  emailLabel: {
    id: `${scope}.emailLabel`,
    defaultMessage: "Enter your Email",
  },
  passwordLabel: {
    id: `${scope}.passwordLabel`,
    defaultMessage: "Enter Password",
  },
  emailPlaceholder: {
    id: `${scope}.emailPlaceholder`,
    defaultMessage: "Enter your Mail",
  },
  passwordPlaceholder: {
    id: `${scope}.passwordPlaceholder`,
    defaultMessage: "Enter your password",
  },
  rememberLabel: {
    id: `${scope}.rememberLabel`,
    defaultMessage: "Remember me",
  },

  forgot: {
    id: `${scope}.forgot`,
    defaultMessage: "Forgot password?",
  },

  signin: {
    id: `${scope}.signin`,
    defaultMessage: "Sign In",
  },
 
  textSignup: {
    id: `${scope}.textSignup`,
    defaultMessage: "Don’t have an account?",
  },

  signup: {
    id: `${scope}.signup`,
    defaultMessage: "Sign up now",
  },
 

});
