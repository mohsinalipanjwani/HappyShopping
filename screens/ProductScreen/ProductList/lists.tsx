import FormattedMessage from "theme/FormattedMessage";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Box, Typography, Chip } from "@mui/material";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Success, Error, Warning } from "configs";
import messages from "../messages";
import { TableButtonWrapper } from "theme/Buttons";

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
      let style = Error;
      if (params.value == "Active") {
        style = Success;
      } else if (params.value == "Archived") {
        style = Warning;
      }
      return <Chip label={params.value} sx={style} />;
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

const rows = [
  {
    id: "1",
    image: "https://picsum.photos/200/300",
    name: "T-shirt for men medium size",
    price: "$34.50",
    status: "Active",
    date: "02.11.2022",
  },
  {
    id: "2",
    image: "https://picsum.photos/200/300",
    name: "T-shirt for men medium size",
    price: "$34.50",
    status: "Active",
    date: "02.11.2022",
  },
  {
    id: "3",
    image: "https://picsum.photos/200/300",
    name: "T-shirt for men medium size",
    price: "$34.50",
    status: "Archived",
    date: "02.11.2022",
  },
  {
    id: "4",
    image: "https://picsum.photos/200/300",
    name: "T-shirt for men medium size",
    price: "$34.50",
    status: "Active",
    date: "02.11.2022",
  },
  {
    id: "5",
    image: "https://picsum.photos/200/300",
    name: "T-shirt for men medium size",
    price: "$34.50",
    status: "Active",
    date: "02.11.2022",
  }, 
  {
    id: "6",
    image: "https://picsum.photos/200/300",
    name: "T-shirt for men medium size",
    price: "$34.50",
    status: "Archived",
    date: "02.11.2022",
  },
  {
    id: "7",
    image: "https://picsum.photos/200/300",
    name: "T-shirt for men medium size",
    price: "$34.50",
    status: "Active",
    date: "02.11.2022",
  },
  {
    id: "8",
    image: "https://picsum.photos/200/300",
    name: "T-shirt for men medium size",
    price: "$34.50",
    status: "Disabled",
    date: "02.11.2022",
  },
  {
    id: "9",
    image: "https://picsum.photos/200/300",
    name: "T-shirt for men medium size",
    price: "$34.50",
    status: "Active",
    date: "02.11.2022",
  }, 
  {
    id: "10",
    image: "https://picsum.photos/200/300",
    name: "T-shirt for men medium size",
    price: "$34.50",
    status: "Active",
    date: "02.11.2022",
  },
  {
    id: "11",
    image: "https://picsum.photos/200/300",
    name: "T-shirt for men medium size",
    price: "$34.50",
    status: "Archived",
    date: "02.11.2022",
  },
  {
    id: "12",
    image: "https://picsum.photos/200/300",
    name: "T-shirt for men medium size",
    price: "$34.50",
    status: "Archived",
    date: "02.11.2022",
  },
  {
    id: "12",
    image: "https://picsum.photos/200/300",
    name: "T-shirt for men medium size",
    price: "$34.50",
    status: "Active",
    date: "02.11.2022",
  }, 
  {
    id: "13",
    image: "https://picsum.photos/200/300",
    name: "T-shirt for men medium size",
    price: "$34.50",
    status: "Active",
    date: "02.11.2022",
  },
  {
    id: "14",
    image: "https://picsum.photos/200/300",
    name: "T-shirt for men medium size",
    price: "$34.50",
    status: "Active",
    date: "02.11.2022",
  },
  {
    id: "15",
    image: "https://picsum.photos/200/300",
    name: "T-shirt for men medium size",
    price: "$34.50",
    status: "Active",
    date: "02.11.2022",
  },
  {
    id: "16",
    image: "https://picsum.photos/200/300",
    name: "T-shirt for men medium size",
    price: "$34.50",
    status: "Disabled",
    date: "02.11.2022",
  }, 
  {
    id: "17",
    image: "https://picsum.photos/200/300",
    name: "T-shirt for men medium size",
    price: "$34.50",
    status: "Active",
    date: "02.11.2022",
  },
  {
    id: "18",
    image: "https://picsum.photos/200/300",
    name: "T-shirt for men medium size",
    price: "$34.50",
    status: "Active",
    date: "02.11.2022",
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
