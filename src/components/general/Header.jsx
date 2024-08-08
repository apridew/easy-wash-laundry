import { useSelector } from "react-redux";
import DeleteConfirmation from "./DeleteConfirmation";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import AddProduct from "../addModal/AddProduct";
import AddCustomer from "../addModal/AddCustomer";
import AddTransaction from "../addModal/AddTransaction";

const Header = () => {
  const { isDeleteProduct, isAddProduct } = useSelector(
    (state) => state.products
  );
  const { isDeleteCustomer, isAddCustomer } = useSelector(
    (state) => state.customers
  );
  const { isAddTransaction } = useSelector((state) => state.transactions);

  return (
    <header className="w-full relative">
      <nav>
        <Navbar />
        <Sidebar />
      </nav>
      {(isDeleteProduct || isDeleteCustomer) && <DeleteConfirmation />}
      {isAddProduct && <AddProduct />}
      {isAddCustomer && <AddCustomer />}
      {isAddTransaction && <AddTransaction />}
    </header>
  );
};

export default Header;
