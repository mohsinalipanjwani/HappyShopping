import { FormControl, InputLabel, TextField } from "@mui/material";
import Box from "@mui/material/Box";

export const BasicFields = () => {
  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      sx={{
        display: "grid",
        gridTemplateColumns: { sm: "1fr 1fr" },
        gap: 2,
      }}
    >
      <FormControl variant="standard">
        
      </FormControl>
    </Box>
  );
};
