function Features({ img, title, description }) {
  return (
    <div className="features">
      <figure className="feature__img">
        <img src={img} alt={title} />
      </figure>
      <div className="feature__content">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Features;
