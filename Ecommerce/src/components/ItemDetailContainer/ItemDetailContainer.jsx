import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductByID } from "../././../asyncmock.js";
import ItemDetail from "../ItemDetail/ItemDetail.jsx";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    getProductByID(productId).then((data) => {
      setProduct(data);
    });
  }, [productId]);

  return (
    <>
      <ItemDetail product={product} />
    </>
  );
};

export default ItemDetailContainer;
