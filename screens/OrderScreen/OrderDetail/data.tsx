import { Person } from "@mui/icons-material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Typography } from "@mui/material";

export const status = [
  { label: "Awaiting Payment", value: 10 },
  { label: "Confirmed", value: 20 },
  { label: "Shipping", value: 30 },
  { label: "Delivered", value: 30 },
];

export const contactData = [
  {
    id: 1,
    title: "Customer",
    description: (
      <>
        <Typography>John Alexander</Typography>
        <Typography>alex@example.com</Typography>
        <Typography>+998 99 22123456</Typography>
      </>
    ),
    link: "#",
    button: "View profile",
    icon: <Person sx={{ color: "#088178" }} />,
    backgroundColor: "#CEE6E4",
    color: "#088178",
  },
  {
    id: 2,
    title: "Order info",
    description: (
      <>
        <Typography>Shipping: Fargo express</Typography>
        <Typography>Pay method: card</Typography>
        <Typography>Status: new</Typography>
      </>
    ),
    link: "#",
    button: "Download info",
    icon: <LocalShippingIcon sx={{ color: "#088178" }} />,
    backgroundColor: "#CEE6E4",
    color: "#088178",
  },
  {
    id: 3,
    title: "Deliver to",
    description: (
      <>
        <Typography>City: Tashkent, Uzbekistan</Typography>
        <Typography>Block A, House 123, Floor 2</Typography>
        <Typography>Po Box 10000</Typography>
      </>
    ),
    link: "#",
    button: "View profile",
    icon: <LocationOnIcon sx={{ color: "#088178" }} />,
    backgroundColor: "#CEE6E4",
    color: "#088178",
  },
];

export const rows = [
  {
    id: "1",
    image: "https://picsum.photos/200/300",
    name: "T-shirt for men medium size",
    price: "$44.25",
    quantity: "2",
    total: "$99.50",
  },
  {
    id: "2",
    image: "https://picsum.photos/200/300",
    name: "T-shirt for men medium size",
    price: "$44.25",
    quantity: "2",
    total: "$99.50",
  },
  {
    id: "3",
    image: "https://picsum.photos/200/300",
    name: "T-shirt for men medium size",
    price: "$44.25",
    quantity: "2",
    total: "$99.50",
  },
];

export const amountDetail = {
    subTotal: "$9.88",
    shipping: "$1.2",
    grandTotal: "$11.00",
    status: "Payment Confirmed"
}
