import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

library.add( faMoon, faSun ) 

function Theme_Changer () {

    var element = document.body;
    element.classList.toggle("theme_main");
    element.classList.toggle("theme_header");
    element.classList.toggle("theme_footer");
} 

export default Theme_Changer
