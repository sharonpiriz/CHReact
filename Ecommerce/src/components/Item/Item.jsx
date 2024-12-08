import CardProduct from "../CardProduct/CardProduct";

const Item = ({ product }) => {
  return (
    <>
      <CardProduct
        img={product.img}
        title={product.name}
        price={product.price}
        currency={"USD"}
        productId={product.id}
      />
    </>
  );
};

export default Item;
