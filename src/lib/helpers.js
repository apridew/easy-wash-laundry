import { jwtDecode } from "jwt-decode";
import { toast } from "sonner";

export const itemSidebar = [
  {
    name: "Dashboard",
    icon: "bi bi-house",
    link: "/",
  },
  {
    name: "Transactions",
    icon: "bi bi-receipt",
    link: "/transaction",
  },
  {
    name: "Products",
    icon: "bi bi-box-seam",
    link: "/products",
  },
  {
    name: "Customers",
    icon: "bi bi-people",
    link: "/customers",
  },
];

export const isTokenExpired = (token) => {
  try {
    const decoded = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    return decoded.exp < currentTime;
  } catch (e) {
    return true;
  }
};

export const getAuthHeader = () => {
  const token = localStorage.getItem("token");
  if (token && isTokenExpired(token)) {
    return localStorage.removeItem("token");
  } else {
    return { headers: { Authorization: `Bearer ${token}` } };
  }
};

export const handleAuthError = (err, navigate) => {
  if (err.response && err.response.status === 401) {
    navigate("/login");
    toast.error("Session Ended, Please relogin");
    localStorage.clear();
  } else {
    toast.error("An error occurred");
  }
  console.log(err);
};

export const getUsername = () => localStorage.getItem("name");

export const sliceId = (id) => id?.slice(0, 8);

export const formatToRupiah = (number) => {
  return `Rp ${number?.toLocaleString("id-ID")}`;
};

export const formatDate = (dateString) => {
  const date = new Date(dateString);

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
};

export const formatNumber = (number) => {
  return new Intl.NumberFormat("id-ID", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
    .format(number)
    .replace(",", ".");
};
