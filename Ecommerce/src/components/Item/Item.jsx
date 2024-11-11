import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.img} />
      <div>
        <p>Precio: USD {product.price}</p>
        <p>{product.description}</p>
        <Link to={`/item/${product.id}`}>Ver detalle</Link>
      </div>
    </div>
  );
};

export default Item;
