import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const AuthRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (token) {
    return <Navigate to="/" />;
  }
  return <>{children}</>;
};

AuthRoute.propTypes = {
  children: PropTypes.node,
};
export default AuthRoute;
