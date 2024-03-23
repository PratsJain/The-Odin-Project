import './style.css';
import homefn from './home.js';
import aboutfn from './about.js';
import menufn from './menu.js';


const output = (function mainfn() {
    homefn();
    console.log("Hello!! Welcome to Spice Paradise of India!!");
    document.querySelector("#home").addEventListener('click', homefn);
    document.querySelector("#menu").addEventListener('click', menufn);
    document.querySelector("#about").addEventListener('click', aboutfn);
})();