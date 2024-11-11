const ItemDetail = ({ product }) => {
  return (
    <div>
      <h2>{product.name}</h2>
      <div>
        <img src={product.img} />
        <div>
          <p>{product.description}</p>
          <p>Categoria: {product.category}</p>
          <h2>Disponible: {product.stock}</h2>
          <h2>Precio: USD {product.price}</h2>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
