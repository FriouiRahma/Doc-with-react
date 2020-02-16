import React from 'react';



const Imm=(props)=>{
    return(
      <div >
      <img  className="immm" src={props.info.name }  />
      <div className="vilbutton">
        <p>{props.info.text}</p>
        <button className="btn-btn">{props.info.btn}</button>
      </div>
      </div>
      
    )
  }


  export default Imm ;