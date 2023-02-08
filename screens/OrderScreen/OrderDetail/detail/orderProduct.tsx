import { Box, Chip, Grid, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

import { Success } from "configs";
import FormattedMessage from "theme/FormattedMessage";

import { ButtonWrapper } from "screens/OrderScreen/Styled";
import messages from "../messages";

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
    width: 50,
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
    headerName: "Product",
    minWidth: 100,
    flex: 1,
    renderCell: (params) => {
      return (
        <>
          <Box
            component="img"
            alt={params.value}
            src={params.row.image}
            sx={{
              width: 35,
              height: 35,
              borderRadius: (theme) => theme.borderRadius.radius1,
              flexShrink: 0,
            }}
            mr={1}
          />
          <Typography variant="body1" noWrap>
            {params.value}
          </Typography>
        </>
      );
    },
  },
  {
    field: "price",
    headerName: "Unit Price",
    minWidth: 100,
    flex: 1,
  },
  {
    field: "quantity",
    headerName: "Quantity",
    minWidth: 100,
    flex: 1,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "total",
    headerName: "Total",
    minWidth: 150,
    flex: 1,
    headerAlign: "right",
    align: "right",
  },
];

interface OrderProductProps {
  rows: {
    id: string;
    image: string;
    price: string;
    quantity: string;
    total: string;
  }[];
  subTotal: string;
  shipping: string;
  grandTotal: string;
  status: string;
}

const OrderProduct: React.FC<OrderProductProps> = ({
  rows,
  subTotal,
  shipping,
  grandTotal,
  status,
}) => {
  return (
    <Box>
      <DataGrid
        autoHeight
        {...rows}
        rowHeight={75}
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        experimentalFeatures={{ newEditingApi: true }}
        hideFooter={true}
      />
      <Grid container spacing={3} mb={3} direction="row" justifyContent="end">
        <Grid item xs={9} md={7}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography sx={{ lineHeight: 2 }}>
              <FormattedMessage {...messages.subTotal} />
            </Typography>
            <Typography sx={{ lineHeight: 2 }}>{subTotal}</Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography sx={{ lineHeight: 2 }}>
              <FormattedMessage {...messages.shipping} />
            </Typography>
            <Typography sx={{ lineHeight: 2 }}>{shipping}</Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography sx={{ lineHeight: 2 }}>
              <FormattedMessage {...messages.grandTotal} />
            </Typography>
            <Typography sx={{ lineHeight: 2 }} variant="h6">
              {grandTotal}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography sx={{ lineHeight: 2 }}>
              <FormattedMessage {...messages.status} />
            </Typography>
            <Chip label={status} sx={Success} />
          </Box>
        </Grid>
      </Grid>

      <ButtonWrapper
        variant="contained"
        color="primary"
        href="page-orders-tracking.html"
        sx={{ width: "250px" }}
      >
        <FormattedMessage {...messages.trackButton} />
      </ButtonWrapper>
    </Box>
  );
};

export default OrderProduct;
