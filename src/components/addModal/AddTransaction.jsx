import AddDataLayout from "../../hoc/AddDataLayout";
import { Input, Select, SelectItem } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { getCustomers } from "../../redux/actions/customerAction";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions/productAction";
import { addNewTransaction } from "../../redux/actions/transactionAction";
import { useNavigate } from "react-router-dom";

const AddTransaction = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products } = useSelector((store) => store.products);
  const { customers } = useSelector((store) => store.customers);

  useEffect(() => {
    const fetchWhenNoData = async () => {
      if (!products?.length) {
        await getProducts("/products", dispatch, navigate);
      }
      if (!customers?.length) {
        await getCustomers("/customers", dispatch, navigate);
      }
    };
    fetchWhenNoData();
  }, [dispatch, navigate, products?.length, customers?.length]);

  const [form, setForm] = useState({
    name: "",
    product: "",
    qty: 0,
  });

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validateQty = form.qty === "" || isNaN(form.qty);
  const isDisabled = form.name === "" || validateQty || form.product === "";

  const formattedData = {
    customerId: form.name,
    billDetails: [
      {
        product: {
          id: form.product,
        },
        qty: Number(form.qty),
      },
    ],
  };

  const qtyType = products?.filter((product) => product.id === form.product);
  const totalPrice = qtyType[0]?.price * form.qty;
  const formattedTotalPrice = totalPrice.toLocaleString("id-ID");

  const handleSubmit = () => {
    addNewTransaction(formattedData, dispatch);
  };

  return (
    <AddDataLayout handleSubmit={handleSubmit} isDisabled={isDisabled}>
      <Select
        name="name"
        label="Customer Name"
        placeholder="Select Customer"
        onChange={handleForm}
        radius="none"
      >
        {customers.map((customer) => (
          <SelectItem key={customer.id}>{customer.name}</SelectItem>
        ))}
      </Select>
      <Select
        name="product"
        label="Laundry Package"
        placeholder="Select Product"
        onChange={handleForm}
        radius="none"
      >
        {products.map((product) => (
          <SelectItem key={product.id}>{product.name}</SelectItem>
        ))}
      </Select>
      <Input
        name="qty"
        label={`Quantity (${qtyType[0]?.type || " - "})`}
        isInvalid={validateQty}
        errorMessage="Please enter only number"
        onChange={handleForm}
        radius="none"
      />
      <p className="text-medium font-semibold">
        Total Price : Rp{" "}
        {formattedTotalPrice === "NaN" ? 0 : formattedTotalPrice}
      </p>
    </AddDataLayout>
  );
};

export default AddTransaction;
