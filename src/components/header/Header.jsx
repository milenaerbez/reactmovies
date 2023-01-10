import React, {useState} from "react";
import "./header.css"
import { Link } from 'react-router-dom';


export const Header = ({}) => {
    const [Mobile, setMobile] = useState(false)
  return (
    <>
    <header>
        <div className='containter flexSB'>
            <nav className='flexSB'>
<ul className= {Mobile ? 'navMenu-list':'flexSB'} onClick={()=>setMobile(false)}>
    <Link to='/'>Home</Link>
    {/* <Link to='/series'>Series</Link> */}
    <Link to='/movies'>Movies</Link>
    <Link to='/cart'>My list</Link>
    {/* <Link to='/upcoming'>Upcoming</Link> */}
    
  
</ul>
<button className='toggle' onClick={()=>setMobile(!Mobile)}>
    {Mobile ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
   
</button>


            </nav>
            <div className='account flexSB'>
            <i className='fa fa-search'></i>
            <i class='fas fa-bell'></i>
            <i className='fas fa-user'></i>
            <button>Login</button>
          </div>
        </div>
    </header>
    
    
    </>
  )
}