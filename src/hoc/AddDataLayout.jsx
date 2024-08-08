import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import GroupButtonSubmit from "../components/GroupButtonSubmit";
import PropTypes from "prop-types";

const AddDataLayout = ({ children, handleSubmit, isDisabled }) => {
  const dispatch = useDispatch();
  const path = useLocation().pathname;

  const handleCancelAdd = () => {
    dispatch({ type: "ADD_PRODUCT", payload: false });
    dispatch({ type: "ADD_CUSTOMER", payload: false });
    dispatch({ type: "ADD_TRANSACTION", payload: false });
  };

  const title =
    path === "/products"
      ? "product"
      : path === "/customers"
      ? "customer"
      : "transaction";

  return (
    <div className="flex justify-center items-center w-full min-h-screen absolute z-[60]">
      <div
        onClick={handleCancelAdd}
        className="bg-slate-400 w-full min-h-screen opacity-50 flex absolute"
      />
      <div className="bg-white w-full mx-4 py-6 rounded-lg z-[70] p-4 text-end sm:max-w-md">
        <div className="flex flex-col text-xl justify-center items-center h-full gap-6 opacity-80">
          <div className="flex justify-between gap-2 w-full font-semibold capitalize items-center border-b-2 pb-4">
            <p>New {title}</p>
            <i
              className="bi bi-x text-4xl text-red-500 active:scale-90 cursor-pointer hover:scale-110"
              onClick={handleCancelAdd}
            ></i>
          </div>

          <div className="flex flex-col gap-4 w-full text-xl">{children}</div>

          <GroupButtonSubmit
            handleCancel={handleCancelAdd}
            handleSubmit={handleSubmit}
            isDisabled={isDisabled}
            title={"SUBMIT"}
          />
        </div>
      </div>
    </div>
  );
};

AddDataLayout.propTypes = {
  children: PropTypes.node,
  handleSubmit: PropTypes.func,
  isDisabled: PropTypes.bool,
};

export default AddDataLayout;
