  // import NetflixSeries from "./components/NetflixSeries";
  //  import "./components/Netflix.css";
  // import "./components/Netflix.module.css";
  // import {EventHandling} from "./components/EventHandling";
  // import { EventProps } from "./components/EventProps";
  // import "./components/EV.css";
 // import { Counter } from "./components/Hooks/useState";
 import CounterChallenge from "./components/hooks/useState/Challenge";
   // import ShortCircuitExample from "./components/Hooks/ShortCircuit";
   // import { Keys} from "./Keys";
   //import { Todo } from "./Projects/ToggleSwitch/Todo/Todo";
  // import { Help } from "./Projects/ToggleSwitch/Todo/Help";
   //import { LiftingState } from "./components/LiftStateUp";
  // import { ToggleSwitch } from "./Projects/ToggleSwitch/ToggleSwitch";
   //import { DerivedState } from "./components/DerivedState";
  //  import { State } from "./components/hooks/State";
  // import { EventPropagation } from "./components/EventPropagation";

  
     export const App = () => {
        //   return(
        //     <section className = "container">
        //        {/* <State/>
        //         // { <Sibling/> 
        //        {/* <DerivedState/> */}
        //        {/* <LiftingState /> */}
        //        {/* <ToggleSwitch/> */}
        //        {/* { <Help /> } */}
        //        {/* { <Todo /> } */}
        //        {/* <Keys/> */}
            
        //   </section>
        // );
           
              //  return <ShortCircuitExample />
              // return < Counter />
             return < CounterChallenge />;
         
      };
          
    //  export function Sibling() {
    //     console.log("Sibling Component rendered");
    //     return(
    //      <div className="main-div">
    //        <h2>Sibling Component </h2>
    //        </div>
    //     );
    //  };
  
  
  
    // return <h1>Hello World</h1>;

//      return React.createElement("h1" , null, "Hello World.");

  //return  [<NetflixSeries key="1" />, <NetflixSeries key ="2" />];

  
//      // Dynamics value in JSX

//   // 1. Variables
//   // ? You can embed any javaScript variable within JSX by enclosing it in curly braces. the value of
//   //    the variable will be inserted into DOM at the respective location.

     //const NetflixSeries = () => {
    // const name = "Queen of Tears";
    // const rating = "8.2";
    // const Summary = "ipsum dolor sit amet consectetur, adipisicing elit."; 
              
  // return(
  //       <div>
  //       <div>
  //           <div>
  //             <img src="qot.jpg" alt="qot.jpg" />
    
  //     </div>
  //   <h2>Name:{name}</h2>
  //   <h3>Rating :{rating}</h3>
  //   <p>Summary: {Summary}</p>
  //   </div>
  //  // </div>
                
    
  //     ); 
    
//   console.log( React.createElement("h1" , null , "Hello World"));
 

//  // 2. Expressions
//  //? JSX allows you to write javascript expressions inside curly  braces. This includes operations
//  // , function calls, and other javascript expressions that produce a value. 



//   // 3. Function calls
//   // ? Functions , especially those that return JSX, can be invoked directly within your JSX.


//  const NetflixSeries = () => {
//       const name = "Queen of Tears";
//       const rating = "8.2";
//       const Summary = "ipsum dolor sit amet consectetur, adipisicing elit."; 
//       let age = 19;
 
//       // let canWatch = "Not Available";
//       // if(age>=18) canWatch = "Watch Now";  
      
//       const canWatch = () => {
//          if (age >=18) return "watch Now";
//          return "Not Available";    
//  }
//       const returnGenre = () => {                // Functions caLLS
//         const genre = "RomCom";
//         return genre;
//       }
//     };
// //   // Conditonals Values in JSX
   
// //   //   1st Method Repeating method
//       if (age < 18){               
                
//         return(
//         //  <div>
//           <div>
//               <div>
//                 <img src="Family show.jpg" alt="Family show.jpg" />
//         </div>
//       <h2>Name:{name}</h2>
//       <h3>Rating :{15+3.2}</h3>
//       <p>Summary: {Summary}</p>
//       <p>Genre: {returnGenre()}</p>
//       <button>Not Available</button>
//       </div>
//      // </div>
                  
      
//          ); 
//    }


// // //    2nd Method: But this violates  DRY (do not repeat yourself)    
// // //    3rd Method: Sometimes you might have very complex if conditions , for that there are
// // //                   some solutions.
// // //   4TH Method: solution can be better as it prevents cluteering of variables outside and Encapsultes
// //  //      such logic inside a function.
// //  // One another benefit is also that , you can also pass some dynamic values as function parameter.

//    return(
//     //  <div>
//       <div>
//           <div>
//             <img src="Family show.jpg" alt="Family show.jpg" />
//     </div>
//   <h2>Name:{name}</h2>
//   <h3>Rating :{15+3.2}</h3>
//   <p>Summary: {Summary}</p>
//   <p>Genre: {returnGenre()}</p>
//   {/* <button>{age >= 18 ? "Watch Now" : "Not Available"}</button>      // 2nd Method apply */}

//  < button> {canWatch()}</button>
//   </div>
//     //</div>
//    );
//   };           


// return (
//      < section className="container">
//         {/* <h1 className="card-heading">List of Best Netflix Series</h1>
//         {/* <NetflixSeries />; */}
//         {/* <EventHandling/> */}
//         {/* <EventProps/> */}
//         {/* <EventPropagation/> */}
//         <State/>
//     </ section>
// );
// };  

  
