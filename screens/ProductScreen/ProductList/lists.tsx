import FormattedMessage from "theme/FormattedMessage";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Box, Typography, Chip } from "@mui/material";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Success, Error, Warning } from "configs";
import { TableButtonWrapper } from "theme/Buttons";
import { useProductsListing } from "providers/Products";

import { rows } from "./data";
import messages from "./messages";

const columns: GridColDef[] = [
  {
    field: "_id",
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
    field: "title",
    headerName: "Title",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "price",
    headerName: "Price",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "category",
    headerName: "Category",
    minWidth: 150,
    flex: 1,
    renderCell: (params) => {
      return params.value?.name;
    },
  },
  {
    field: "description",
    headerName: "Description",
    width: 150,
    hide: true,
  },
  {
    field: "createdBy",
    headerName: "Created By",
    minWidth: 150,
    flex: 1,
    renderCell: (params) => {
      return params.value?.name;
    },
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
          <TableButtonWrapper
            startIcon={<ModeEditIcon fontSize="small" />}
            sx={{ mr: 1 }}
            variant="contained"
            href="#outlined-buttons"
          >
            <FormattedMessage {...messages.editButton} />
          </TableButtonWrapper>
          <TableButtonWrapper
            startIcon={<DeleteIcon fontSize="small" />}
            sx={{ mr: 1 }}
            variant="outlined"
            href="#outlined-buttons"
          >
            <FormattedMessage {...messages.deleteButton} />
          </TableButtonWrapper>
        </>
      );
    },
  },
];

const Lists = () => {
  const productList = useProductsListing();

  return (
    <Box mt={2}>
      <DataGrid
        autoHeight
        getRowId={(row) => row._id}
        {...rows}
        rowHeight={75}
        rows={productList?.data?.data || []}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
        loading={productList.isFetching}
      />
    </Box>
  );
};

export default Lists;
