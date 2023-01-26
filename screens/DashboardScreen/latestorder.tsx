import * as React from 'react';
import { DataGrid, GridColDef, GridToolbar  } from '@mui/x-data-grid';
import { Paper, Box, Typography, TextField, Autocomplete } from '@mui/material';

import {ButtonWrapper} from "./Styled";


const columns: GridColDef[] = [
  { field: 'id', headerName: 'Order ID', width: 90 },
  {
    field: 'billingName',
    headerName: 'Billing Name',
    minWidth: 150, 
    flex: 1,
    editable: true,
  },
  {
    field: 'date',
    headerName: 'Date',
    minWidth: 150, 
    flex: 1,
    editable: true,
  },
  {
    field: 'total',
    headerName: 'Total',
    minWidth: 150, 
    flex: 1,
    editable: true,
  },
  {
    field: 'paymentStatus',
    headerName: 'Payment Status',
    minWidth: 150, 
    flex: 1,
    editable: true,
  },
  {
    field: 'paymentMethod',
    headerName: 'Payment Method',
    minWidth: 150, 
    flex: 1,
    editable: true,
  },
  {
    field: 'viewDetail',
    headerName: 'View Details',
    sortable: false,
    minWidth: 150, 
    flex: 1,
    renderCell: (params) => {
      return (
          <strong>
              <ButtonWrapper>
                  View Details
              </ButtonWrapper>
          </strong>
      )
    }
  },
];

const rows = [
  { id: "#SK2540", billingName: 'Neal Matthews',  date: '07 Oct, 2022', total: '$400', paymentStatus: "Paid", paymentMethod: "Visa" },
  { id: "#SK2541", billingName: 'Jamal Burnett',  date: '07 Oct, 2022', total: '$380', paymentStatus: "Paid", paymentMethod: "Visa" },
  { id: "#SK2542", billingName: 'Juan Mitchell',  date: '07 Oct, 2022', total: '$380', paymentStatus: "Paid", paymentMethod: "Visa" },
  { id: "#SK2543", billingName: 'Barry Dick',  date: '07 Oct, 2022', total: '$380', paymentStatus: "Paid", paymentMethod: "Visa" },
  { id: "#SK2544", billingName: 'Ronald Taylor',  date: '07 Oct, 2022', total: '$380', paymentStatus: "Paid", paymentMethod: "Visa" },
  { id: "#SK2545", billingName: 'Jacob Hunter',  date: '07 Oct, 2022', total: '$380', paymentStatus: "Paid", paymentMethod: "Visa" },
  { id: "#SK2546", billingName: 'Joe Doe',  date: '07 Oct, 2022', total: '$380', paymentStatus: "Paid", paymentMethod: "Visa" },
  { id: "#SK2547", billingName: 'Rock James',  date: '07 Oct, 2022', total: '$380', paymentStatus: "Paid", paymentMethod: "Visa" },
  { id: "#SK2548", billingName: 'Sean Williams',  date: '07 Oct, 2022', total: '$380', paymentStatus: "Paid", paymentMethod: "Visa" },
  { id: "#SK2549", billingName: 'Will Smith',  date: '07 Oct, 2022', total: '$380', paymentStatus: "Paid", paymentMethod: "Visa" },
];

const clothing = [
  { label: 'The Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
]
const LatestOrder = ({title}:any) =>  {
  return (
    <Paper sx={{padding: (theme) => theme.spacing(3)}}>
      <Typography variant='h5' component="h5" mb={3}>
        {title}
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={clothing}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Movie" />}
        />
        <Box sx={{display: "flex", gap: "20px"}}>
          <TextField
            id="date"
            label="Select"
            type="date"
            defaultValue="2017-05-24"
            sx={{ width: 180 }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={clothing}
            sx={{ width: 100 }}
            renderInput={(params) => <TextField {...params} label="Movie" />}
          />
        </Box>
      </Box>
      
      <Box sx={{ height: 400, width: '100%', marginTop: (theme) => theme.spacing(3) }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        // components={{ Toolbar: GridToolbar }}
        // componentsProps={{ ...componentsProps, baseSelect: { native: false }, }}
        experimentalFeatures={{ newEditingApi: true }}
      />
      </Box>
    </Paper>
  );
}

export default LatestOrder;