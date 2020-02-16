import React from 'react';
import Onesec from './onesect';


//Section
const Section=(props)=>{
    return(
    <div className="section">
      { props.name.map(el=> <Onesec info={el} /> )}
    </div>
    
    )
    }


    export default  Section;