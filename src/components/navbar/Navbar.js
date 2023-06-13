import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
        {/* <div class="navbar bg-base-100">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
      <img src='https://img.freepik.com/premium-vector/profile-gradient-logo-design-template-icon_442940-616.jpg?w=2000' className='w-20'></img>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <li><Link to='/'>Home</Link></li>
    <li><Link to='/records'>All Records</Link></li>
       
      
      </ul>
    </div>
    <img src='https://img.freepik.com/premium-vector/profile-gradient-logo-design-template-icon_442940-616.jpg?w=2000' className='w-20'></img>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal p-0">
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/records'>All Records</Link></li>
     
    
    </ul>
  </div>
  <div class="navbar-end">
    <a class="btn">Get started</a>
  </div>
        </div> */}
        <div className="navbar bg-base-100">
  <div className="">
    <Link to='/' className="btn btn-ghost text-sky-500 text-2xl normal-case text-xl">Task </Link>
  </div>
  <div className="mx-auto">
    <ul className="menu menu-horizontal px-1">
      <li><Link className="btn btn-ghost normal-case" to='/'>Home</Link></li>
      <li><Link className="btn btn-ghost normal-case" to='/records'>All Records</Link></li>
    </ul>
  </div>
</div>
    </div>
  )
}
