import React, { useState } from 'react';
import '../assets/css/style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

library.add( faMoon, faSun ) 

/* const Button = ({ label, icon, isClicked }) => {
  const [icon, setIcon] = useState(icon);
  const [label, setLabel] = useState(label);

  return (
    <button onClick={() => setIsClicked(!isClicked)}>
      {icon && <img src={icon} alt="Button Icon" />}
      {label}
    </button>
  );
}; */

function ThemeChanger () {

    var element = document.body;
    element.classList.toggle("dark-theme");

} 

function ThemeChangerButton () {
  return (
      <button className="botao" onClick={ThemeChanger}>Mudar Tema</button>
  )
}

export default ThemeChangerButton
