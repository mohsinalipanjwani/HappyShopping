import {
  Box,
  Button,
  Grid,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import { MASTERCARD } from "configs";
import FormattedMessage, { useFormattedMessage } from "theme/FormattedMessage";
import { ButtonWrapper, IconWrapper, InputLabelWrapper } from "../../Styled";
import messages from "../messages";

const Notes = () => {
  const textPlaceholder = useFormattedMessage(messages.notesPlaceholder);
  return (
    <Box>
      <Box
        sx={{ backgroundColor: (theme) => theme.additionalColors?.grey }}
        p={4}
      >
        <Typography variant="h6" mb={1.5}>
          <FormattedMessage {...messages.paymentInfoTitle} />
        </Typography>
        <Typography>
          <Box component="img" src={MASTERCARD} sx={{ height: 20 }} mr={1} />
          <FormattedMessage {...messages.paymentCard} /> 
        </Typography>
        <Typography>
          <FormattedMessage {...messages.paymentBusiness} /> 
        </Typography>
        <Typography>
          <FormattedMessage {...messages.paymentPhone} /> 
        </Typography>
      </Box>
      <Box mt={4}>
        <InputLabelWrapper htmlFor="product-description">
          <FormattedMessage {...messages.notes} />
        </InputLabelWrapper>
        <OutlinedInput
          id="product-description"
          name="description"
          placeholder={textPlaceholder}
          multiline
          rows={4}
          fullWidth
        />
        <ButtonWrapper
          variant="contained"
          color="primary"
          sx={{ marginTop: (theme) => theme.spacing(2), width: "150px" }}
        >
          <FormattedMessage {...messages.saveNoteButton} />
        </ButtonWrapper>
      </Box>
    </Box>
  );
};

export default Notes;
