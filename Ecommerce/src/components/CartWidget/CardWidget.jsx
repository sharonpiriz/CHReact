import { useContext } from "react";
import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { cantCarrito } = useContext(CartContext);

  return (
    <div className="flex justify-center items-center w-[100px] h-[100px] ">
      <Link to={`/cart`} className="flex items-center">
        <BsCart3 className="text-2xl" />
        <span className="ml-1 text-lg">{cantCarrito()}</span>
      </Link>
    </div>
  );
};

export default CartWidget;
