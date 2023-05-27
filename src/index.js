import _ from 'lodash';
import myName from './myName';
import { functionOne, functionTwo } from './myModule'; 
import './style.css';
import Icon from './icon.png'
import Data from './data.xml';
import Notes from './data.csv';

function component() {
    const element = document.createElement('div');
  
    // Lodash, now imported by this script
    element.textContent = _.join(['Hello', 'webpack'], ' ');
    element.classList.add("hello");

    // Add the image to out existing div.
    const MyIcon  = new Image();
    MyIcon.src = Icon;

    element.appendChild(MyIcon);

    console.log(Data);
    console.log(Notes);

    return element;
  }
  
  document.body.appendChild(component());