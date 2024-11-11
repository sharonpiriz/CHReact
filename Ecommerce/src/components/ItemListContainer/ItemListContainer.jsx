import { getProducts, getProductsByCategory } from "../././../asyncmock.js";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList.jsx";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const asyncFunctions = categoryId ? getProductsByCategory : getProducts;
    asyncFunctions(categoryId).then((data) => setProducts(data));
  }, [categoryId]);

  return (
    <div>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
