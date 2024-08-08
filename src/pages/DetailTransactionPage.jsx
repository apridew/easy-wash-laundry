import { useEffect } from "react";
import { ContentLayout } from "../hoc/ContentLayout";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getDetailTransaction } from "../redux/actions/transactionAction";
import { formatDate, formatToRupiah } from "../lib/helpers";
import ButtonBack from "../components/ButtonBack";
import CardLayout from "../hoc/CardLayout";
import CardHeaderTemplate from "../components/CardHeaderTemplate";
import CardDetailTemplate from "../components/CardDetailTemplate";
import CardDetailTitle from "../components/CardDetailTitle";
import LoadingSpinner from "../components/LoadingSpinner";

const DetailTransactionPage = () => {
  const param = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { transaction } = useSelector((store) => store.transactions);

  useEffect(() => {
    getDetailTransaction(param.id, dispatch, navigate);
  }, [param.id, dispatch, navigate]);

  const billDetails = transaction?.billDetails[0];
  const showDateTransaction = formatDate(transaction?.billDate);
  const packageLaundry = `Package : ${billDetails?.product?.name}`;
  const totalPrice = `Total : ${formatToRupiah(
    billDetails?.price * billDetails?.qty
  )}`;
  const qtyText = `Qty : ${billDetails?.qty}`;
  const priceKg = `Price : ${formatToRupiah(billDetails?.price)}/kg`;

  return (
    <ContentLayout id={"detail-transaction"}>
      <CardLayout>
        <CardHeaderTemplate title={"Detail transaction"} />
        <div className="flex lg:block">
          <CardDetailTitle title={"transaction"} name={"transaction Detail"} />
          {transaction ? (
            <CardDetailTemplate
              id={transaction.id}
              name={`Name : ${transaction.customer.name}`}
              packageLaundry={packageLaundry}
              price={priceKg}
              total={totalPrice}
              qty={qtyText}
              user={`Added by : ${transaction.user.username}`}
              date={`created at : ${showDateTransaction}`}
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

export default DetailTransactionPage;
