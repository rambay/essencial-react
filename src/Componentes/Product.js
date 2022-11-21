const min = 122000;
const max = 150000;

function Product({ img, title, price }) {
  const generateSku = () => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  return (
    <div className="product">
      <img className="productImage" src={img} alt="Producto" />
      <div className="infoProduct">
        <h3>{title}</h3>
        <span>Sku: {generateSku()}</span>
        <p>
          Precio: <span>{price}</span>
        </p>
      </div>
    </div>
  );
}

export default Product;
