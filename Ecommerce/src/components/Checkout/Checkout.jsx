import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { CartContext } from "../../context/CartContext";
import Form from "../UI/Form";
import OrderSummary from "../UI/OrderSummary";
import InputForm from "../UI/InputForm";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../././../firebase/config.js";
import { Link } from "react-router-dom";

const Checkout = () => {
  const { carrito, totalPrice, handleVaciar } = useContext(CartContext);
  const { register, handleSubmit } = useForm();

  const [pedidoId, setPedidoId] = useState("");

  const realizarPedido = (data) => {
    const pedidoObj = {
      cliente: data,
      productos: carrito,
      precioTotal: totalPrice(),
    };

    const pedido = collection(db, "pedidos");

    addDoc(pedido, pedidoObj).then((doc) => {
      setPedidoId(doc.id);
      handleVaciar();
    });
  };

  if (pedidoId) {
    return (
      <div className="flex items-center justify-center min-h-screen py-48">
        <div className="flex flex-col">
          <div className="flex flex-col items-center">
            <div className="font-bold text-3xl xl:text-7xl lg:text-6xl md:text-5xl mt-10">
              Muchas gracias
            </div>

            <div className="text-gray-400 font-medium text-sm md:text-xl lg:text-2xl mt-8">
              Te agradecemos por tu compra Id: #{pedidoId}
            </div>
          </div>
          <div className="flex items-center justify-center mt-16 ">
            <div className="flex flex-col items-stretch mt-5">
              <Link to={`/`}>
                <button
                  className="flex flex-row group px-4 py-8
                    border-t hover:cursor-pointer
                    transition-all duration-200 delay-100"
                >
                  <div className="grow flex flex-col pl-5 pt-2">
                    <div className="font-bold text-sm md:text-lg lg:text-xl group-hover:underline">
                      Inicio
                    </div>

                    <div
                      className="font-semibold text-sm md:text-md lg:text-lg
                            text-gray-400 group-hover:text-gray-500
                            transition-all duration-200 delay-100"
                    >
                      Vea los articulos en venta
                    </div>
                    <i
                      className="mdi mdi-chevron-right text-gray-400 mdi-24px my-auto pr-2
                        group-hover:text-gray-700 transition-all duration-200 delay-100"
                    ></i>
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="h-screen grid grid-cols-3">
        <div className="lg:col-span-2 col-span-3 bg-indigo-50 space-y-8 px-12">
          <div className="mt-8 p-4 relative flex flex-col sm:flex-row sm:items-center bg-white shadow rounded-md">
            <div className="flex flex-row items-center border-b sm:border-b-0 w-full sm:w-auto pb-4 sm:pb-0">
              <div className="text-yellow-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 sm:w-5 h-6 sm:h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="text-sm font-medium ml-3">Checkout</div>
            </div>
            <div className="text-sm tracking-wide text-gray-500 mt-4 sm:mt-0 sm:ml-4">
              Complete su información a continuación
            </div>
            <div className="absolute sm:relative sm:top-auto sm:right-auto ml-auto right-4 top-4 text-gray-400 hover:text-gray-800 cursor-pointer">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </div>
          </div>
          <form onSubmit={handleSubmit(realizarPedido)}>
            <div className="rounded-md">
              <Form register={register} />
            </div>
            <div className="rounded-md">
              <section>
                <h2 className="uppercase tracking-wide text-lg font-semibold text-gray-700 my-2">
                  Información de pago
                </h2>
                <fieldset className="mb-3 bg-white shadow-lg rounded text-gray-600">
                  <InputForm
                    text={"Número de tarjeta"}
                    name={"numeroTarjeta"}
                    placeholder={"xxx xxx xxx 1234"}
                    type={"number"}
                    register={register}
                  />

                  <InputForm
                    text={"MM/YY"}
                    name={"vencimiento"}
                    placeholder={"MM/YY"}
                    type={"number"}
                    register={register}
                  />

                  <InputForm
                    text={"CVC"}
                    name={"codigo"}
                    placeholder={"123"}
                    type={"number"}
                    register={register}
                  />
                </fieldset>
              </section>
            </div>
            <button
              type="submit"
              className="submit-button px-4 py-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white focus:ring focus:outline-none w-full text-xl font-semibold transition-colors"
            >
              Pagar USD {totalPrice()}
            </button>
          </form>
        </div>
        <OrderSummary />
      </div>
    </>
  );
};

export default Checkout;
