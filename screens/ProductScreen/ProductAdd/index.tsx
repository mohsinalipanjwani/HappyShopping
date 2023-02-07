import { useEffect } from "react";
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
import { useProductsCreate } from "providers/Products";
import { useRouter } from "next/router";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().label("title"),
  price: Yup.string().required().label("Regular Price"),
  category: Yup.string().required().label("Category"),
});

const ProductAdd = () => {
  const { enqueueSnackbar } = useSnackbar();
  const createProduct = useProductsCreate();
  const router = useRouter();
  useEffect(() => {
    if (createProduct.isSuccess) {
      enqueueSnackbar(<FormattedMessage {...messages.successMessage} />, {
        variant: "success",
      });
      router.push("/app/products");
    }
  }, [createProduct.isSuccess]);
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
      price: 0,
      category: "",
      image: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      createProduct.mutate({
        title: values.title,
        description: values.description,
        price: values.price,
        category: values.category,
        image: values.image,
      });
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
          <form onSubmit={handleSubmit}>
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
              <Grid item xs={12} md={6} lg={12}>
                <ProductBasic
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  errors={errors}
                  values={values}
                  touched={touched}
                  setFieldValue={setFieldValue}
                />
              </Grid>
              <Grid item xs={12} md={6} lg={12}>
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
          </form>
        </Container>
      </Box>
    </PageLayout>
  );
};

export default ProductAdd;
function resetForm() {
  throw new Error("Function not implemented.");
}
