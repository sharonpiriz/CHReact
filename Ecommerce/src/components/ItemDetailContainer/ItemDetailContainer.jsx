import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../././../firebase/config.js";
import ItemDetail from "../ItemDetail/ItemDetail.jsx";
import Loader from "../UI/Loader.jsx";

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
    <div className="min-h-[calc(100vh-100px)] flex items-center">
      {product?.name ?
        <ItemDetail product={product} />
        :
        <Loader />
      }
    </div>
  );
};

export default ItemDetailContainer;
