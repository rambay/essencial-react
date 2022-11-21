import Layout from "../Componentes/Layout";
import Product from "../Componentes/Product";
import Categories from "../Componentes/Categories";
import Newsletter from "../Componentes/Newsletter";

function Home() {
  return (
    <Layout>
      <div className="wrapper">
        <div className="mostSale">
          <div className="titleContent">
            <h2>
              Lo más <span>vendido</span>
            </h2>
            <p>Productos recomendados</p>
            <hr />
          </div>
          <div className="listProductsTop">
            <Product
              img="./assets/product-1.jpg"
              title="Detergente Opal Ultra 4.2kg"
              price="46.90"
            />
            <Product
              img="./assets/product-2.jpg"
              title="Suavizante Bolivar 5 litros"
              price="32.40"
            />
            <Product
              img="./assets/product-3.jpg"
              title="Glade toque repuesto x 2 Lavanda"
              price="16.10"
            />
            <Product
              img="./assets/product-4.jpg"
              title="Glade Cono Manzana & Canela 170 gr"
              price="9.40"
            />
          </div>
        </div>
      </div>
      <Categories />
      <div className="wrapper">
        <div className="promotionsProducts">
          <div className="containPromotions">
            <img src="./assets/promocion-1.jpg" alt="Promocion 01" />
            <img src="./assets/promocion-2.jpg" alt="Promocion 02" />
            <img src="./assets/promocion-3.jpg" alt="Promocion 03" />
            <img src="./assets/promocion-4.jpg" alt="Promocion 04" />
            <img src="./assets/promocion-5.jpg" alt="Promocion 05" />
          </div>
        </div>
      </div>
      <div className="wrapper">
        <Newsletter />
      </div>
    </Layout>
  );
}

export default Home;
