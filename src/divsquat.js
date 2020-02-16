import React from 'react';
import Squat from './Squat'




const Divsquat=(props)=>{
    return (
    <div className="gquatrename">
       <div className="simple">
            <h1 className="phras">The world'sbiggest healthcare platform</h1>
            <p>We work from 6 offices all over the world,<br/>bringing Docplanner Group to life in almost 20 countries.</p>
            <img  src="https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fwww.docplanner.com%2Fimg%2Flogo.png"/>
          </div>
          <div className="quatro">
      {props.name.map(( el , i)=> <Squat info={el} i={i} />)}
      </div>
    </div>
    )
    }
    export default Divsquat;