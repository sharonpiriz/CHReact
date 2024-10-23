import { BsCart3 } from "react-icons/bs";

const CartWidget = () => {
  return (
    <div className="flex justify-center items-center w-[100px] h-[100px] ">
      <a href="#" className="flex items-center">
        <BsCart3 className="text-2xl" />
        <span className="ml-1 text-lg">3</span>
      </a>
    </div>
  );
};

export default CartWidget;
