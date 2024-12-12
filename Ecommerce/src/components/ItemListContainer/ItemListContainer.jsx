import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList.jsx";
import { query, collection, getDocs, where } from "firebase/firestore";
import { db } from "../././../firebase/config.js";
import Loader from "../UI/Loader.jsx";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const productsRef = categoryId
      ? query(collection(db, "productos"), where("category", "==", categoryId))
      : collection(db, "productos");

    getDocs(productsRef).then((querySnapshot) => {
      setProducts(
        querySnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        })
      );
    });
  }, [categoryId]);

  return (
    <div className="min-h-[calc(100vh-100px)] flex items-center">
      {products?.length > 0 ?
        <ItemList products={products} />
        :
        <Loader />
      }
    </div>
  );
};

export default ItemListContainer;
