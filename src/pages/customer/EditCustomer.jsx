import { Input } from "@nextui-org/react";
import { ContentLayout } from "../../hoc/ContentLayout";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CardHeaderTemplate from "../../components/CardHeaderTemplate";
import CardLayout from "../../hoc/CardLayout";
import GroupButtonSubmit from "../../components/button/GroupButtonSubmit";
import { useEffect, useState } from "react";
import {
  editCustomer,
  getDetailCustomer,
} from "../../redux/actions/customerAction";
import LoadingSpinner from "../../components/general/LoadingSpinner";
import { TYPES } from "../../redux/type";

const EditCustomer = () => {
  const { isLoading } = useSelector((store) => store.products);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const param = useParams();

  const [form, setForm] = useState({
    name: "",
    phoneNumber: 0,
    address: "",
  });

  useEffect(() => {
    dispatch({ type: TYPES.SET_ISLOADING, payload: true });
    const fetchDetailCustomer = async () => {
      const fetch = await getDetailCustomer(param.id, dispatch, navigate);
      setForm(fetch);
      dispatch({ type: TYPES.SET_ISLOADING, payload: false });
    };
    fetchDetailCustomer();
  }, [dispatch, navigate, param.id]);

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    editCustomer(form, dispatch, navigate);
  };

  const validatePhoneNumber =
    form.phoneNumber === "" || isNaN(form.phoneNumber);
  const isDisabled =
    form.name === "" || validatePhoneNumber || form.address === "";

  return (
    <ContentLayout id={"edit-customer"}>
      <CardLayout>
        <CardHeaderTemplate title={"Edit Customer"} />
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <div className="p-4 space-y-4 mb-2">
            <Input
              name="name"
              label="Name"
              address="text"
              radius="none"
              onChange={handleForm}
              className="mb-2"
              value={form.name}
            />
            <Input
              name="phoneNumber"
              label="Phone Number"
              isInvalid={validatePhoneNumber}
              errorMessage="Please enter only number"
              radius="none"
              onChange={handleForm}
              value={form.phoneNumber}
            />
            <Input
              name="address"
              label="Address"
              address="text"
              radius="none"
              onChange={handleForm}
              value={form.address}
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

export default EditCustomer;
