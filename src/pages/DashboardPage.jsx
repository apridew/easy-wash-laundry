import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ContentLayout } from "../hoc/ContentLayout";
import { getUsername } from "../lib/helpers";
import { Image } from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/actions/productAction";
import { getCustomers } from "../redux/actions/customerAction";
import { getTransactions } from "../redux/actions/transactionAction";
import logoImage from "../assets/logo.svg";
import SummaryDashboard from "../components/SummaryDashboard";
import LoadingSpinner from "../components/LoadingSpinner";
import { TYPES } from "../redux/type";

const DashboardPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products, isLoading } = useSelector((store) => store.products);
  const { customers } = useSelector((store) => store.customers);
  const { transactions } = useSelector((store) => store.transactions);

  useEffect(() => {
    dispatch({ type: TYPES.SET_ISLOADING, payload: true });
    const fetchWhenNoData = async () => {
      if (!products?.length) {
        await getProducts("/products", dispatch, navigate);
      }
      if (!customers?.length) {
        await getCustomers("/customers", dispatch, navigate);
      }
      if (!transactions?.length) {
        await getTransactions("/bills", dispatch, navigate);
      }
      dispatch({ type: TYPES.SET_ISLOADING, payload: false });
    };
    fetchWhenNoData();
  }, [products, customers, transactions, dispatch, navigate]);

  return (
    <ContentLayout id={"dashboard"}>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="flex flex-col justify-center items-center gap-6">
            <h1 className="sm:text-3xl text-2xl text-slate-600 font-semibold sm:pt-6">
              Welcome, Hello{" "}
              <span className="capitalize">{getUsername()}!</span>
            </h1>
            <div className="flex flex-col gap-8 items-center font-bold text-2xl sm:text-6xl">
              <span className="text-blue-500 text-center">
                Easy Wash <span className="text-slate-600">Laundry</span>
              </span>
              <Image
                src={logoImage}
                alt="logo"
                className="w-52 sm:w-96 rounded-none"
              />
            </div>
          </div>
          <SummaryDashboard />
        </>
      )}
    </ContentLayout>
  );
};

export default DashboardPage;
