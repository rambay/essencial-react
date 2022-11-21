import { useState, useEffect, useContext } from "react";
import { totalContext } from "../context/ProductProvider";

const min = 122000;
const max = 150000;

function ItemProduct({ img, title, price, handleShow }) {
  const [count, setCount] = useState(1);
  const [numAlt, setNumAlt] = useState(20);

  const totalProvider = useContext(totalContext);

  const increment = () => {
    setCount(count + 1);
  };

  const verificar = () => {
    totalProvider.totalPago(price, count, title, img);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  useEffect(() => {
    const numSku = Math.floor(Math.random() * (max - min)) + min;
    setNumAlt(numSku);
  }, []);

  return (
    <>
      <div className="itemProduct">
        <img className="itemProduct__img" src={img} alt="Producto" />
        <div className="itemProduct__content">
          <h3>{title}</h3>
          <span>Sku: {numAlt}</span>
          <p>
            Precio: <span>{price}</span>
          </p>
        </div>
        <div className="itemProduct__count">
          <button onClick={decrement}>
            <img src="./assets/menosIcon.svg" alt="-" />
          </button>
          <span className="count">{count}</span>
          <button onClick={increment}>
            <img src="./assets/masIcon.svg" alt="+" />
          </button>
        </div>
        <div className="itemProduct__button">
          <button
            className=""
            onClick={() => {
              handleShow();
              verificar();
            }}
          >
            Comprar
          </button>
        </div>
      </div>
    </>
  );
}

export default ItemProduct;
