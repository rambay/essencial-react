import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const menuInicio = useRef();
  const menuNosotros = useRef();
  const menuProductos = useRef();
  const menuContacto = useRef();

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      menuInicio.current.classList.add("active");
    } else if (location.pathname === "/nosotros") {
      menuInicio.current.classList.remove("active");
      menuNosotros.current.classList.add("active");
    } else if (location.pathname === "/productos") {
      menuNosotros.current.classList.remove("active");
      menuProductos.current.classList.add("active");
    } else if (location.pathname === "/contacto") {
      menuNosotros.current.classList.remove("active");
      menuContacto.current.classList.add("active");
    } else {
      console.log("No hay ruta");
    }
  });

  return (
    <div className="navBar">
      <div className="logo">
        <Link to="/">
          <img src="./assets/Logo.svg" alt="Logo" />
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/" ref={menuInicio}>
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/nosotros" ref={menuNosotros}>
              Sobre Nosotros
            </Link>
          </li>
          <li>
            <Link to="/productos" ref={menuProductos}>
              Productos
            </Link>
          </li>
          <li>
            <Link to="/contacto" ref={menuContacto}>
              Contacto
            </Link>
          </li>
          <li className="iconSocial">
            <a href="#facebook">
              <img
                className="iconSocial__img"
                src="./assets/facebook-logo.svg"
                alt="facebook"
              />
            </a>
          </li>
          <li className="iconSocial">
            <a href="#whatssap">
              <img
                className="iconSocial__img"
                src="./assets/instagram-logo.svg"
                alt="whatssap"
              />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
