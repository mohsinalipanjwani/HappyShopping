import { Container, Box, Grid, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useSnackbar } from "notistack";
import * as Yup from "yup";

import { ButtonWrapper } from "theme/Buttons";
import PageLayout from "components/PageLayout";
import FormattedMessage from "theme/FormattedMessage";

import { ProductBasic } from "./fields/ProductBasic";
import { ProductShipping } from "./fields/ProductShipping";
import { ProductMedia } from "./fields/ProductMedia";
import { ProductOrganization } from "./fields/ProductOrganization";
import messages from "./messages";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().label("title"),
  ratePrice: Yup.string().required().label("Regular Price"),
  currencySelect: Yup.string().required().label("Currency"),
  category: Yup.string().required().label("Category"),
});


const ProductAdd = () => {
  const { enqueueSnackbar } = useSnackbar();
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
      title: "",
      description: "",
      ratePrice: "",
      promotionalPrice: "",
      taxRate: "",
      shippingWidth: "",
      shippingHeight: "",
      shippingWeight: "",
      shippingFees: "",
      organizationTaxRate: "",
      currencySelect: "1",
      category: "1",
      subCategory: "1",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      enqueueSnackbar(<FormattedMessage {...messages.successMessage} />, { variant: "success" });
      resetForm();
    },
  });

  return (
    <PageLayout>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 4,
        }}
      >
        <Container maxWidth={false}>
          <Box
            component="form"
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <Box
              sx={{
                alignItems: "center",
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
              mb={2}
            >
              <Typography sx={{ m: 1 }} variant="h4">
                <FormattedMessage {...messages.addTitle} />
              </Typography>
              <Box sx={{ m: 1 }}>
                <ButtonWrapper variant="outlined" sx={{ mr: 1 }}>
                  <FormattedMessage {...messages.draftButton} />
                </ButtonWrapper>
                <ButtonWrapper
                  type="submit"
                  color="primary"
                  variant="contained"
                >
                  <FormattedMessage {...messages.publishButton} />
                </ButtonWrapper>
              </Box>
            </Box>

            <Grid container direction="row" spacing={3}>
              <Grid item xs={12} md={6} lg={8}>
                <ProductBasic
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  errors={errors}
                  values={values}
                  touched={touched}
                  setFieldValue={setFieldValue}
                />
                <ProductShipping
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  errors={errors}
                  values={values}
                  touched={touched}
                />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <ProductMedia
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  errors={errors}
                  values={values}
                  touched={touched}
                  setFieldValue={setFieldValue}
                />

                <ProductOrganization
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  errors={errors}
                  values={values}
                  touched={touched}
                  setFieldValue={setFieldValue}
                />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </PageLayout>
  );
};

export default ProductAdd;
