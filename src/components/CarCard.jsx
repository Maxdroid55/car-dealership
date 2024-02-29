
import '../styles/CarCard.css'

/* eslint-disable react/prop-types */
function CarCard({ make, model, imgUrl }) {
  return (
    <div className="car--card" >
      <img src={imgUrl} alt="" />
      <p>{make}</p>
      <p>{model}</p>
    </div>
  );
}

export default CarCard;