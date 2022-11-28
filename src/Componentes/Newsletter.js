import { useState } from "react";
import ToolTip from "./ToolTip";

function Newsletter() {
  const [value, setValue] = useState("");
  const [getError, setGetError] = useState({
    text: "",
    active: false,
  });

  const validate = () => {
    const emailExpresionRegular =
      /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    if (value === "") {
      window.event.preventDefault();
      setGetError({
        text: "El campo email no puede estar vacío",
        active: true,
      });
    } else {
      if (!emailExpresionRegular.test(value)) {
        window.event.preventDefault();
        setGetError({
          text: "El email no es válido",
          active: true,
        });
      }
    }
  };

  const readValue = (ev) => {
    setValue(ev.target.value);
    setGetError({
      text: "",
      active: false,
    });
  };

  return (
    <div className="newsletter">
      <div className="newsletter__content">
        <figure>
          <img src="./assets/icon-send.svg" alt="Send" />
        </figure>
        <h3>
          Regístrate a <br /> nuestro <br /> boletin
        </h3>
        <span className="divisionContent"></span>
        <p>
          Suscríbase al boletín semanal para recibir las últimas
          actualizaciones.
        </p>
      </div>
      <div className="newsletter__form">
        <form onSubmit={validate}>
          <div className="boletinForm">
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Tu correo electronico..."
              onKeyUp={readValue}
            />
            <input type="submit" value="Enviar" />
          </div>
          {getError.active ? <ToolTip message={getError.text} /> : null}
        </form>
      </div>
    </div>
  );
}

export default Newsletter;
