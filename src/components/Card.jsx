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

// export default function Card(props) {
//   let cardtext;
//   if (props.openSpots === 0) {
//     cardtext = "SOLD OUT";
//   } else if (props.location === "Online") {
//     cardtext = "ONLNE";
//   } else {
//     cardtext = null;
//   }
//   console.log(props.openSpots);
//   console.log(props.location);
//   console.log(cardtext);

//   return (
//     <div className="card">
//       {/* props.Spot is a falsy value i.e 0, !props.Spot means props.Spot is true...display if true}
//       {/* {!props.openSpots && (
//         <div className="cardcrest">
//           <span className="sold">SOLD OUT</span>
//         </div>
//       )} */}
//       {cardtext && (
//         <di className="cardcrest">
//           <span className="sold">{cardtext}</span>
//         </di>
//       )}
//       <img src={props.item.img} className="card--image" />
//       <div className="card--stats">
//         <span>
//           <FaStar size="1.2rem" color="red" className="card--star" />
//         </span>
//         <span>{props.item.rating}</span>
//         <span className="gray"> ({props.item.reviewCount}) •</span>
//         <span> {props.item.location}</span>
//       </div>
//       <p className="card--title">{props.item.title}</p>
//       <p>
//         <span className="bold">From ${props.item.price}</span> / person
//       </p>
//     </div>
//   );
// }

//////////////////////recievin d props as an object........inside d receivin component use dot metod to access d prop properties set in d component

//card object comes in as d props for eac iteration...

// export default function Card(props) {
//   let cardtext;
//   if (props.card.openSpots === 0) {
//     cardtext = "SOLD OUT";
//   } else if (props.card.location === "Online") {
//     cardtext = "ONLNE";
//   } else {
//     cardtext = null;
//   }
//   console.log(props.card.openSpots);
//   console.log(props.card.location);
//   console.log(cardtext);

//   return (
//     <div className="card">
//       {/* props.Spot is a falsy value i.e 0, !props.Spot means props.Spot is true...display if true}
//       {/* {!props.openSpots && (
//         <div className="cardcrest">
//           <span className="sold">SOLD OUT</span>
//         </div>
//       )} */}
//       {cardtext && (
//         <div className="cardcrest">
//           <span className="sold">{cardtext}</span>
//         </div>
//       )}
//       <img src={props.card.coverImg} className="card--image" />
//       <div className="card--stats">
//         <span>
//           <FaStar size="1.2rem" color="red" className="card--star" />
//         </span>
//         <span>{props.card.stats.rating}</span>
//         <span className="gray"> ({props.card.stats.reviewCount}) •</span>
//         <span> {props.card.location}</span>
//       </div>
//       <p className="card--title">{props.card.title}</p>
//       <p>
//         <span className="bold">From ${props.card.price}</span> / person
//       </p>
//     </div>
//   );
// }

/////////////////usin destructured prop
export default function Card(props) {
  console.log(props);
  let cardtext;
  if (props.openSpots === 0) {
    cardtext = "SOLD OUT";
  } else if (props.location === "Online") {
    cardtext = "ONLNE";
  } else {
    cardtext = null;
  }
  console.log(props.openSpots);
  console.log(props.location);
  console.log(cardtext);

  return (
    <div className="card">
      {/* props.Spot is a falsy value i.e 0, !props.Spot means props.Spot is true...display if true}
      {/* {!props.openSpots && (
        <div className="cardcrest">
          <span className="sold">SOLD OUT</span>
        </div>
      )} */}
      {cardtext && (
        <div className="cardcrest">
          <span className="sold">{cardtext}</span>
        </div>
      )}
      <img src={props.coverImg} className="card--image" />
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
