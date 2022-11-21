//Librerias
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import UserProvider from "./context/ProductProvider";

//Estilos
import "./App.css";

//Pages
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Productos from "./pages/Productos";
import Contacto from "./pages/Contacto";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;
