  import "./EV.css";
 
 export const EventPropagation = () => {
  
     const handleGrandParent = () => {
       console.log("GrandParent clicked");
     };                 

     const handleParentClick = () => {
       console.log("Parent clicked");
   };                 
    const handleChildClick = (event) => {
      console.log("event");
      event.stopPropagation();
      console.log("Child clicked")
   };              


  return (

//       This Bubbling (from last to top)-----.......
//     <section className = "main-div">
//        <div className="g-div" onClick={handleGrandParent}>
//          <div className="p-div" onClick= {handleParentClick}>
//             <button className="c-div" onClick={handleChildClick}>
//                     Child Div

//    Capturing (from top to buttom)
    <section className = "main-div">
       <div className="g-div" onClickCapture={handleGrandParent}>
          <div className="p-div" onClickCapture= {handleParentClick}>
             <button className="c-div" onClickCapture={handleChildClick}>
                    Child Div
            </button>
          </div>
       </div>
    </section>
  );
}; 