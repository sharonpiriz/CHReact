import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList.jsx";
import { query, collection, getDocs, where } from "firebase/firestore";
import { db } from "../././../firebase/config.js";

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
    <div>
      <div>
        <ItemList products={products} />
      </div>
    </div>
  );
};

export default ItemListContainer;
