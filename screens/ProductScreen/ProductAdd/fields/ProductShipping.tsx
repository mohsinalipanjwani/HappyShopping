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
    </Card>
  );
};
