import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <>
      <div className="flex justify-center items-center w-[200px] h-[100px]">
        <Link className="nav-logo" to="/">
          <p className="pl-3 text-lg font-medium">Tech Treasure Store</p>
        </Link>
      </div>
    </>
  );
};

export default Logo;
