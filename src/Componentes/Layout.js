import Navbar from "../Componentes/Navbar";
import Slider from "../Componentes/Slider";
import Footer from "../Componentes/Footer";

function Layout(props) {
  return (
    <div className="Layout">
      <header>
        <div className="wrapper">
          <Navbar />
        </div>
        <Slider />
      </header>
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
