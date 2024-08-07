import { Button } from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getProducts } from "../redux/actions/productAction";
import { useLocation, useNavigate } from "react-router-dom";
import { deleteCustomer, getCustomers } from "../redux/actions/customerAction";
import { TYPES } from "../redux/type";

const DeleteConfirmation = () => {
  const { idProduct } = useSelector((store) => store.products);
  const { idCustomer } = useSelector((store) => store.customers);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const path = useLocation().pathname;

  const handleCancelDelete = () => {
    dispatch({ type: TYPES.DELETE_PRODUCT, payload: false });
    dispatch({ type: TYPES.DELETE_CUSTOMER, payload: false });
  };

  const handleDelete = () => {
    dispatch({ type: TYPES.DELETE_PRODUCT, payload: false });
    dispatch({ type: TYPES.DELETE_CUSTOMER, payload: false });
    if (path.includes("/products")) {
      deleteProduct(idProduct);
      getProducts("/products", dispatch);
      navigate("/products");
    } else {
      deleteCustomer(idCustomer);
      getCustomers("/customers", dispatch);
      navigate("/customers");
    }
  };

  return (
    <div className="flex justify-center items-center w-full min-h-screen absolute z-[60]">
      <div
        onClick={handleCancelDelete}
        className="bg-slate-400 w-full min-h-screen opacity-50 flex absolute"
      />
      <div className="bg-white w-full mx-4 py-6 rounded-lg z-[70] p-4 text-end sm:max-w-sm">
        <div className="flex flex-col text-xl justify-center items-center h-full gap-6 opacity-80">
          <i className="bi bi-exclamation-circle text-5xl text-amber-400"></i>
          <p>Are you sure want to delete?</p>
          <div className=" space-x-6">
            <Button
              onClick={handleDelete}
              variant="ghost"
              color="danger"
            >
              YES
            </Button>
            <Button
              variant="ghost"
              color="primary"
              onClick={handleCancelDelete}
            >
              NO
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmation;
