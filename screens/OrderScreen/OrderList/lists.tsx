import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Box, Typography, Chip } from "@mui/material";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import VisibilityIcon from '@mui/icons-material/Visibility';

import { Success, Error, Warning } from "configs";
import { TableButtonWrapper } from "theme/Buttons";
import FormattedMessage from "theme/FormattedMessage";

import {rows} from "./data";
import messages from "./messages";

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "#ID",
    width: 90,
  },
  {
    field: "email",
    headerName: "Email",
    width: 90,
    hide: true,
  },
  {
    field: "name",
    headerName: "Name",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "email",
    headerName: "Email",
    width: 90,
    hide: true,
  },
  {
    field: "total",
    headerName: "Total",
    minWidth: 150,
    flex: 1,
  },
  
  {
    field: "status",
    headerName: "Status",
    minWidth: 150,
    flex: 1,
    renderCell: (params) => {
      const map: any = {
        received: {
          text: 'Received',
          style: Success
        },
        pending: {
          text: 'Pending',
          style: Warning
        },
        canceled: {
          text: 'Canceled',
          style: Error
        }
      };
      
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
    minWidth: 250,
    flex: 1,
    renderCell: (params) => {
      return (
        <>
        <TableButtonWrapper startIcon={<ModeEditIcon fontSize="small" />} sx={{ mr: 1 }} variant="contained" href="#outlined-buttons">
          <FormattedMessage {...messages.editButton} />
        </TableButtonWrapper>
        <TableButtonWrapper startIcon={<VisibilityIcon fontSize="small" />} sx={{ mr: 1 }} variant="outlined" href="#outlined-buttons">
          <FormattedMessage {...messages.detailButton} />
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
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
};

export default Lists;
