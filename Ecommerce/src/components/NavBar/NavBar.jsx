import CartWidget from "../CartWidget/CardWidget";
import Logo from "./Logo/Logo";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="flex bg-white shadow dark:bg-gray-800 ">
        <div>
          <Logo />
        </div>
        <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 dark:text-gray-300">
          <Link
            to="/"
            className="border-b-2 border-transparent text-gray-800 dark:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
          >
            Inicio
          </Link>

          <Link
            to="/category/celulares"
            className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
          >
            Celulares y tablets
          </Link>

          <Link
            to="/category/informatica"
            className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
          >
            Informatica
          </Link>

          <Link
            to="/category/accesorios"
            className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
          >
            Accesorios
          </Link>
        </div>
        <div>
          <CartWidget />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
