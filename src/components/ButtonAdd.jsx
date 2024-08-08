import { Button } from "@nextui-org/react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const ButtonAdd = ({ title }) => {
  const dispatch = useDispatch();
  const path = useLocation().pathname;

  const handleAddClick = () => {
    if (path === "/products") {
      dispatch({ type: "ADD_PRODUCT", payload: true });
    } else if (path === "/customers") {
      dispatch({ type: "ADD_CUSTOMER", payload: true });
    } else {
      dispatch({ type: "ADD_TRANSACTION", payload: true });
    }
  };

  return (
    <Button
      radius="none"
      color="primary"
      variant="flat"
      className="md:text-md uppercase font-semibold"
      onClick={handleAddClick}
    >
      <i className="bi bi-plus-square text-lg ps-2"></i>
      <p className="pe-2 md:text-medium text-xs">{title}</p>
    </Button>
  );
};

ButtonAdd.propTypes = {
  title: PropTypes.string,
};

export default ButtonAdd;
