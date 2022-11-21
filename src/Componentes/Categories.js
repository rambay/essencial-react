function Categories() {
  return (
    <div className="categories">
      <div className="category">
        <figure className="containImage">
          <img src="./assets/icon-quimicos.svg" alt="Quimicos Limpieza" />
        </figure>
        <p>Quimicos de limpieza</p>
      </div>
      <div className="category">
        <figure className="containImage">
          <img src="./assets/icon-promociones.svg" alt="Promociones" />
        </figure>
        <p>Promociones</p>
      </div>
      <div className="category">
        <figure className="containImage">
          <img
            src="./assets/icon-accesorios.svg"
            alt="Accesorios de limpieza"
          />
        </figure>
        <p>ccesorios de limpieza</p>
      </div>
      <div className="category">
        <figure className="containImage">
          <img src="./assets/icon-papeles.svg" alt="Papeles" />
        </figure>
        <p>Papeles</p>
      </div>
    </div>
  );
}

export default Categories;
