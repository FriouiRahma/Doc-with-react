import React from 'react'
import Nav from './Nav'
import Img from './Img'
const im={src:"https://www.docplanner.com/img/logo-default-group-en.svg?v=1"}

const Navbar=(props)=>{
    return(<div  className="navglobal">
       <Img name={im} />
       <div className="list">
       <ul className="lit">
      {props.nav.map((el,i )=> <Nav key={i}  info={el} />   )}
      </ul>
      </div>
     
  </div>)
   
  }
  export default Navbar;