import { Link } from "react-router-dom";

const CardProduct = ({ img, title, price, currency, productId }) => {
  return (
    <div className="bg-white shadow-md rounded-lg max-w-xs dark:bg-gray-800 dark:border-gray-700 mx-auto">
      <Link to={`/item/${productId}`}>
        <img className="rounded-lg p-4" src={img} alt="product image" />
      </Link>
      <div className="px-4 pb-4">
        <Link to={`/item/${productId}`}>
          <h3 className="text-gray-900 font-semibold text-lg tracking-tight dark:text-white">
            {title}
          </h3>
        </Link>
        <div className="flex items-center justify-between mt-3">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            {currency} {price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
