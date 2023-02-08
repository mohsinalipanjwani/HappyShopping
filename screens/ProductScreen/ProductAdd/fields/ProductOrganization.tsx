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
                <MenuItem value={category.name} key={category.id}>
                  {category.name}
                </MenuItem>
              ))}
            </Select>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
