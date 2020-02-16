import React from 'react'


const Nav=(props)=>{
    return(
      <li className="lien" ><a href= {props.info.link}>{props.info.name}</a>
       {props.info.submit && <ul className="displ"> {props.info.submit.map(el=><li className="lien2"> <a className="hhh" href="#">{el}</a></li> )} </ul>}
    
    </li>
    
    )
    }
    export default Nav;