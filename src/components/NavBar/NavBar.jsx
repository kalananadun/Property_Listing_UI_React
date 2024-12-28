import { useState } from 'react';
import './NavBar.scss';
const NavBar = () => {
  const [open,setOpen] = useState(false)
  return (
    <nav>
      <div className="left">
        {/**logo  of website*/}
        <a href="/" className='logo'>
          <img src="../../public/logo.png" alt=""  />
          <span>Property.com</span>
        </a>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agents</a>
      </div>
      <div className="right">
        <a href="">Sign In</a>
        <a href="" className='register'>Signup</a>
        <div className="menu-icon">
          <img src="../../public/menu.png" onClick={()=>setOpen(!open)}  />

        </div>
        <div className={open ?'menu active':'menu'}>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agents</a>
        <a href="/">Sign in</a>
        <a href="/">Sign up</a>

        </div>
      </div>
    </nav>
  )
}

export default NavBar
