import { useContext } from "react";
import CartItemList from "../CartItemList/CartItemList";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { carrito, handleVaciar, subTotal, totalPrice } =
    useContext(CartContext);

  return (
    <div className="h-screen pt-20">
      <h1 className="mb-10 text-center text-2xl font-bold">
        Productos del carrito
      </h1>
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        {carrito.length > 0 ? (
          <>
            <div className="rounded-lg md:w-2/3">
              {<CartItemList />}
              <button
                onClick={handleVaciar}
                className="mt-6 w-40 rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600"
              >
                Vaciar carrito
              </button>
            </div>
            <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
              <div className="mb-2 flex justify-between">
                <p className="text-gray-700">Subtotal</p>
                <p className="text-gray-700">USD {subTotal()}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-700">Envio</p>
                <p className="text-gray-700">8%</p>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between">
                <p className="text-lg font-bold">Total</p>
                <div className="">
                  <p className="mb-1 text-lg font-bold">
                    USD {Math.round(totalPrice())}{" "}
                  </p>
                </div>
              </div>
              <Link to={`/checkout`}>
                <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
                  Check out
                </button>
              </Link>
            </div>
          </>
        ) : (
          <h2>No hay productos en su carrito</h2>
        )}
      </div>
    </div>
  );
};

export default Cart;
