import { Button } from "@nextui-org/react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const ButtonBack = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleBack = () => {
    navigate(-1);
    dispatch({ type: "SET_PRODUCT", payload: null });
    dispatch({ type: "SET_CUSTOMER", payload: null });
    dispatch({ type: "SET_TRANSACTION", payload: null });
  };

  return (
    <Button
      radius="sm"
      color="secondary"
      variant="flat"
      className="md:text-md uppercase font-semibold w-max self-end m-4"
      onClick={handleBack}
    >
      <i className="bi bi-arrow-left text-lg"></i>
      <p>Back</p>
    </Button>
  );
};

export default ButtonBack;
