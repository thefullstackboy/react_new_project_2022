import React , { useState } from 'react';
import AddtoCart from './AddtoCart';

const Navbar =()=> {
  const [show, setshow] = useState(false)

  function clickChange() {
         setshow(! show);
  }
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-primary text-dark fixed-top">
  <a className="navbar-brand" href="#">New Fa👕👔</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse float-right" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active text-dark font-weight-bold">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item font-weight-bol">
        <a className="nav-link" href="#">Our Collection</a>       
      </li>      
      <li> <i className="fa fa-shopping-cart" onClick={clickChange} title='click'></i></li>    
    </ul>   
  </div>
</nav>

{
         show ? <AddtoCart/> : null
      }   
    
    </>
  )
}

export default Navbar;