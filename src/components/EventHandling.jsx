  import "./EV.css";

export const EventHandling = () => {
         
           
//     function handleButtonClick(){
//         alert("Hey I am onClick Event");
//     }

    const handleButtonClick = () => {
         console.log(event);
         console.log(event.target);
         console.log(event.type);     // "click"
       alert ("Hey I am onClick Event");
     };

       const handleWelcomeUser = (user) => {
         console.log(`Hey ${user} , Welcome`);
       }
    
                      
   
    return (
    <>
  

   {/*  functions Components with Named Functions------->>>
        Remember how we haven't called this function , if you call this 
        function here then it will run without even clicking . you just 
         need to pass reference and call here
         
    */}
                 
        <button onClick={handleButtonClick}>click Me</button>

        <br/>

         <button onClick={()=> handleButtonClick(event)}>click Me 2 </button>
       <br />

      {/*  Inline Event Handlers */}

      <button onClick={(event) => console.log(event)}>Inline Function </button>
        <br/>

        {/* Functions components with inline Arrow Functions */}

        <button onClick={() => alert ("Hey I am inline event function")}>Inline Arr Fun </button>

    
             {/* Passing Arguments to event Hndlers */}
        {/* <button onClick = {handleWelcomeUser}>click Me</button> */}
         <button onClick = {handleWelcomeUser("Ruchi")}>click Me</button>
         <button onClick = {handleWelcomeUser("Ram")}>click Me</button>
        </>
    );
};