import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <figure className="containerLogoFooter">
        <Link to="/">
          <img src="./assets/logo-footer.svg" alt="Logo Footer" />
        </Link>
      </figure>
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/nosotros">Sobre Nosotros</Link>
          </li>
          <li>
            <Link to="/productos">Categoria</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
