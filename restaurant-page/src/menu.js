import dosa from './assets/dosa.jpg';
import lassi from './assets/lassi.jpeg';
import pav from './assets/pav.jpg';

export default function home() {
    document.getElementById("home").setAttribute("class", "unselected");
    document.getElementById("menu").setAttribute("class", "selected");
    document.getElementById("about").setAttribute("class", "unselected");
    const cont = document.getElementById("container");
    cont.innerHTML = "";
    const createEL = (divClass, title, istitle = false, content = null, price = null, img = null) => {
        const box = document.createElement("div");
        box.setAttribute("class", divClass);
        const title1 = document.createElement("p");
        title1.innerText = title;
        box.appendChild(title1);
        if (!istitle) {
            title1.setAttribute("class", "box-title");
            if (content !== null && price !== null && img !== null) {
                const grid = document.createElement("div");
                grid.setAttribute("class", "item-info-grid");
                const content1 = document.createElement("p");
                content1.setAttribute("class", "item-info");
                content1.innerText = content;
                grid.appendChild(content1);
                const price1 = document.createElement("p");
                price1.setAttribute("class", "price");
                price1.innerText = price;
                grid.appendChild(price1);
                const mydp = new Image();
                mydp.src = img;
                mydp.setAttribute("class", "item-photo");
                grid.appendChild(mydp);
                box.appendChild(grid);
            }
        }
        cont.appendChild(box);
    };
    createEL("title-box", "Menu", true);
    createEL("content-box", "Beverages", false);
    let content = "Quench your thirst with our refreshing Lassi, a traditional Indian yogurt-based drink.\nAvailable in various flavors.";
    let price = "₹250";
    createEL("name-card", "Lassi", false, content, price, lassi);
    content = "Experience the tangy delight of Shikanji, a traditional Indian lemonade infused with spices and sweetness.\nPerfect for a refreshing sip.";
    price = "₹100";
    createEL("name-card", "Jain Shikanji", false, content, price, lassi);
    createEL("content-box", "Breakfast", false);
    content =
        "Delight in our comforting Poha, a fragrant and flavorful Indian breakfast dish made with flattened rice, vegetables, and aromatic spices.";
    price = "₹250";
    createEL("name-card", "Poha", false, content, price, pav);
    content = 
    "Savor the South Indian classic, Idli Sambar, soft and fluffy steamed rice cakes served with a flavorful lentil-based vegetable stew.";
    price = "₹250";
    createEL("name-card", "Idli Sambar", false, content, price, dosa);
    createEL("content-box", "Main Course", false);
    content = "Indulge in our savory Pav Bhaji, a delectable blend of mashed vegetables served with buttered bread rolls.\nA Mumbai favorite!";
    price = "₹350";
    createEL("name-card", "Pav Bhaji", false, content, price, pav);
    content = "Indulge in our savory Pav Bhaji, a delectable blend of mashed vegetables served with buttered bread rolls.\nA Mumbai favorite!";
    price = "₹350";
    createEL("name-card", "Pav Bhaji", false, content, price, pav);
    content = "Indulge in our savory Pav Bhaji, a delectable blend of mashed vegetables served with buttered bread rolls.\nA Mumbai favorite!";
    price = "₹350";
    createEL("name-card", "Pav Bhaji", false, content, price, pav);
    content = "Indulge in our savory Pav Bhaji, a delectable blend of mashed vegetables served with buttered bread rolls.\nA Mumbai favorite!";
    price = "₹350";
    createEL("name-card", "Pav Bhaji", false, content, price, pav);
    content = "Indulge in our savory Pav Bhaji, a delectable blend of mashed vegetables served with buttered bread rolls.\nA Mumbai favorite!";
    price = "₹350";
    createEL("name-card", "Pav Bhaji", false, content, price, pav);
    content = "Indulge in our savory Pav Bhaji, a delectable blend of mashed vegetables served with buttered bread rolls.\nA Mumbai favorite!";
    price = "₹350";
    createEL("name-card", "Pav Bhaji", false, content, price, pav);
    content = "Indulge in our savory Pav Bhaji, a delectable blend of mashed vegetables served with buttered bread rolls.\nA Mumbai favorite!";
    price = "₹350";
    createEL("name-card", "Pav Bhaji", false, content, price, pav);
    content = "Indulge in our savory Pav Bhaji, a delectable blend of mashed vegetables served with buttered bread rolls.\nA Mumbai favorite!";
    price = "₹350";
    createEL("name-card", "Pav Bhaji", false, content, price, pav);
}