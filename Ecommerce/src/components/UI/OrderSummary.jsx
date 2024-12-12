import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const OrderSummary = () => {
  const { carrito, subTotal, totalPrice } = useContext(CartContext);

  return (
    <>
      <div className="col-span-1 bg-white lg:block hidden">
        <h1 className="py-6 border-b-2 text-xl text-gray-600 px-8">
          Resumen de la orden
        </h1>
        <ul className="py-6 border-b space-y-6 px-8">
          {carrito.map((producto) => {
            return (
              <li
                key={producto.id}
                className="grid grid-cols-6 gap-2 border-b-1"
              >
                <div className="col-span-1 self-center">
                  <img
                    src={producto.img}
                    alt="Product"
                    className="rounded w-full"
                  />
                </div>
                <div className="flex flex-col col-span-3 pt-2">
                  <span className="text-gray-600 text-md font-semi-bold">
                    {producto.name}
                  </span>
                </div>
                <div className="col-span-2 pt-3">
                  <div className="flex items-center space-x-2 text-sm justify-between">
                    <span className="text-gray-400">
                      Cantidad: {producto.cantidad}
                    </span>
                    <span className="text-gray-600 font-semibold inline-block">
                      USD {producto.price}
                    </span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="px-8 border-b">
          <div className="flex justify-between py-4 text-gray-600">
            <span>Subtotal</span>
            <span className="font-semibold text-gray-600">
              USD {subTotal()}
            </span>
          </div>
          <div className="flex justify-between py-4 text-gray-600">
            <span>Envío</span>
            <span className="font-semibold text-gray-600">8%</span>
          </div>
        </div>
        <div className="font-semibold text-xl px-8 flex justify-between py-8 text-gray-600">
          <span>Total</span>
          <span>USD {Math.round(totalPrice())}</span>
        </div>
      </div>
    </>
  );
};

export default OrderSummary;
