import Layout from "../Componentes/Layout";
import CardInfo from "../Componentes/CardInfo";
import Features from "../Componentes/Features";

function Nosotros() {
  return (
    <Layout>
      <div className="wrapper">
        <div className="aboutContain">
          <div className="titleContent">
            <h2>
              Sobre <span>Nosotros</span>
            </h2>
            <p>Conoce a limpiezas essencial</p>
            <hr />
          </div>
          <div className="nosotros">
            <div className="nosotros__desripcion">
              <h3>
                Lo que nuestra empresa de limpieza puede aportale al
                contratarnos
              </h3>
              <p>
                Somos una empresa peruana con más 3 años en el mercado. Nos
                dedicamos a la fabricación y comercialización de una gran
                variedad de productos para la limpieza profesional.
              </p>
            </div>
            <div className="nosotros__main">
              <h3>Misión</h3>
              <CardInfo description="Abastecer a los hogares y empresas con nuestros productos de limpieza garantizados totalmente en calidad y con atención personalizada a su público." />

              <h3>Visión</h3>
              <CardInfo description="Ser la empresa lider en el mercado de limpieza facilitando calida, garantía y atencion eficaz." />

              <h3>Objetivos</h3>
              <CardInfo description="Aumentar mas tiendas a nivel nacional para asi poder llegar a mas peruanos Ser la empresa con mayor indice de satisfacción del cliente y el mejor lugar para trabajar." />
            </div>
          </div>
          <div className="whyChoose">
            <h2>¿Por qué elegirnos?</h2>
            <Features
              title="Puntualidad"
              img="./assets/feature-1.svg"
              description="Entregamos nuestros productos en el menor tiempo posible."
            />
            <Features
              title="Enfoque a nuestros clientes"
              img="./assets/feature-2.svg"
              description="Porque cuidamos a tu familia como si fuera la nuestra."
            />
            <Features
              title="Productos A1"
              img="./assets/feature-3.svg"
              description="Ofrecemos productos de excelente calidad y durabilidad."
            />
            <Features
              title="Precios Bajos"
              img="./assets/feature-4.svg"
              description="Porque nuestro precio esta acorde a tu bolsillo."
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Nosotros;
