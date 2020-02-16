import React from 'react';

const tabslect=["choose country","france","Italy"]

const Onesec=(props)=>{
    return(
      <div className={props.info.mot ==="For patients" ? "onebox1  boxcolo" :   "onebox1  box1colo"} >
      <div className="onebox">
      <h1>{props.info.mot}</h1>
      <h1>{props.info.par}</h1>
      <div className="chekbox">
      { props.info.mot ==="For patients" ?<select> {tabslect.map(el=><option>{el}</option>)}</select>: null
    }
        </div>
      </div>
      <img src={props.info.im}/>
      
      
    </div>
    )
    
    }
   export default Onesec;