//////////////////
// export default function App() {
//works in js not react
// const colorArr = ["red", "blue", "yellow", "black", "violet"];
// const colorelements = colors.map((color) => {
//   return `<p>${color}</p>`; //strin cannot work in jsx
// });

// const colorsArr = ["red", "blue", "yellow", "black", "violet"];

// const colorelement = colorsArr.map((color) => {
//   return <h3>{color}</h3>;
// });

// const Cardelement = CardData.map((data) => {
//   console.log(data);
//   return <h3>{data.location}</h3>;
// });

// const colors = [
//   <h3>red</h3>,
//   <h3>blue</h3>,
//   <h3>yellow</h3>,
//   <h3>black</h3>,
//   <h3>violet</h3>,
// ];

// return (
//   <div>
//     <div>{colors}</div>
//     <div>{colorelement}</div>
//   </div>
// );
// }
///////////////////////

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import CardData from "./components/CardData";

/////////////////////////////////
//////////////basic props

// export default function App() {
//   return (
//     <>
//       <div className="app--container">
//         <Navbar />
//         {/* <Hero /> */}
//       </div>
//       <Card
//         img={airbnbrunner}
//         rating="4.99"
//         reviewCount={20}
//         country="USA"
//         title="Life Lessons wit Katie Zaferes"
//         price={138}
//       />
//     </>
//   );
// }

///workin wit arrays and props...pass in d mapped props individulally.

// export default function App() {
//   const PropedCard = CardData.map((card) => {
//     return (
//       <Card
//         key={card.id}
//         img={card.coverImg}
//         rating={card.stats.rating}
//         reviewCount={card.stats.reviewCount}
//         location={card.location}
//         title={card.title}
//         price={card.price}
//         openSpots={card.openSpots}
//       />
//     );
//   });

//   return (
//     <>
//       <div className="app--container">
//         <Navbar />
//         <Hero />
//       </div>
//       <section className="cards-list">{PropedCard}</section>
//     </>
//   );
// }
/////////////////////////////

////dealin wit mapped prop..passin in d mappped object as d prop

// export default function App() {
//   const PropedCard = CardData.map((card) => {
//     return (
//       <Card
//         key={card.id}
//         card={card} //passin d props as an object for eac array
//       />
//     );
//   });

//   return (
//     <>
//       <div className="app--container">
//         <Navbar />
//         <Hero />
//       </div>
//       <section className="cards-list">{PropedCard}</section>
//     </>
//   );
// }

/////////destructurin d mapped ovbject .....

export default function App() {
  const PropedCard = CardData.map((card) => {
    return (
      <Card
        key={card.id}
        // card={card} //passin d props as an object for eac array
        {...card} //passin in d destructured prop....use one level of dot
      />
    );
  });

  return (
    <>
      <div className="app--container">
        <Navbar />
        <Hero />
      </div>
      <section className="cards-list">{PropedCard}</section>
    </>
  );
}
