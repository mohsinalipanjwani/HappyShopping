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
import { currencies } from "../data";

export const ProductBasic: React.FC<ProductsProps> = ({
  touched,
  values,
  errors,
  handleBlur,
  handleChange,
  setFieldValue,
}) => {
  const textPlaceholder = useFormattedMessage(messages.textPlaceholder);
  const pricePlaceholder = useFormattedMessage(messages.pricePlaceholder);
  const percentPlaceholder = useFormattedMessage(messages.percentPlaceholder);

  return (
    <Card sx={{ marginBottom: (theme) => theme.spacing(3) }}>
      <CardHeaderWrapper
        title={<FormattedMessage {...messages.basicDetail} />}
      />
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <InputLabelWrapper htmlFor="product-title">
              <FormattedMessage {...messages.productTitle} />
            </InputLabelWrapper>
            <OutlinedInput
              id="product-title"
              name="title"
              placeholder={textPlaceholder}
              fullWidth
              value={values.title}
              onBlur={handleBlur}
              onChange={handleChange}
              error={Boolean(touched.title && errors.title)}
            />
            {touched.title && errors.title && (
              <FormHelperText error id="standard-weight-helper-text-title">
                {errors.title}
              </FormHelperText>
            )}
          </Grid>
          <Grid item xs={12}>
            <InputLabelWrapper htmlFor="product-description">
              <FormattedMessage {...messages.productDescription} />
            </InputLabelWrapper>
            <OutlinedInput
              id="product-description"
              name="description"
              placeholder={textPlaceholder}
              multiline
              rows={4}
              fullWidth
              value={values.description}
              onBlur={handleBlur}
              onChange={handleChange}
              error={Boolean(touched.description && errors.description)}
            />
            {touched.description && errors.description && (
              <FormHelperText
                error
                id="standard-weight-helper-text-description"
              >
                {errors.description}
              </FormHelperText>
            )}
          </Grid>
          <Grid item xs={12} lg={4}>
            <InputLabelWrapper htmlFor="rate-price">
              <FormattedMessage {...messages.regularPrice} />
            </InputLabelWrapper>
            <OutlinedInput
              fullWidth
              id="rate-price"
              name="ratePrice"
              placeholder={pricePlaceholder}
              value={values.ratePrice}
              onBlur={handleBlur}
              onChange={handleChange}
              error={Boolean(touched.ratePrice && errors.ratePrice)}
            />
            {touched.ratePrice && errors.ratePrice && (
              <FormHelperText error id="standard-weight-helper-text-ratePrice">
                {errors.ratePrice}
              </FormHelperText>
            )}
          </Grid>
          <Grid item xs={12} lg={4}>
            <InputLabelWrapper htmlFor="promotional-price">
              <FormattedMessage {...messages.promotionalPrice} />
            </InputLabelWrapper>
            <OutlinedInput
              fullWidth
              id="promotional-price"
              name="promotionalPrice"
              placeholder={pricePlaceholder}
              value={values.promotionalPrice}
              onBlur={handleBlur}
              onChange={handleChange}
              error={Boolean(
                touched.promotionalPrice && errors.promotionalPrice,
              )}
            />
            {touched.promotionalPrice && errors.promotionalPrice && (
              <FormHelperText
                error
                id="standard-weight-helper-text-promotionalPrice"
              >
                {errors.promotionalPrice}
              </FormHelperText>
            )}
          </Grid>
          <Grid item xs={12} lg={4}>
            <InputLabelWrapper htmlFor="currency">
              <FormattedMessage {...messages.currency} />
            </InputLabelWrapper>
            <Select
              labelId="currency"
              id="currencySelect"
              name="currencySelect"
              value={values.currencySelect}
              onChange={(e) => {
                if (setFieldValue) {
                  setFieldValue("currencySelect", e.target.value);
                }
              }}
            >
              {currencies?.map((currency) => (
                <MenuItem value={currency.id} key={currency.id}>
                  {currency.name}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={12}>
            <InputLabelWrapper htmlFor="tax-rate">
              <FormattedMessage {...messages.taxRate} />
            </InputLabelWrapper>
            <OutlinedInput
              fullWidth
              id="tax-rate"
              name="taxRate"
              placeholder={percentPlaceholder}
              value={values.taxRate}
              onBlur={handleBlur}
              onChange={handleChange}
              error={Boolean(touched.taxRate && errors.taxRate)}
            />
            {touched.taxRate && errors.taxRate && (
              <FormHelperText error id="standard-weight-helper-text-taxRate">
                {errors.taxRate}
              </FormHelperText>
            )}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
