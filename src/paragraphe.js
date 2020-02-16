
import React from 'react';

const Paragraphe=(props)=>{
    return(
    <div className="pragraphs">
      {props.imp.map(el=><p>{el}</p>)}
    </div>
          )
 }
 export  default Paragraphe;