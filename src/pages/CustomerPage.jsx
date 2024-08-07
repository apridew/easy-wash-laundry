import { useEffect } from "react";
import { ContentLayout } from "../hoc/ContentLayout";
import { useDispatch, useSelector } from "react-redux";
import { getCustomers } from "../redux/actions/customerAction";
import CardLayout from "../hoc/CardLayout";
import CardHeaderTemplate from "../components/CardHeaderTemplate";
import CardTitleTemplate from "../components/CardTitleTemplate";
import CardContentTemplate from "../components/CardContentTemplate";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import { TYPES } from "../redux/type";

const CustomerPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { customers } = useSelector((store) => store.customers);
  const { isLoading } = useSelector((store) => store.products);

  useEffect(() => {
    dispatch({ type: TYPES.SET_ISLOADING, payload: true });
    fetchWhenNoData();
  }, [customers]);

  const fetchWhenNoData = async () => {
    !customers?.length &&
      (await getCustomers("/customers", dispatch, navigate));
    dispatch({ type: TYPES.SET_ISLOADING, payload: false });
  };

  return (
    <ContentLayout id={"customer"}>
      <CardLayout>
        <CardHeaderTemplate title={"Customer"} showAddButton={true} />
        <CardTitleTemplate title={"customer"} name={"customer name"} />
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          customers.map((customer) => (
            <CardContentTemplate
              key={customer.id}
              id={customer.id}
              name={customer.name}
              phone={customer.phoneNumber}
              address={customer.address}
              showButtonDetail={true}
              showButtonDelete={true}
              showButtonEdit={true}
            />
          ))
        )}
      </CardLayout>
    </ContentLayout>
  );
};

export default CustomerPage;
