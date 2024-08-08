import PropTypes from "prop-types";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/login" />;
  }
  return children || <Outlet />;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node,
};

export default ProtectedRoute;

export const protectedRoutehelpers = (path, elementPage) => {
  return {
    path: path,
    element: <ProtectedRoute>{elementPage}</ProtectedRoute>,
  };
};
