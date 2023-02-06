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


export const ProductShipping: React.FC<ProductsProps> = ({
  touched,
  values,
  errors,
  handleBlur,
  handleChange,
}) => {
  const lengthPlaceholder = useFormattedMessage(messages.lengthPlaceholder);
  const weightPlaceholder = useFormattedMessage(messages.weightPlaceholder);
  const percentPlaceholder = useFormattedMessage(messages.percentPlaceholder);

  return (
    <Card sx={{ marginBottom: (theme) => theme.spacing(3) }}>
      <CardHeaderWrapper
        title={<FormattedMessage {...messages.shippingDetail} />}
      />
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <InputLabelWrapper htmlFor="shipping-width">
              <FormattedMessage {...messages.shippingWidth} />
            </InputLabelWrapper>
            <OutlinedInput
              id="shipping-width"
              name="shippingWidth"
              placeholder={lengthPlaceholder}
              fullWidth
              value={values.shippingWidth}
              onBlur={handleBlur}
              onChange={handleChange}
              error={Boolean(touched.shippingWidth && errors.shippingWidth)}
            />
            {touched.shippingWidth && errors.shippingWidth && (
              <FormHelperText
                error
                id="standard-weight-helper-text-shippingWidth"
              >
                {errors.shippingWidth}
              </FormHelperText>
            )}
          </Grid>
          <Grid item xs={12} lg={6}>
            <InputLabelWrapper htmlFor="shipping-height">
              <FormattedMessage {...messages.shippingHeight} />
            </InputLabelWrapper>
            <OutlinedInput
              id="shipping-height"
              name="shippingHeight"
              placeholder={lengthPlaceholder}
              fullWidth
              value={values.shippingHeight}
              onBlur={handleBlur}
              onChange={handleChange}
              error={Boolean(touched.shippingHeight && errors.shippingHeight)}
            />
            {touched.shippingHeight && errors.shippingHeight && (
              <FormHelperText
                error
                id="standard-weight-helper-text-shippingHeight"
              >
                {errors.shippingHeight}
              </FormHelperText>
            )}
          </Grid>
          <Grid item xs={12}>
            <InputLabelWrapper htmlFor="shipping-weight">
              <FormattedMessage {...messages.shippingWeight} />
            </InputLabelWrapper>
            <OutlinedInput
              fullWidth
              id="shipping-weight"
              name="shippingWeight"
              placeholder={weightPlaceholder}
              value={values.shippingWeight}
              onBlur={handleBlur}
              onChange={handleChange}
              error={Boolean(touched.shippingWeight && errors.shippingWeight)}
            />
            {touched.shippingWeight && errors.shippingWeight && (
              <FormHelperText
                error
                id="standard-weight-helper-text-shippingWeight"
              >
                {errors.shippingWeight}
              </FormHelperText>
            )}
          </Grid>
          <Grid item xs={12}>
            <InputLabelWrapper htmlFor="shipping-fees">
              <FormattedMessage {...messages.shippingFees} />
            </InputLabelWrapper>
            <OutlinedInput
              fullWidth
              id="shipping-fees"
              name="shippingFees"
              placeholder={percentPlaceholder}
              value={values.shippingFees}
              onBlur={handleBlur}
              onChange={handleChange}
              error={Boolean(touched.shippingFees && errors.shippingFees)}
            />
            {touched.shippingFees && errors.shippingFees && (
              <FormHelperText
                error
                id="standard-weight-helper-text-shippingFees"
              >
                {errors.shippingFees}
              </FormHelperText>
            )}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
