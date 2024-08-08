import { Input } from "@nextui-org/react";
import { ContentLayout } from "../hoc/ContentLayout";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CardHeaderTemplate from "../components/CardHeaderTemplate";
import CardLayout from "../hoc/CardLayout";
import GroupButtonSubmit from "../components/GroupButtonSubmit";
import { useEffect, useState } from "react";
import { editProduct, getDetailProduct } from "../redux/actions/productAction";
import LoadingSpinner from "../components/LoadingSpinner";
import { TYPES } from "../redux/type";

const EditProduct = () => {
  const { isLoading } = useSelector((store) => store.products);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const param = useParams();

  const [form, setForm] = useState({
    name: "",
    price: 0,
    type: "",
  });

  useEffect(() => {
    dispatch({ type: TYPES.SET_ISLOADING, payload: true });
    const fetchDetailProduct = async () => {
      const fetch = await getDetailProduct(param.id, dispatch, navigate);
      setForm(fetch);
      dispatch({ type: TYPES.SET_ISLOADING, payload: false });
    };
    fetchDetailProduct();
  }, [dispatch, navigate, param.id]);

  const formattedForm = {
    ...form,
    price: Number(form.price),
  };

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    editProduct(formattedForm, dispatch, navigate);
  };

  const validatePrice = form.price === "" || isNaN(form.price);
  const isDisabled = form.name === "" || validatePrice || form.type === "";

  return (
    <ContentLayout id={"edit-product"}>
      <CardLayout>
        <CardHeaderTemplate title={"Edit Product"} />
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <div className="p-4 space-y-4 mb-2">
            <Input
              name="name"
              label="Name"
              type="text"
              radius="none"
              onChange={handleForm}
              className="mb-2"
              value={form.name}
            />
            <Input
              name="price"
              label="Price"
              isInvalid={validatePrice}
              errorMessage="Please enter only number"
              radius="none"
              onChange={handleForm}
              value={form.price}
              startContent={
                <div className="pointer-events-none">
                  <span className="text-slate-500 text-sm">Rp</span>
                </div>
              }
            />
            <Input
              name="type"
              label="Type"
              type="text"
              radius="none"
              onChange={handleForm}
              value={form.type}
            />
          </div>
        )}
        <div className="text-end p-4">
          <GroupButtonSubmit
            handleCancel={() => navigate(-1)}
            handleSubmit={handleSubmit}
            isDisabled={isDisabled}
            title={"UPDATE"}
          />
        </div>
      </CardLayout>
    </ContentLayout>
  );
};

export default EditProduct;
