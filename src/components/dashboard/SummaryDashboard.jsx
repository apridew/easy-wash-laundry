import { useSelector } from "react-redux";
import SummaryItem from "./SummaryItem";

const SummaryDashboard = () => {
  const productsSelector = useSelector((store) => store.products);
  const productList = productsSelector.products;
  const customersSelector = useSelector((store) => store.customers);
  const customersList = customersSelector.customers;
  const transactionsSelector = useSelector((store) => store.transactions);
  const transactionsList = transactionsSelector.transactions;
  return (
    <div className="flex flex-wrap justify-center gap-4 pt-8 pb-2">
      <SummaryItem
        data={transactionsList}
        color={"primary"}
        title={"Transaction"}
        icon={"bi bi-receipt"}
      />
      <SummaryItem
        data={customersList}
        color={"secondary"}
        title={"Customer"}
        icon={"bi bi-people"}
      />
      <SummaryItem
        data={productList}
        color={"danger"}
        title={"Product"}
        icon={"bi bi-box-seam"}
      />
    </div>
  );
};

export default SummaryDashboard;
