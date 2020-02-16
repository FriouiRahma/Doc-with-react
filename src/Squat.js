import React from 'react';


//onequat
const Squat=(props)=>{
    return ( 
    <div className={(props.i % 2) === 0 ? "squat  squatlab" :"squat"}>
      <img src={props.info.src}/>
      <h3>{props.info.lab}</h3>
      <p>{props.info.par}</p>
    </div> 
     
    )  
    
    }

   export  default Squat ; 