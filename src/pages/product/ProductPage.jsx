import { useEffect } from "react";
import { ContentLayout } from "../../hoc/ContentLayout";
import { useDispatch, useSelector } from "react-redux";
import CardLayout from "../../hoc/CardLayout";
import CardHeaderTemplate from "../../components/CardHeaderTemplate";
import CardTitleTemplate from "../../components/CardTitleTemplate";
import CardContentTemplate from "../../components/CardContentTemplate";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../../redux/actions/productAction";
import { getUsername } from "../../lib/helpers";
import LoadingSpinner from "../../components/general/LoadingSpinner";
import { TYPES } from "../../redux/type";

const ProductPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products, isLoading } = useSelector((store) => store.products);

  useEffect(() => {
    dispatch({ type: TYPES.SET_ISLOADING, payload: true });
    const fetchWhenNoData = async () => {
      !products?.length && (await getProducts("/products", dispatch, navigate));
      dispatch({ type: TYPES.SET_ISLOADING, payload: false });
    };
    fetchWhenNoData();
  }, [products, dispatch, navigate]);

  const isAllowToAddProduct = getUsername() === "admin";

  return (
    <ContentLayout id={"product"}>
      <CardLayout>
        <CardHeaderTemplate
          title={"Product"}
          showAddButton={isAllowToAddProduct}
        />
        <CardTitleTemplate title={"Product"} name={"Product Name"} />
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          products.map((product) => (
            <CardContentTemplate
              key={product.id}
              id={product.id}
              name={product.name}
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

export default ProductPage;
