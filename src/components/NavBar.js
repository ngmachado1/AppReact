import React from "react";
import logo from '../components/assets/images/Logo.svg';

function NavBar() {
  //Esto no funciona, es lo que te habia consultado por slack.
  // const menu = document.querySelector(".menu");
  // const nav = document.querySelector(".link-items");
  // const navLinks = document.querySelectorAll(".link-items li");
  // const navBack = document.querySelector("nav");
  // //toggle Nav

  // const navSlide = () => {
  //   nav.classList.toggle("link-items-active");
  //   //animate links
  //   navLinks.forEach((link, index) => {
  //     if (link.style.animation) {
  //       link.style.animation = "";
  //     } else {
  //       link.style.animation = `navLinkFade 0.5s ease forwards ${index / 6 + 0.5}s`;
  //     }
  //   });
  //   //menu animate
  //   menu.classList.toggle("toggle");
  //   navBack.classList.toggle("active");
  //   //animate links
  //   console.log(nav);
  // };
  return (
    <>
      <nav>
        <picture>
          <source media="(min-width: 759px)" srcset={logo}/>
          <img class="header-logo" src={logo} alt="Maria Machado Luthier"/>
        </picture>
        <ul className="link-items">
          <li>Alimentos</li>
          <li>Accesorios</li>
          <li>Salud</li>
          <li>Estetica</li>
          <li>Ofertas</li>
          <li>Contacto</li>
          <li className="mobile">Solicitá un turno</li>
        </ul>
        <div className="contacto web">
          <p className="contact">Solicitá un turno</p>
        </div>
        <div 
        // onClick={navSlide} 
        className="menu">
          <div className="linea1"></div>
          <div className="linea2"></div>
          <div className="linea3"></div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
