import Item from "../Item/Item";

const ItemList = ({ products }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-8 mb-8">
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ItemList;
