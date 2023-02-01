import {
  Card,
  CardContent,
  FormHelperText,
  Grid,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";

import FormattedMessage, { useFormattedMessage } from "theme/FormattedMessage";
import {
  CardHeaderWrapper,
  InputLabelWrapper,
} from "screens/ProductScreen/Styled";

import { ProductsProps } from "./formProps";
import messages from "../messages";
import { categories } from "../data";

export const ProductOrganization: React.FC<ProductsProps> = ({
  touched,
  values,
  errors,
  handleBlur,
  handleChange,
  setFieldValue,
}) => {
  const percentPlaceholder = useFormattedMessage(messages.percentPlaceholder);

  return (
    <Card sx={{ marginBottom: (theme) => theme.spacing(3) }}>
      <CardHeaderWrapper
        title={<FormattedMessage {...messages.organizationDetail} />}
      />
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <InputLabelWrapper htmlFor="category">
              <FormattedMessage {...messages.category} />
            </InputLabelWrapper>
            <Select
              labelId="category"
              id="category"
              name="category"
              value={values.category}
              onChange={(e) => {
                if (setFieldValue) {
                  setFieldValue("category", e.target.value);
                }
              }}
            >
              {categories?.map((category) => (
                <MenuItem value={category.id} key={category.id}>
                  {category.name}
                </MenuItem>
              ))}
            </Select>
          </Grid>

          <Grid item xs={12} lg={6}>
            <InputLabelWrapper htmlFor="sub-category">
              <FormattedMessage {...messages.subCategory} />
            </InputLabelWrapper>
            <Select
              labelId="sub-category"
              id="sub-category"
              name="subCategory"
              value={values.subCategory}
              onChange={(e) => {
                if (setFieldValue) {
                  setFieldValue("category", e.target.value);
                }
              }}
            >
              {categories?.map((subcategory) => (
                <MenuItem value={subcategory.id} key={subcategory.id}>
                  {subcategory.name}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={12}>
            <InputLabelWrapper htmlFor="organization-tax-rate">
              <FormattedMessage {...messages.taxRate} />
            </InputLabelWrapper>
            <OutlinedInput
              fullWidth
              id="organization-tax-rate"
              name="organizationTaxRate"
              placeholder={percentPlaceholder}
              value={values.organizationTaxRate}
              onBlur={handleBlur}
              onChange={handleChange}
              error={Boolean(
                touched.organizationTaxRate && errors.organizationTaxRate,
              )}
            />
            {touched.organizationTaxRate && errors.organizationTaxRate && (
              <FormHelperText
                error
                id="standard-weight-helper-text-organizationTaxRate"
              >
                {errors.organizationTaxRate}
              </FormHelperText>
            )}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
