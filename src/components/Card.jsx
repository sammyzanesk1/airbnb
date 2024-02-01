//basic props
// import airbnbweddindress from "../assets/weddindress.jpg";
// import { FaStar } from "react-icons/fa";

// export default function Card(props) {
//   return (
//     <div className="card">
//       <img src={props.img} className="card--image" />
//       <div className="card--stats">
//         <span>
//           <FaStar size="1.2rem" color="red" className="card--star" />
//         </span>
//         <span>{props.rating}</span>
//         <span className="gray"> ({props.reviewCount}) •</span>
//         <span> {props.country}</span>
//       </div>
//       <p>{props.title}</p>
//       <p>
//         <span className="bold">From ${props.price}</span> / person
//       </p>
//     </div>
//   );
// }

////////////////props wit arrays
import { FaStar } from "react-icons/fa";

export default function Card(props) {
  return (
    <div className="card">
      <img src={props.img} className="card--image" />
      <div className="card--stats">
        <span>
          <FaStar size="1.2rem" color="red" className="card--star" />
        </span>
        <span>{props.rating}</span>
        <span className="gray"> ({props.reviewCount}) •</span>
        <span> {props.location}</span>
      </div>
      <p className="card--title">{props.title}</p>
      <p>
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}
