import { useRef, useState } from "react";
import Layout from "../Componentes/Layout";
import ToolTip from "../Componentes/ToolTip";

function Contacto() {
  const [toolTip, setToolTip] = useState({
    name: "",
    statusName: false,
    age: "",
    statusAge: false,
    email: "",
    statusEmail: false,
    message: "",
    statusMessage: false,
  });

  const valName = useRef();
  const valAge = useRef();
  const valEmail = useRef();
  const valMessage = useRef();

  let test;

  function validate(ev) {
    test = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
    if (!test.test(valName.current.value)) {
      ev.preventDefault();
      setToolTip({
        ...toolTip,
        name: "Ingrese un nombre valido",
        statusName: true,
      });
      return;
    }

    test = /^\d{1,2}$/;
    if (!test.test(valAge.current.value)) {
      ev.preventDefault();
      setToolTip({
        ...toolTip,
        age: "Ingrese una edad valida",
        statusAge: true,
      });
      return;
    }

    test = /^([a-zA-Z0-9])+[@]([a-z])+[.][a-z]{2,3}$/;
    if (!test.test(valEmail.current.value)) {
      ev.preventDefault();
      setToolTip({
        ...toolTip,
        email: "Ingrese un email valido",
        statusEmail: true,
      });
      return;
    }

    test = /^\s*$/;
    if (test.test(valMessage.current.value)) {
      ev.preventDefault();
      setToolTip({
        ...toolTip,
        message: "Ingrese un mensaje",
        statusMessage: true,
      });
      return;
    }

    alert("Formulario enviado");
  }

  function handleName() {
    setToolTip({ ...toolTip, statusName: false });
  }

  function handleAge() {
    setToolTip({ ...toolTip, statusAge: false });
  }

  function handleEmail() {
    setToolTip({ ...toolTip, statusEmail: false });
  }

  function handleMessage() {
    setToolTip({ ...toolTip, statusMessage: false });
  }

  return (
    <Layout>
      <div className="wrapper">
        <div className="contacto">
          <div className="titleContent">
            <h2>
              Mantente en <span>Contacto</span>
            </h2>
            <p>
              Nuestro personal, respondera tus dudas o sugerencias lo antes
              posible.
            </p>
            <hr />
          </div>

          <form className="formulario" onSubmit={validate}>
            <figure className="contactoImage">
              <img src="./assets/contacto.jpg" alt="Contacto" />
            </figure>
            <div className="formularios__inputs">
              <div className="input fullname">
                <label htmlFor="nombres">Nombres y Apellidos</label>
                <input
                  type="text"
                  name="nombres"
                  id="nombres"
                  onChange={handleName}
                  ref={valName}
                />
                {toolTip.statusName ? (
                  <ToolTip message={toolTip.name} />
                ) : (
                  <></>
                )}
              </div>
              <div className="input age">
                <label htmlFor="edad">Edad</label>
                <input
                  type="text"
                  name="edad"
                  id="edad"
                  onChange={handleAge}
                  ref={valAge}
                />
                {toolTip.statusAge ? <ToolTip message={toolTip.age} /> : <></>}
              </div>
              <div className="input email">
                <label htmlFor="email">Correo Electronico</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={handleEmail}
                  ref={valEmail}
                />
                {toolTip.statusEmail ? (
                  <ToolTip message={toolTip.email} />
                ) : (
                  <></>
                )}
              </div>
              <div className="input message">
                <label htmlFor="mensaje">Mensaje</label>
                <textarea
                  name="mensaje"
                  id="mensaje"
                  cols="30"
                  rows="10"
                  placeholder="Tu mensaje..."
                  onChange={handleMessage}
                  ref={valMessage}
                ></textarea>
                {toolTip.statusMessage ? (
                  <ToolTip message={toolTip.message} />
                ) : null}
              </div>
              <input className="buttonSend" type="submit" value="Enviar" />
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default Contacto;
