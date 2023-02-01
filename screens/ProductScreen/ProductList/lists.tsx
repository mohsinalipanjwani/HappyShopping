import FormattedMessage from "theme/FormattedMessage";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Box, Typography, Chip } from "@mui/material";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';


import { map } from "configs";
import { TableButtonWrapper } from "theme/Buttons";

import { rows } from "./data";
import messages from "./messages";

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
    width: 90,
    hide: true,
  },
  {
    field: "image",
    headerName: "Image",
    width: 90,
    hide: true,
  },
  {
    field: "name",
    headerName: "Name",
    minWidth: 150,
    flex: 1,
    renderCell: (params) => {
      return <>
      <Box
        component="img"
        alt={params.value}
        src={params.row.image}
        sx={{ width: 35, height: 35, borderRadius: (theme) => theme.borderRadius.radius1, flexShrink: 0 }}
        mr={1}
      />
      <Typography variant="body1" noWrap>
          {params.value}
        </Typography>
      </>
    },
  },
  {
    field: "price",
    headerName: "Price",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "status",
    headerName: "Status",
    minWidth: 150,
    flex: 1,
    renderCell: (params) => {
      const { text, style } = map[params.value];
      return <Chip label={text} sx={style} />;
    },
  },
  {
    field: "date",
    headerName: "Date",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "action",
    headerName: "Action",
    sortable: false,
    minWidth: 150,
    flex: 1,
    renderCell: (params) => {
      return (
        <>
        <TableButtonWrapper startIcon={<ModeEditIcon fontSize="small" />} sx={{ mr: 1 }} variant="contained" href="#outlined-buttons">
          <FormattedMessage {...messages.editButton} />
        </TableButtonWrapper>
        <TableButtonWrapper startIcon={<DeleteIcon fontSize="small" />} sx={{ mr: 1 }} variant="outlined" href="#outlined-buttons">
          <FormattedMessage {...messages.deleteButton} />
        </TableButtonWrapper>
        </>
      );
    },
  },
];


const Lists = () => {
  return (
    <Box mt={2}>
      <DataGrid
        autoHeight {...rows} 
        rowHeight={75}
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
};

export default Lists;
