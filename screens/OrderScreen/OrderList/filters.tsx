import { Box, Grid, TextField, Autocomplete } from "@mui/material";

import FormattedMessage, { useFormattedMessage } from "theme/FormattedMessage";
import messages from "./messages";
import { limitRow } from "./data";

const Filters = () => {
  const textPlaceholder = useFormattedMessage(messages.searchIdPlaceholder);

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      spacing={3}
    >
      <Grid item xs>
        <TextField
          hiddenLabel
          id="searchId"
          name="searchId"
          placeholder={textPlaceholder}
          sx={{ height: 60 }}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
      <Grid item lg={2}></Grid>
      <Grid item xs={12} lg="auto">
        <Box sx={{ display: "flex", gap: "20px" }}>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={limitRow}
            sx={{ width: 220 }}
            renderInput={(params) => (
              <TextField
                {...params}
                label={<FormattedMessage {...messages.statusLabel} />}
              />
            )}
          />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={limitRow}
            sx={{ width: 220 }}
            renderInput={(params) => (
              <TextField
                {...params}
                label={<FormattedMessage {...messages.limitRowLabel} />}
              />
            )}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Filters;
