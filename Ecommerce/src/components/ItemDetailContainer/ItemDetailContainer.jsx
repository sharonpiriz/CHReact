import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../././../firebase/config.js";
import ItemDetail from "../ItemDetail/ItemDetail.jsx";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    const docRef = doc(db, "productos", productId);

    getDoc(docRef).then((doc) => {
      setProduct({ id: doc.id, ...doc.data() });
    });
  }, [productId]);

  return (
    <>
      <ItemDetail product={product} />
    </>
  );
};

export default ItemDetailContainer;
