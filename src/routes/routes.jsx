import DashboardPage from "../pages/DashboardPage";
import SignInPage from "../pages/SignInPage";
import ProductPage from "../pages/ProductPage";
import CustomerPage from "../pages/CustomerPage";
import TransactionPage from "../pages/TransactionPage";
import NotFoundPage from "../pages/NotFoundPage";
import AuthRoute from "../hoc/AuthRoute";
import DetailProductPage from "../pages/DetailProductPage";
import DetailCustomerPage from "../pages/DetailCustomerPage";
import DetailTransactionPage from "../pages/DetailTransactionPage";
import EditProduct from "../pages/EditProduct";
import EditCustomer from "../pages/EditCustomer";
import ProtectedRoute from "../hoc/ProtectedRoute";

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
        <SignInPage />
      </AuthRoute>
    ),
  },
  ...protectedRoutes,
  {
    path: "*",
    element: <NotFoundPage />,
  },
];
