//basic props.
// import hickerjpeg from "../assets/airbnbhicker.jpg";

// export default function Hero() {
//   return (
//     <section className="hero">
//       <img src={hickerjpeg} className="hero--photo" />

//       <h1 className="hero--header">Online Experiences</h1>
//       <p className="hero--text">
//         Join unique interactive activities led by one of a kind hosts-all
//         without leaving home
//       </p>
//     </section>
//   );
// }

///props wit arrays
import hickerjpeg from "/assets/airbnbhicker.jpg";

export default function Hero() {
  return (
    <section className="hero">
      <img src={hickerjpeg} className="hero--photo" />

      <h1 className="hero--header">Online Experiences</h1>
      <p className="hero--text">
        Join unique interactive activities led by one of a kind hosts-all
        without leaving home
      </p>
    </section>
  );
}
