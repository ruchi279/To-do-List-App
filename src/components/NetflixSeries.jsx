 import seriesData  from "../api/seriesData.json";
 import { SeriesCard } from "./SeriesCard";


     const NetflixSeries = () => {
  //  const name = "Queen of Tears";
  //  const rating = "8.2";
  //  const Summary = "ipsum dolor sit amet consectetur, adipisicing elit."; 
  //  let age = 19;
              
       // let canWatch = "Not Available";
       // if(age>=18) canWatch = "Watch Now";  
                    
//       const canWatch = () => {
//            if (age >=18) return "watch Now";
//           return "Not Available";
//  };
              
//         const returnGenre = () => {                    // Functions caLLS
//         const genre = "RomCom";
//         return genre;
// };
 
// return (

//    <ul>
//        {seriesData.map((curElem) => {
        
//         return (
//       <li key = {curElem.id}>
//         <div>
//            <img 
//              src={curElem.img_url} 
//            alt= {curElem.name}
//             width="40%"
//              height="40%"
//               />


//         </div>
//          <h2>Name: {curElem.name}</h2>
//          <h3>Rating:{curElem.rating}</h3>
//          <p>Summary: {curElem.description} </p>
//          <p>Genre: {curElem.genre}</p>
//          <p>Cast: {curElem.cast}</p>
//          <a href = {curElem.watch_url} target ="_blank">
//          <button>Watch Now</button>
//               </a>
//             </li>
//    );
//          })}
//          </ul>
//    );

   return (
     <ul className="grid grid-three--cols">
        {seriesData.map((curElem) => (
          <SeriesCard key={curElem.id} curElem = {curElem}/>
       ) )}
     </ul>
   );
  };


  export default NetflixSeries;

//    export const Header = () => {
//       return  <p>copyright @thapatechnical</p> ;
//    };                


//    export const Footer = () => {         
//     return  <p> copyright @thapatechnical</p>;     
   
//  };