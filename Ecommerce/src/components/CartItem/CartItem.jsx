const CartItem = ({ product }) => {
  return (
    <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
      <img
        src={product.img}
        alt="product-image"
        className="w-full rounded-lg sm:w-40"
      />
      <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
        <div className="mt-5 sm:mt-0">
          <h2 className="text-lg font-bold text-gray-900">{product.name}</h2>
        </div>
        <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
          <div className="flex items-center border-gray-100">
            <span className=" rounded-l bg-gray-100 py-1 px-3.5 duration-100">
              Cantidad: {product.cantidad}
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <p className="text-sm font-bold">USD {product.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
