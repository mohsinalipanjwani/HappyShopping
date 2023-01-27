import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import QrCodeIcon from "@mui/icons-material/QrCode";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

export const cardData = [
  {
    id: 1,
    title: "Revenue",
    count: "$13,456.5",
    description: "Shipping fees are not included",
    icon: <AttachMoneyIcon sx={{color: "#088178"}} />,
    backgroundColor: "#CEE6E4",
    color: "#1B8178",
  },
  {
    id: 2,
    title: "Orders",
    count: "53.668",
    description: "Excluding orders in transit",
    icon: <LocalShippingIcon />,
    backgroundColor: "#CCF0D1",
    color: "#00B517",
  },
  {
    id: 3,
    title: "Products",
    count: "9.856",
    description: "In 19 Categories",
    icon: <QrCodeIcon />,
    backgroundColor: "#FFE8D0",
    color: "#FD8E1C",
  },
  {
    id: 4,
    title: "Monthly Earning",
    count: "$6,982",
    description: "Based in your local time.",
    icon: <ShoppingBasketIcon />,
    backgroundColor: "#CFF4E8",
    color: "#0DCAF0",
  },
];

export const revenueChartData = [
  {
    name: "900",
    us: 433,
    europe: 208,
    asian: 408,
    africa: 123,
  },
  {
    name: "1200",
    us: 321,
    europe: 447,
    asian: 547,
    africa: 345,
  },
  {
    name: "1400",
    us: 783,
    europe: 675,
    asian: 575,
    africa: 122,
  },
  {
    name: "1600",
    us: 800,
    europe: 734,
    asian: 634,
    africa: 302,
  },
];

export const saleChartData = [
  {
    name: "Jan",
    sales: 18,
    visitors: 30,
    products: 40,
  },
  {
    name: "Feb",
    sales: 20,
    visitors: 17,
    products: 10,
  },
  {
    name: "Mar",
    sales: 4,
    visitors: 17,
    products: 27,
  },
  {
    name: "Apr",
    sales: 3,
    visitors: 9,
    products: 19,
  },
  {
    name: "Jun",
    sales: 20,
    visitors: 35,
    products: 15,
  },
  {
    name: "Jul",
    sales: 25,
    visitors: 39,
    products: 19,
  },
  {
    name: "Aug",
    sales: 31,
    visitors: 30,
    products: 20,
  },
  {
    name: "Sep",
    sales: 25,
    visitors: 34,
    products: 24,
  },
  {
    name: "Oct",
    sales: 22,
    visitors: 25,
    products: 15,
  },
  {
    name: "Nov",
    sales: 20,
    visitors: 27,
    products: 37,
  },
  {
    name: "Dec",
    sales: 9,
    visitors: 17,
    products: 6,
  },
];

// Keys
export const revenueChartKeys = [
  {
    name: "us",
    color: "#5897FB",
  },
  {
    name: "europe",
    color: "#5897FB",
  },
  {
    name: "asian",
    color: "#FF9076",
  },
  {
    name: "africa",
    color: "#D85DF7",
  },
];

export const saleChartKeys = [
  {
    id: "colorSales",
    name: "sales",
    color: "#8884d8",
    dot: "#4e45ff",
  },
  {
    id: "colorVisitors",
    name: "visitors",
    color: "#82ca9d",
    dot: "#22e46b",
  },
  {
    id: "colorSales",
    name: "products",
    color: "#FFC8E6",
    dot: "#ff2ea0",
  },
];

// NewsUpdate
export const newsData = [
  {
    id: 1,
    title: "Lead Infrastructure Engineer",
    description: "Direct Usability Associate",
    image: "https://picsum.photos/200",
    postedAt: "about 12 hours ago",
  },
  {
    id: 2,
    title: "Human Accounts Representative",
    description: "Global Assurance Analyst",
    image: "https://picsum.photos/400",
    postedAt: "about 2 hours ago",
  },
  {
    id: 3,
    title: "Future Assurance Supervisor",
    description: "Direct Mobility Officer",
    image: "https://picsum.photos/300",
    postedAt: "about 12 hours ago",
  },
  {
    id: 4,
    title: "Central Solutions Manager",
    description: "Internal Web Associate",
    image: "https://picsum.photos/200/300",
    postedAt: "about 23 hours ago",
  },
];

export const orderData = [
  {
    id: 1,
    time: "15 Oct 2022 4:24 AM",
    title: "1983, orders, $4220",
    type: "order1",
  },
  {
    id: 2,
    time: "12 Invoices have been paid",
    title: "30 Sep 2022 10:54 PM",
    type: "order2",
  },
  {
    id: 3,
    time: "Order #37745 from September",
    title: "17 Jan 2023 8:28 AM",
    type: "order3",
  },
  {
    id: 4,
    time: "New order placed #XF-2356",
    title: "14 Feb 2022 10:49 AM",
    type: "order4",
  },
];
