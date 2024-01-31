import airbnbrunner from "../assets/airbnbrunner.webp";
// import airbnbweddindress from "../assets/weddindress.jpg";
import { FaStar } from "react-icons/fa";

export default function Card() {
  return (
    <div className="card">
      <img src={airbnbrunner} className="card--image" />
      <div className="card--stats">
        <span>
          <FaStar size="1.2rem" color="red" className="card--star" />
        </span>
        <span className="gray">5.0</span>
        <span className="gray"> (6) •</span>
        <span> USA</span>
      </div>
      <p>Life Lessons wit Katie Zadares</p>
      <p>
        <span className="bold">From $136</span> / person
      </p>
    </div>
  );
}
