import { useEffect } from "react";
import { ContentLayout } from "../../hoc/ContentLayout";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import CardLayout from "../../hoc/CardLayout";
import CardHeaderTemplate from "../../components/CardHeaderTemplate";
import { getDetailCustomer } from "../../redux/actions/customerAction";
import { formatDate } from "../../lib/helpers";
import ButtonBack from "../../components/button/ButtonBack";
import CardDetailTemplate from "../../components/CardDetailTemplate";
import CardDetailTitle from "../../components/CardDetailTitle";
import LoadingSpinner from "../../components/general/LoadingSpinner";

const DetailCustomerPage = () => {
  const param = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { customer } = useSelector((store) => store.customers);

  useEffect(() => {
    getDetailCustomer(param.id, dispatch, navigate);
  }, [param.id, dispatch, navigate]);

  const showDate = formatDate(customer?.createdAt);
  const phoneNumber = `Phone : ${customer?.phoneNumber}`;
  const address = `Address : ${customer?.address}`;

  return (
    <ContentLayout id={"detail-customer"}>
      <CardLayout>
        <CardHeaderTemplate title={"Detail customer"} />
        <div className="flex lg:block">
          <CardDetailTitle
            title={"customer"}
            name={"customer Detail"}
            showAction={true}
          />
          {customer ? (
            <CardDetailTemplate
              id={customer.id}
              name={`Name : ${customer.name}`}
              phone={phoneNumber}
              address={address}
              date={`Updated : ${showDate}`}
              showAction={true}
              showButtonDelete={true}
              showButtonEdit={true}
            />
          ) : (
            <LoadingSpinner />
          )}
        </div>
        <ButtonBack />
      </CardLayout>
    </ContentLayout>
  );
};

export default DetailCustomerPage;
