import Header from "../components/Header";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

export const ContentLayout = ({ children, id }) => {
  const { isDeleteProduct, isAddProduct } = useSelector(
    (state) => state.products
  );
  const { isDeleteCustomer, isAddCustomer } = useSelector(
    (state) => state.customers
  );
  const { isDeleteTransaction, isAddTransaction } = useSelector(
    (state) => state.transactions
  );

  const isPopUp =
    isDeleteProduct ||
    isDeleteCustomer ||
    isDeleteTransaction ||
    isAddProduct ||
    isAddCustomer ||
    isAddTransaction;

  return (
    <>
      <Header />
      <main>
        <section
          id={id}
          className={`py-24 px-4 sm:pt-36 sm:ps-36 sm:pe-14 bg-slate-200 min-h-screen flex flex-col justify-center overflow-auto
            ${isPopUp ? "h-screen" : ""}`}
        >
          {children}
          <Footer />
        </section>
      </main>
    </>
  );
};

ContentLayout.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
};
