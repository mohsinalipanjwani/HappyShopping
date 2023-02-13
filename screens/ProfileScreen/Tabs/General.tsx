import { useState, ChangeEvent, SyntheticEvent } from "react";

import {
  Box,
  Grid,
  Link,
  Alert,
  Typography,
  AlertTitle,
  IconButton,
  CardContent,
  OutlinedInput,
  FormHelperText,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import * as Yup from "yup";

import { ButtonWrapper } from "theme/Buttons";
import FormattedMessage, { useFormattedMessage } from "theme/FormattedMessage";

import { ImgStyled, InputLabelWrapper } from "../Styled";
import messages from "../messages";
import { useFormik } from "formik";

const General = () => {
  const [openAlert, setOpenAlert] = useState<boolean>(true);
  const [imgSrc, setImgSrc] = useState<string>("https://picsum.photos/200/300");

  const onChange = (file: ChangeEvent) => {
    const reader = new FileReader();
    const { files } = file.target as HTMLInputElement;
    if (files && files.length !== 0) {
      reader.onload = () => setImgSrc(reader.result as string);

      reader.readAsDataURL(files[0]);
    }
  };

  const firstNamePlaceholder = useFormattedMessage(
    messages.firstNamePlaceholder,
  );
  const lastNamePlaceholder = useFormattedMessage(messages.lastNamePlaceholder);
  const emailPlaceholder = useFormattedMessage(messages.emailPlaceholder);
  const phonePlaceholder = useFormattedMessage(messages.phonePlaceholder);
  const addressPlaceholder = useFormattedMessage(messages.addressPlaceholder);

  const validationSchema = Yup.object().shape({
    first_name: Yup.string().required().label("First Name"),
    last_name: Yup.string().required().label("Last Name"),
    email: Yup.string().required().label("Email"),
  });

  // use formik
  const {
    handleChange,
    handleSubmit,
    handleBlur,
    setFieldValue,
    errors,
    values,
    touched,
  } = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      address: "",
      phone: "",
      dob: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      resetForm();
    },
  });

  return (
    <CardContent>
      <form>
        <Grid container spacing={7}>
          <Grid item xs={12} sx={{ marginTop: 4.8, marginBottom: 3 }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <ImgStyled src={imgSrc} alt="Profile Pic" />
              <Box>
                <ButtonWrapper
                  color="primary"
                  variant="contained"
                  sx={{ mr: 2.5 }}
                >
                  <FormattedMessage {...messages.uploadButton} />
                  <input
                    hidden
                    type="file"
                    onChange={onChange}
                    accept="image/png, image/jpeg"
                    id="account-settings-upload-image"
                  />
                </ButtonWrapper>

                <ButtonWrapper
                  color="error"
                  variant="outlined"
                  onClick={() => setImgSrc("/images/avatars/1.png")}
                >
                  <FormattedMessage {...messages.resetButton} />
                </ButtonWrapper>

                <Typography variant="body2" sx={{ marginTop: 5 }}>
                  <FormattedMessage {...messages.imageNote} />
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6}>
            <InputLabelWrapper htmlFor="profile-first-name">
              <FormattedMessage {...messages.firstNameLabel} />
            </InputLabelWrapper>
            <OutlinedInput
              id="profile-first-name"
              name="first_name"
              placeholder={firstNamePlaceholder}
              fullWidth
              value={values.first_name}
              onBlur={handleBlur}
              onChange={handleChange}
              error={Boolean(touched.first_name && errors.first_name)}
            />
            {touched.first_name && errors.first_name && (
              <FormHelperText error id="standard-weight-helper-text-title">
                {errors.first_name}
              </FormHelperText>
            )}
          </Grid>

          <Grid item xs={12} sm={6}>
            <InputLabelWrapper htmlFor="profile-last-name">
              <FormattedMessage {...messages.lastNameLabel} />
            </InputLabelWrapper>
            <OutlinedInput
              id="profile-last-name"
              name="last_name"
              placeholder={lastNamePlaceholder}
              fullWidth
              value={values.last_name}
              onBlur={handleBlur}
              onChange={handleChange}
              error={Boolean(touched.last_name && errors.last_name)}
            />
            {touched.last_name && errors.last_name && (
              <FormHelperText error id="standard-weight-helper-text-title">
                {errors.last_name}
              </FormHelperText>
            )}
          </Grid>

          <Grid item xs={12} sm={6}>
            <InputLabelWrapper htmlFor="profile-email">
              <FormattedMessage {...messages.emailLabel} />
            </InputLabelWrapper>
            <OutlinedInput
              id="profile-email"
              name="email"
              placeholder={emailPlaceholder}
              fullWidth
              value={values.email}
              onBlur={handleBlur}
              onChange={handleChange}
              error={Boolean(touched.email && errors.email)}
            />
            {touched.email && errors.email && (
              <FormHelperText error id="standard-weight-helper-text-title">
                {errors.email}
              </FormHelperText>
            )}
          </Grid>

          <Grid item xs={12} sm={6}>
            <InputLabelWrapper htmlFor="profile-phone">
              <FormattedMessage {...messages.phoneLabel} />
            </InputLabelWrapper>
            <OutlinedInput
              id="profile-phone"
              name="phone"
              placeholder={phonePlaceholder}
              fullWidth
              value={values.phone}
              onBlur={handleBlur}
              onChange={handleChange}
              error={Boolean(touched.phone && errors.phone)}
            />
            {touched.phone && errors.phone && (
              <FormHelperText error id="standard-weight-helper-text-title">
                {errors.phone}
              </FormHelperText>
            )}
          </Grid>

          <Grid item xs={12} sm={6}>
            <InputLabelWrapper htmlFor="profile-address">
              <FormattedMessage {...messages.addressLabel} />
            </InputLabelWrapper>
            <OutlinedInput
              id="profile-address"
              name="address"
              placeholder={addressPlaceholder}
              fullWidth
              value={values.address}
              onBlur={handleBlur}
              onChange={handleChange}
              error={Boolean(touched.address && errors.address)}
            />
            {touched.address && errors.address && (
              <FormHelperText error id="standard-weight-helper-text-title">
                {errors.address}
              </FormHelperText>
            )}
          </Grid>

          <Grid item xs={12} sm={6}>
            <InputLabelWrapper htmlFor="profile-dob">
              <FormattedMessage {...messages.dobLabel} />
            </InputLabelWrapper>
            <OutlinedInput
              id="profile-dob"
              name="dob"
              type="date"
              fullWidth
              value={values.address}
              onBlur={handleBlur}
              onChange={handleChange}
              error={Boolean(touched.dob && errors.dob)}
            />
            {touched.dob && errors.dob && (
              <FormHelperText error id="standard-weight-helper-text-title">
                {errors.dob}
              </FormHelperText>
            )}
          </Grid>

          {openAlert ? (
            <Grid item xs={12} sx={{ mb: 3 }}>
              <Alert
                severity="warning"
                sx={{ "& a": { fontWeight: 400 } }}
                action={
                  <IconButton
                    size="small"
                    color="inherit"
                    aria-label="close"
                    onClick={() => setOpenAlert(false)}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
              >
                <AlertTitle>
                  Your email is not confirmed. Please check your inbox.
                </AlertTitle>
                <Link
                  href="/"
                  onClick={(e: SyntheticEvent) => e.preventDefault()}
                >
                  Resend Confirmation
                </Link>
              </Alert>
            </Grid>
          ) : null}

          <Grid item xs={12}>
            <ButtonWrapper variant="contained" sx={{ mr: 2.5 }}>
              Save Changes
            </ButtonWrapper>
            <ButtonWrapper type="reset" variant="outlined" color="secondary">
              Reset
            </ButtonWrapper>
          </Grid>
        </Grid>
      </form>
    </CardContent>
  );
};

export default General;
