import { useEffect } from "react";
import { ContentLayout } from "../hoc/ContentLayout";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getDetailProduct } from "../redux/actions/productAction";
import { formatDate, formatToRupiah } from "../lib/helpers";
import CardLayout from "../hoc/CardLayout";
import CardHeaderTemplate from "../components/CardHeaderTemplate";
import ButtonBack from "../components/ButtonBack";
import CardDetailTemplate from "../components/CardDetailTemplate";
import CardDetailTitle from "../components/CardDetailTitle";
import LoadingSpinner from "../components/LoadingSpinner";

const DetailProductPage = () => {
  const param = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { product } = useSelector((store) => store.products);

  useEffect(() => {
    getDetailProduct(param.id, dispatch, navigate);
  }, [param.id, dispatch, navigate]);

  const showPrice = formatToRupiah(product?.price);
  const showDate = formatDate(product?.createdAt);
  const typeProduct = product?.type;

  return (
    <ContentLayout id={"detail-product"}>
      <CardLayout>
        <CardHeaderTemplate title={"Detail Product"} />
        <div className="flex lg:block">
          <CardDetailTitle
            title={"Product"}
            name={"Product Detail"}
            showAction={true}
          />
          {product ? (
            <CardDetailTemplate
              id={product.id}
              name={product.name}
              price={`Harga : ${showPrice}/${typeProduct}`}
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

export default DetailProductPage;
