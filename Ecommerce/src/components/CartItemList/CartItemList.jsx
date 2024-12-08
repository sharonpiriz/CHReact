import { useContext } from "react";
import CartItem from "../CartItem/CartItem";
import { CartContext } from "../../context/CartContext";

const CartItemList = () => {
  const { carrito } = useContext(CartContext);
  console.log(carrito);
  return (
    <>
      {carrito.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}
    </>
  );
};

export default CartItemList;
