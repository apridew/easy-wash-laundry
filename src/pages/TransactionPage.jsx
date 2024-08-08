import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ContentLayout } from "../hoc/ContentLayout";
import { useDispatch, useSelector } from "react-redux";
import { formatDate, formatToRupiah } from "../lib/helpers";
import { getTransactions } from "../redux/actions/transactionAction";
import CardLayout from "../hoc/CardLayout";
import CardHeaderTemplate from "../components/CardHeaderTemplate";
import CardTitleTemplate from "../components/CardTitleTemplate";
import CardContentTemplate from "../components/CardContentTemplate";
import LoadingSpinner from "../components/LoadingSpinner";
import { TYPES } from "../redux/type";

const TransactionPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { transactions } = useSelector((store) => store.transactions);
  const { isLoading } = useSelector((store) => store.products);

  useEffect(() => {
    dispatch({ type: TYPES.SET_ISLOADING, payload: true });
    const fetchWhenNoData = async () => {
      !transactions?.length &&
        (await getTransactions("/bills", dispatch, navigate));
      dispatch({ type: TYPES.SET_ISLOADING, payload: false });
    };

    fetchWhenNoData();
  }, [transactions, dispatch, navigate]);

  return (
    <ContentLayout id={"transaction"}>
      <CardLayout>
        <CardHeaderTemplate title={"transaction"} showAddButton={true} />
        <CardTitleTemplate title={"transaction"} name={"description"} />
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          transactions.map((transaction) => (
            <CardContentTemplate
              key={transaction.id}
              id={transaction.id}
              name={transaction.customer.name}
              date={formatDate(transaction.billDate)}
              price={formatToRupiah(
                transaction.billDetails[0].product.price *
                  transaction.billDetails[0].qty
              )}
              showButtonDetail={true}
            />
          ))
        )}
      </CardLayout>
    </ContentLayout>
  );
};

export default TransactionPage;
