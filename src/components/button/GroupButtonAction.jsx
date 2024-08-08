import ButtonAction from "./ButtonAction";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { TYPES } from "../../redux/type";
import PropTypes from "prop-types";

const GroupButtonAction = ({
  showButtonDetail,
  showButtonEdit,
  showButtonDelete,
  id,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const path = useLocation().pathname;

  const handleDelete = () => {
    if (path === "/products") {
      dispatch({ type: TYPES.DELETE_PRODUCT, payload: true });
      dispatch({ type: TYPES.SET_ID_PRODUCT, payload: id });
    } else {
      dispatch({ type: TYPES.DELETE_CUSTOMER, payload: true });
      dispatch({ type: TYPES.SET_ID_CUSTOMER, payload: id });
    }
  };

  const handleEdit = () => {
    if (path.includes("/products")) {
      dispatch({ type: TYPES.SET_ID_PRODUCT, payload: id });
      navigate(`/products/edit/${id}`);
    } else if (path.includes("/customers")) {
      dispatch({ type: TYPES.SET_ID_CUSTOMER, payload: id });
      navigate(`/customers/edit/${id}`);
    }
  };

  return (
    <div className="flex gap-4 flex-wrap text-xl justify-center">
      {showButtonDetail && (
        <ButtonAction
          color={"primary"}
          icon={"bi bi-eye"}
          desc={"View Detail"}
          onCLick={() => navigate(`${path}/${id}`)}
        />
      )}
      {showButtonEdit && (
        <ButtonAction
          color={"primary"}
          icon={"bi bi-pencil-square"}
          desc={"Edit"}
          onCLick={() => handleEdit(id)}
        />
      )}
      {showButtonDelete && (
        <ButtonAction
          id={id}
          color={"danger"}
          icon={"bi bi-trash"}
          desc={"Delete"}
          onCLick={() => handleDelete(id)}
        />
      )}
    </div>
  );
};

GroupButtonAction.propTypes = {
  showButtonDetail: PropTypes.bool,
  showButtonEdit: PropTypes.bool,
  showButtonDelete: PropTypes.bool,
  id: PropTypes.string,
};

export default GroupButtonAction;
