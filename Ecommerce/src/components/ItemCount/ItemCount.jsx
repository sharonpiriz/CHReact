import AddToCartButton from "../UI/AddToCartButton";
import RestarButton from "../UI/RestarButton";
import SumarButton from "../UI/SumarButton";

const ItemCount = ({
  handleIncrementar,
  handleDecrementar,
  handleAgregar,
  cantidad,
}) => {
  return (
    <>
      <div className="flex ml-auto">
        <div className="flex gap-2 mr-4">
          <RestarButton handleDecrementar={handleDecrementar} />
          <p className="pt-2">{cantidad}</p>
          <SumarButton handleIncrementar={handleIncrementar} />
        </div>
        {
          <AddToCartButton
            text={"Agregar al \n carrito"}
            handleAgregar={handleAgregar}
          />
        }
      </div>
    </>
  );
};

export default ItemCount;
