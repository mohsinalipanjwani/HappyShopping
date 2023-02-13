import React from "react";

import { Box, Grid, TextField, Autocomplete, Typography } from "@mui/material";
import { CalendarToday, Print } from "@mui/icons-material";

import FormattedMessage from "theme/FormattedMessage";

import messages from "./messages";
import { ButtonWrapper } from "../Styled";

interface DetailHeadProps {
  id: string | string[];
  date: string;
  status: { label: string; value: number; }[]
}

const DetailCardHead: React.FC<DetailHeadProps> = ({ id, date, status }) => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      spacing={3}
    >
      <Grid item xs>
        <Box sx={{ display: "flex", gap: (theme) => theme.spacing(2) }} mb={1}>
          <CalendarToday /> <Typography>{date}</Typography>
        </Box>
        <Typography variant="subtitle2"><FormattedMessage {...messages.orderId} /> {id}</Typography>
      </Grid>
      <Grid item xs={12} md="auto">
        <Box sx={{ display: "flex", gap: (theme) => theme.spacing(2) }}>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={status}
            sx={{ width: 220 }}
            renderInput={(params) => (
              <TextField
                {...params}
                label={<FormattedMessage {...messages.statusLabel} />}
              />
            )}
          />
          <ButtonWrapper
            type="submit"
            color="primary"
            variant="contained"
            sx={{ width: "150px" }}
          >
            <FormattedMessage {...messages.saveButton} />
          </ButtonWrapper>

          <ButtonWrapper
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: (theme) => theme.additionalColors?.darkGrey,
            }}
          >
            <Print />
          </ButtonWrapper>
        </Box>
      </Grid>
    </Grid>
  );
};

export default DetailCardHead;
