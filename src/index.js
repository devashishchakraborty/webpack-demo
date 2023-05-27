import _ from 'lodash';
import myName from './myName';
import { functionOne, functionTwo } from './myModule'; 
import './style.css';
import Icon from './icon.png'

function component() {
    const element = document.createElement('div');
  
    // Lodash, now imported by this script
    element.textContent = _.join(['Hello', 'webpack'], ' ');
    element.classList.add("hello");

    // Add the image to out existing div.
    const MyIcon  = new Image();
    MyIcon.src = Icon;

    element.appendChild(MyIcon);


    return element;
  }
  
  document.body.appendChild(component());