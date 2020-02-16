import React from 'react';
import Imm from  './Image';



const Seriess=(props)=>{
    return(
      <div className="villes">
      {props.obj.map(el=><Imm  info={el} />)}
      </div>
      )
       }

       export default Seriess;