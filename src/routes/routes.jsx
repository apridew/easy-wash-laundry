import DashboardPage from "../pages/DashboardPage";
import NotFoundPage from "../pages/NotFoundPage";
import AuthRoute from "../hoc/AuthRoute";
import ProtectedRoute from "../hoc/ProtectedRoute";
import ProductPage from "../pages/product/ProductPage";
import DetailProductPage from "../pages/product/DetailProductPage";
import CustomerPage from "../pages/customer/CustomerPage";
import DetailCustomerPage from "../pages/customer/DetailCustomerPage";
import TransactionPage from "../pages/transaction/TransactionPage";
import DetailTransactionPage from "../pages/transaction/DetailTransactionPage";
import EditProduct from "../pages/product/EditProduct";
import EditCustomer from "../pages/customer/EditCustomer";
import LoginPage from "../pages/auth/LoginPage";

const protectedRoutehelpers = (path, elementPage) => {
  return {
    path: path,
    element: <ProtectedRoute>{elementPage}</ProtectedRoute>,
  };
};

const routesToProtect = [
  { path: "/", element: <DashboardPage /> },
  { path: "/products", element: <ProductPage /> },
  { path: "/products/:id", element: <DetailProductPage /> },
  { path: "/customers", element: <CustomerPage /> },
  { path: "/customers/:id", element: <DetailCustomerPage /> },
  { path: "/transaction", element: <TransactionPage /> },
  { path: "/transaction/:id", element: <DetailTransactionPage /> },
  { path: "/products/edit/:id", element: <EditProduct /> },
  { path: "/customers/edit/:id", element: <EditCustomer /> },
];

const protectedRoutes = routesToProtect.map((route) =>
  protectedRoutehelpers(route.path, route.element)
);

export const routes = [
  {
    path: "/login",
    element: (
      <AuthRoute>
        <LoginPage />
      </AuthRoute>
    ),
  },
  ...protectedRoutes,
  {
    path: "*",
    element: <NotFoundPage />,
  },
];
