function CarCard({ brand, description, rating, price, image }) {
  return (
    <div className="Activity3-car-card">
      <div className="Activity3-image-wrapper">
        <img src={image} alt={brand} className="Activity3-car-img" />
        <span className="Activity3-badge">⭐ {rating}</span>
      </div>

      <div className="Activity3-car-content">
        <h2>{brand}</h2>
        <p className="Activity3-desc">{description}</p>

        <div className="Activity3-price-row">
          <span className="Activity3-price">{price}</span>
        </div>

        <button onClick={() => alert(`${brand} selected!`)}>Select</button>
      </div>
    </div>
  );
}

export default CarCard;
