import AddDataLayout from "../hoc/AddDataLayout";
import { Input } from "@nextui-org/react";
import { useState } from "react";
import { addNewCustomer } from "../redux/actions/customerAction";
import { useDispatch } from "react-redux";

const AddCustomer = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: "",
    phoneNumber: 0,
    address: "",
  });

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validatePhoneNumber =
    form.phoneNumber === "" || isNaN(form.phoneNumber);
  const isDisabled =
    form.name === "" || validatePhoneNumber || form.address === "";

  const handleSubmit = () => {
    addNewCustomer(form, dispatch);
  };

  return (
    <AddDataLayout handleSubmit={handleSubmit} >
      <Input
        name="name"
        label="Name"
        type="text"
        radius="none"
        onChange={handleForm}
        className="mb-2"
      />
      <Input
        name="phoneNumber"
        label="Phone Number"
        isInvalid={validatePhoneNumber}
        errorMessage="Please enter only number"
        radius="none"
        onChange={handleForm}
      />
      <Input
        name="address"
        label="Address"
        type="text"
        radius="none"
        onChange={handleForm}
      />
    </AddDataLayout>
  );
};

export default AddCustomer;
