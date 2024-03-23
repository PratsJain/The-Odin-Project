export default function about() {
    document.getElementById("home").setAttribute("class", "unselected");
    document.getElementById("menu").setAttribute("class", "unselected");
    document.getElementById("about").setAttribute("class", "selected");
    const cont = document.getElementById("container");
    cont.innerHTML = "";
    const titleBox = document.createElement("div");
    titleBox.setAttribute("class", "title-box");
    const title = document.createElement("p");
    title.textContent = "Spice Paradise of India";
    titleBox.appendChild(title);
    const introbox = document.createElement("div");
    introbox.setAttribute("class", "content-box");
    const intro = document.createElement("p");
    intro.textContent = "Embark on a tantalizing journey through the vibrant flavors of India at 'Spice Paradise,' our pure veg haven. Indulge in aromatic curries, delicate dosas, and tantalizing tandoori delights meticulously crafted to tantalize your taste buds. Join us in celebrating the rich heritage and culinary artistry of Indian vegetarian cuisine.";
    introBox.appendChild(intro);
    cont.appendChild(titleBox);
    cont.appendChild(introbox);
}