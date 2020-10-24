import React from "react";
import logo from '../../components/assets/images/Logo.svg';
import CartWidget from './CartWidget';
import "./NavBar.css"

function NavBar() {

  return (
    <>
      <nav>
        <picture>
          <source media="(min-width: 759px)" srcSet={logo}/>
          <img className="header-logo" src={logo} alt="Maria Machado Luthier"/>
        </picture>
        <div className="menu">
          <div className="linea1"></div>
          <div className="linea2"></div>
          <div className="linea3"></div>
        </div>
        <ul className="link-items">
          <li>Alimentos</li>
          <li>Accesorios</li>
          <li>Salud</li>
          <li>Estetica</li>
          <li>Ofertas</li>
          <li>Contacto</li>
          <li className="contact contacto">Solicitá un turno</li>
        </ul>
        <CartWidget />
      </nav>
    </>
  );
}

export default NavBar;
