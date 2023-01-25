import React from "react";
import { useFormik } from "formik";
import * as Yup from 'yup'; 
import {
  Grid,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Box,
} from "@mui/material";
import FormattedMessage, { useFormattedMessage } from "theme/FormattedMessage";
import { ButtonWrapper } from "./Styled";
import messages from "./messages";



const validationSchema = Yup.object().shape({    
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(6).label("Password")
});


const LoginForm = () => {
  // use formik
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
    useFormik({
      initialValues: { email: "", password: "" },
      validationSchema,
      onSubmit: (values, { resetForm }) => {
        resetForm();
      },
    });

  // handleResetPass
  const handleResetPass = (email: string) => {};

  const emailPlaceholder = useFormattedMessage(messages.emailPlaceholder)
  const passwordPlaceholder = useFormattedMessage(messages.passwordPlaceholder)

  return (
    <form onSubmit={handleSubmit}>
      <Grid container direction={"column"} spacing={5}>
        <Grid item>
          <TextField
            id="email"
            label={<FormattedMessage {...messages.emailLabel} />}
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
            placeholder={emailPlaceholder}
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && errors.email}
            autoComplete='off'
          />
        </Grid>

        <Grid item>
          <TextField
            id="password"
            label={<FormattedMessage {...messages.passwordLabel} />}
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            type="password"
            placeholder={passwordPlaceholder}
            error={touched.password && Boolean(errors.password)}
            helperText={touched.password && errors.password}
            autoComplete='off'
          />
        </Grid>
      </Grid>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          margin: "20px 0",
        }}
      >
        <FormControlLabel
          control={
            <Checkbox id="Remember" name="fav_language" value="Remember" color="secondary"  />
          }
          label={<FormattedMessage {...messages.rememberLabel} />}
        />
        <Link
          href="#"
          underline="none"
          color="secondary"
          onClick={() => handleResetPass(values.email)}
        >
          <FormattedMessage {...messages.forgot} />
        </Link>
      </Box>

      <Box>
        <ButtonWrapper
          type="submit"
          variant="contained"
        >
          <FormattedMessage {...messages.signin} />
        </ButtonWrapper>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          margin: "20px 0",
        }}
      >
        <Link href="#" underline="none">
          <FormattedMessage {...messages.textSignup} />
        </Link>
        <Link href="/register" underline="none">
          <FormattedMessage {...messages.signup} />
        </Link>
      </Box>
    </form>
  );
};

export default LoginForm;
