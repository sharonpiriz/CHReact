import { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ product }) => {
  const [cantidad, setCantidad] = useState(1);

  const { handleAgregar } = useContext(CartContext);

  const handleIncrementar = () => {
    setCantidad(cantidad + 1);
  };

  const handleDecrementar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  return (
    <div className="container px-5 py-24 mx-auto">
      <div className="lg:w-4/5 mx-auto flex flex-wrap">
        <img
          alt="ecommerce"
          className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
          src={product.img}
        />
        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <h2 className="text-sm title-font text-gray-500 tracking-widest text-transform: uppercase">
            {product.category}
          </h2>
          <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
            {product.name}
          </h1>
          <div className="flex mb-4">
            <span className="flex py-2">
              <a
                className="text-gray-500"
                href={product.instagramPage}
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="instagram-logo w-5 h-5"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8a4 4 0 0 1 3.37 3.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>
                </svg>
              </a>
              <a
                className="text-gray-500 ml-2"
                href={product.webPage}
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="web-link-icon w-5 h-5"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M2 12h20"></path>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z"></path>
                </svg>
              </a>
            </span>
          </div>
          <div className="flex mb-4">
            <span className="mr-2 font-semibold">Estado:</span>
            {product.stock ? (
              <span className="mr-2 text-green-500 font-semibold">
                Disponible
              </span>
            ) : (
              <span className="mr-3 text-red-600 font-semibold">Agotado</span>
            )}
          </div>
          <p className="leading-relaxed">{product.description}</p>
          <div className="flex mt-2 items-center pb-5 border-b-2 border-gray-200 mb-5"></div>
          <div className="flex">
            <span className="title-font font-medium text-2xl text-gray-900">
              USD {product.price}
            </span>
            <ItemCount
              handleIncrementar={handleIncrementar}
              handleDecrementar={handleDecrementar}
              handleAgregar={() => {
                handleAgregar(product, cantidad);
              }}
              cantidad={cantidad}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
