import { useState } from "react";

function Newsletter() {
  const [value, setValue] = useState("");
  const [getError, setGetError] = useState({
    error: "",
    active: false,
  });
  const [getErrorExpresion, setGetErrorExpresion] = useState({
    error: "",
    active: false,
  });

  const validate = () => {
    const emailExpresionRegular =
      /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    if (value === "") {
      window.event.preventDefault();
      setGetError({
        error: "El campo email no puede estar vacío",
        active: true,
      });
    } else {
      if (!emailExpresionRegular.test(value)) {
        window.event.preventDefault();
        setGetErrorExpresion({
          error: "El email no es válido",
          active: true,
        });
      }
    }
  };

  const readValue = (ev) => {
    setValue(ev.target.value);
    setGetError({
      error: "",
      active: false,
    });
    setGetErrorExpresion({
      error: "",
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
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Tu correo electronico..."
            onKeyUp={readValue}
          />
          <input type="submit" value="Enviar" />
          <span
            className={
              getError.active ? "errorEmailActive" : "errorEmailInactive"
            }
          >
            {getError.error}
          </span>
          <span
            className={
              getErrorExpresion.active
                ? "errorExpresionEmailActive"
                : "errorExpresionEmailInactive"
            }
          >
            {getErrorExpresion.error}
          </span>
        </form>
      </div>
    </div>
  );
}

export default Newsletter;
