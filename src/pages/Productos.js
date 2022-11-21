import Layout from "../Componentes/Layout";
import ItemProduct from "../Componentes/ItemProduct";
import ModalProduct from "../Componentes/ModalProduct";
import { useState } from "react";

import listProductos from "../json/productos.json";

function Productos() {
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function onSearch(ev) {
    setSearch(ev.target.value);
  }

  const results = !search
    ? listProductos.productos
    : listProductos.productos.filter((producto) =>
        producto.nombre.toLowerCase().includes(search.toLowerCase())
      );

  return (
    <Layout>
      <div className="wrapper">
        <div className="productos">
          <div className="productos__contentLeft">
            <div className="titleContent">
              <h2>
                Nuestros <span>Productos</span>
              </h2>
              <p>
                Toda nuestra variedad de productos que tenemos para ofrecerte
              </p>
              <hr />
            </div>
            <div className="menuProductos">
              <h3>Productos de limpieza</h3>
              <ul>
                <li>Detergentes y jabones</li>
                <li>Alcohol</li>
                <li>Lejias</li>
                <li>Desinfectantes</li>
                <li>Limpiadores</li>
                <li>Ambientadores</li>
                <li>Deshumedecedores</li>
              </ul>

              <h3>Utiles de limpieza</h3>
              <ul>
                <li>Baldes y bateas</li>
                <li>Bolsas de basura</li>
                <li>Escobas y recogedores</li>
                <li>Escobillones</li>
                <li>Esponjas</li>
                <li>Guantes de limpieza</li>
                <li>Paños multiusos</li>
                <li>Trapeadores</li>
              </ul>
            </div>
          </div>
          <div className="productos__contentRight">
            <div className="search">
              <input
                value={search}
                type="text"
                placeholder="Buscar producto"
                onChange={onSearch}
              />
            </div>
            <div className="listProductos">
              {results.map((x) => {
                return (
                  <ItemProduct
                    key={x.id}
                    img={x.img}
                    title={x.nombre}
                    price={x.precio}
                    handleShow={handleShow}
                  />
                );
              })}
              <ModalProduct mostrar={show} cerrar={handleClose} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Productos;
