import React, { useState } from 'react';
import '../assets/css/style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

library.add( faMoon, faSun ) 

const Button = ({ label, icon, isClicked }) => {
  const [icon, setIcon] = useState(icon);
  const [label, setLabel] = useState(label);

  return (
    <button onClick={() => setIsClicked(!isClicked)}>
      {icon && <img src={icon} alt="Button Icon" />}
      {label}
    </button>
  );
};

function Theme_Changer () {

    var element = document.body;
    element.classList.toggle("dark-theme");

    return (
        <button className="botao" onClick={Button()}>Mudar Tema</button>
    )
} 

export default Theme_Changer
