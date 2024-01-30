import airbnbrunner from "../assets/airbnbrunner.webp";
import airbnbweddindress from "../assets/weddindress.jpg";
import { FaStar } from "react-icons/fa";

export default function Card() {
  return (
    <>
      <div className="card">
        <div className="cardA--container">
          <img src={airbnbrunner} className="card card--img images" />
          <div className="cardtext--box">
            <span className="card--icon">
              <FaStar size="1.0rem" color="red" />
              <p
                className="rank--text
            "
              >
                5.0 (6) • USA
              </p>
            </span>
            <span color="grey">Life lessons wit Katie Zafarees</span>
            <span className="price">From $138 / person</span>
          </div>
        </div>

        <div className="cardA--container">
          <img src={airbnbweddindress} className="card card--img images" />
          <div className="cardtext--box">
            <span className="card--icon">
              <FaStar size="1.0rem" color="red" />
              <p
                className="rank--text
            "
              >
                5.0 (30) • USA
              </p>
            </span>
            <span color="grey">learn wedding photography</span>
            <span className="price">From $125 / person</span>
          </div>
        </div>
      </div>
    </>
  );
}
