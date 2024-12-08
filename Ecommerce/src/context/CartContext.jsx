import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState(carritoInicial);

  const handleAgregar = (product, cantidad) => {
    const productoAgregado = { ...product, cantidad };
    const nuevoCarrito = [...carrito];
    const yaExiste = carrito.find(
      (product) => product.id === productoAgregado.id
    );

    if (yaExiste) {
      yaExiste.cantidad += cantidad;
      setCarrito(nuevoCarrito);
    }

    if (!yaExiste) {
      setCarrito([...nuevoCarrito, productoAgregado]);
    }
  };

  const cantCarrito = () => {
    return carrito.reduce((acc, producto) => acc + producto.cantidad, 0);
  };

  const handleVaciar = () => {
    setCarrito([]);
  };

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  return (
    <CartContext.Provider
      value={{ carrito, handleAgregar, cantCarrito, handleVaciar }}
    >
      {children}
    </CartContext.Provider>
  );
};
