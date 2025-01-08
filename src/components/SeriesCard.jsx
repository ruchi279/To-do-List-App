
 import styles from "./Netflix.module.css";
  import styled from "styled-components";

 export const SeriesCard = ({data}) => {
  //  console.log(props);
     const { id , img_url , name , rating , description , cast, genre, watch_url} = data;
          
    
  
    //  const btn_style ={
    //      padding: "1.2rem 2.4rem",
    //      border: "none",
    //      fontSize:"1.6rem",
    //      backgroundColor: `${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
    //      color: "var(--bg-color)",
    //      fontWeight: "bold",
    //      cursor: "pointer",
    //  };


    //  const btn_style ={
      const ButtonRuchi = styled.button`
        background-color: ${(props)=>
          props.rating>= 8.5 ? "#7dcea0" : "#f7dc6f"};
          color: "var(--bg-color)";
          font-Weight: "bold";
          cursor: pointer;
       `;

     // In styled-components, you can pass a function within the template literal to 
     // dynamically set CSS properties based on props or state.


      //   const Rating = styled.h3`
      //   font-size: 1.6rem;
      //   color: #7dcea0;
      //   text-transform: capitalize;
      // `;

  // return (
  //    <li classmate ="card">
  //      <div>
  //         <img src={img_url} alt={name} height="40%"  width="40%" />
                                  
  //      </div>
         {/* <div classmate="card-content">
              <h2>Name: {name}</h2>                                              
              <h3 style={{margin:"1.2rem 0"}}>Rating:{rating}</h3>
              <p style={{margin:"1.2rem 0"}}>Summary: {description} </p>          
                                                            
               <p style={{margin:"1.2rem 0"}}>Genre: {genre.join(",")}</p>            // Inline css
               <p style={{margin:"1.2rem 0"}}>Cast: {cast.join(",")}</p>
               <a href = {watch_url} target ="_blank">
           <button
             style={{
                 padding:"1.2rem 2.4rem",
                 border:"none",
                 fontSize: "1.6rem",
                 backgroundColor: "var( --bnt-hover-bg-color)",
                 color: "var(--bg-color)",

             }}
               >Watch Now
                </button>
               </a>
             </div>
           </li>
        );  */}

        const ratingClass = rating >= 8.5 ? styles.super_hit: styles.average;

        return (
          <li classmate ={styles.card}>
            <div>
               <img src={img_url} alt={img_url} height="40%"  width="40%" />                          
            </div>

       {/* Performance considerations */}

          {/* <div classmate={styles["card-content"]}> */}
              <div className="flex flex-col gap-6 py-[3.2rem] px-[1.2rem]">
              <h2>Name: {name}</h2>                                                
              <Rating>
                Rating: 
                {/* <span className={`rating  timepass ${rating >= 8.5 ? "super_hit" : "average"}`}>
                  {rating}</span> */}
                  <span className={`${styles.rating} ${ratingClass}`}>{rating}</span>
              </Rating>
              <p className="text-3xl font-bold underline text-cyan-300">Summary: {description} </p>                                                       
              <p>Genre: {genre?.join(",")}</p>            
              <p>Cast: {cast?.join(",")}</p>
              <a href = {watch_url} target ="_blank">
           {/* <button style={btn_style}> Watch Now </button> */}
                  <ButtonRuchi rating ={rating}>Watch Now</ButtonRuchi>
               </a>
             </div>
           </li>
        ); 
};