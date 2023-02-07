import {
  Card,
  CardContent,
  FormHelperText,
  Grid,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";

import { UPLOAD } from "configs";
import Image from "theme/Image";
import FormattedMessage from "theme/FormattedMessage";
import {
  CardHeaderWrapper,
  InputLabelWrapper,
} from "screens/ProductScreen/Styled";

import { ProductsProps } from "./formProps";
import messages from "../messages";

export const ProductMedia: React.FC<ProductsProps> = ({
  touched,
  values,
  errors,
  handleBlur,
  handleChange,
}) => {
  return (
    <Card sx={{ marginBottom: (theme) => theme.spacing(3) }}>
      <CardHeaderWrapper
        title={<FormattedMessage {...messages.mediaDetail} />}
      />
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <InputLabelWrapper
              htmlFor="media-upload"
              sx={{ textAlign: "center" }}
            >
              <Image
                height={100}
                width={100}
                alt="upload-img"
                lazyLoadProps={{ height: 100 }}
                src={UPLOAD}
                lazyLoad={true}
              />
            </InputLabelWrapper>
            <OutlinedInput
              fullWidth
              type="file"
              id="media-upload"
              name="image"
              inputProps={{ accept: "image/*" }}
              onBlur={handleBlur}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
