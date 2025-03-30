import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => (
    <nav class="navbar navbar-expand-sm bg-darkS navbar-dark">
  <div class="container-fluid">
    <ul class="navbar-nav">
     <li class="nav-item">
     <Link to='/'>Home</Link> &nbsp;	
      </li>
      <li class="nav-item">
      <Link to='/Admin'>Admin</Link>&nbsp;	
      </li>
      <li class="nav-item">
      <Link to='/About'>About</Link> &nbsp;	
      </li>
      <li class="nav-item">
      <Link to='/Login'>Login</Link> &nbsp;	
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/About">About</a>
      </li>
    </ul>
  </div>
</nav>






)


export default Header