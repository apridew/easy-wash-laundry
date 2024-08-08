import AddDataLayout from "../hoc/AddDataLayout";
import { Input } from "@nextui-org/react";
import { useState } from "react";
import { addNewProduct } from "../redux/actions/productAction";
import { useDispatch } from "react-redux";

const AddProduct = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: "",
    price: 0,
    type: "",
  });

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validatePrice = form.price === "" || isNaN(form.price);
  const isDisabled = form.name === "" || validatePrice || form.type === "";

  const formattedForm = {
    ...form,
    price: Number(form.price),
  };

  const handleSubmit = () => {
    addNewProduct(formattedForm, dispatch);
  };

  return (
    <AddDataLayout handleSubmit={handleSubmit} isDisabled={isDisabled}>
      <Input
        name="name"
        label="Name"
        type="text"
        radius="none"
        onChange={handleForm}
        className="mb-2"
      />
      <Input
        name="price"
        label="Price"
        isInvalid={validatePrice}
        errorMessage="Please enter only number"
        radius="none"
        onChange={handleForm}
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
      />
    </AddDataLayout>
  );
};

export default AddProduct;
