import CartWidget from "../CartWidget/CardWidget";
import Logo from "./Logo/Logo";

const NavBar = () => {
  return (
    <>
      <nav className="flex bg-white shadow dark:bg-gray-800 ">
        <div>
          <Logo />
        </div>
        <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 dark:text-gray-300">
          <a
            href="#"
            className="text-gray-800 dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6"
          >
            Inicio
          </a>

          <a
            href="#"
            className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
          >
            Celulares y tecnologia
          </a>

          <a
            href="#"
            className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
          >
            Informatica
          </a>

          <a
            href="#"
            className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
          >
            Contacto
          </a>
        </div>
        <div>
          <CartWidget />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
