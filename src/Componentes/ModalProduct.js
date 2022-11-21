import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { totalContext } from "../context/ProductProvider";

function ModalProduct({ mostrar, cerrar }) {
  const totalProvider = useContext(totalContext);

  return (
    <div className="modal">
      <Modal show={mostrar} onHide={cerrar}>
        <Modal.Header closeButton>
          <Modal.Title>{totalProvider.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modalBody">
            <img src={totalProvider.srcImage} alt="Producto" />
            <p>
              Total a pagar:
              <span
                style={{ fontSize: 24, fontWeight: "bold", paddingLeft: 16 }}
              >
                {totalProvider.total.toFixed(2)}
              </span>
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={cerrar}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={cerrar}>
            Confirmar compra
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalProduct;
