import {useState } from "react";
export const State = () => {
//     let value = 0;
//     const handleButtonClick = () => {
//          value++;
//          console.log(value);
//     };
   
    //  let array = useState();
   //  console.log(array);
   const [count, setCount] = useState(0);
   console.log("Parent Component rendered");
   const handleButtonClick = () => {
      setCount(() => count + 1);
   };
   
    
    return (
       <>
           <div className = "main-div">
             <h1>{count}</h1>
             <button onClick={handleButtonClick}>Increment</button> 
             </div>  
             <ChildComponent  count = {count}/>
             </>
    );
};

   function ChildComponent(count) {
      console.log("Child Component rendered");
      return(
       <div className="main-div">
         <h2>ChildComponent - {count}</h2>
         </div>
      );
   };

   export function Sibling() {
    console.log("Child Component rendered");
  return(
  <div className="main-div">
    <h2>Sibling Component </h2>
    </div>
   );
  };   
              
              
              

//  # WHY REACT ? 

//   - It's because those are normal variables and React.js doesn't know it's 
//         going to be Changed.
//   - And that react should respond o update DOM based on that.
//   - Those values are already rendered on DOM,there is no way they will be re-rendered.
//   - For that React.js provides a function called "useState"'
//   - This type of function which starts with "use" is called hook.
//   - we will learn about other in future.


  //                        (the initial value of State)
   //                               \
//    const [count,setCount] = useState(o)
//      |      \       \ 
//      |       \     (Afunction that updates the state variable)
// variable(key)  (state variable(the current state value))