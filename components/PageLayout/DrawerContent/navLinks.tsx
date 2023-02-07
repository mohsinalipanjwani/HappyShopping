import HomeIcon from "@mui/icons-material/Home";
import PaidIcon from "@mui/icons-material/Paid";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const MenuData = [
  {
    title: "Dashboard",
    icon: <HomeIcon />,
    link: "/app/dashboard",
  },
  {
    title: "Products",
    icon: <ShoppingBagIcon />,
    link: "/app/products",
  },
  {
    title: "Orders",
    icon: <ShoppingCartIcon />,
    link: "",
  },
  {
    title: "Transactions",
    icon: <PaidIcon />,
    link: "",
  },
];

export default MenuData;
