export default function home() {
    document.getElementById("home").setAttribute("class", "selected");
    document.getElementById("menu").setAttribute("class", "unselected");
    document.getElementById("about").setAttribute("class", "unselected");
    const cont = document.getElementById("container");
    cont.innerHTML = "";
    const createEL = (divClass, title, istitle = false, content = null) => {
        const box = document.createElement("div");
        box.setAttribute("class", divClass);
        const title1 = document.createElement("p");
        title1.innerText = title;
        box.appendChild(title1);
        if (!istitle) {
            title1.setAttribute("class", "box-title");
            if (content !== null) {
                const content1 = document.createElement("p");
                content1.innerText = content;
                box.appendChild(content1);
            }
        }
        cont.appendChild(box);
    };
    createEL("title-box", "Spice Paradise of India", true);
    let content = "Embark on a tantalizing journey through the vibrant flavors of India at 'Spice Paradise,' our pure veg haven. Indulge in aromatic curries, delicate dosas, and tantalizing tandoori delights meticulously crafted to tantalize your taste buds. Join us in celebrating the rich heritage and culinary artistry of Indian vegetarian cuisine.";
    createEL("content-box", "Foundation", false, content);
    content = "Sunday \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 8am - 8pm\nMonday\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa06am - 6pm\nTuesday\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa06am - 6pm\nWednesday\xa0\xa0\xa0\xa0\xa0\xa0\xa06am - 6pm\nThursday\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa06am - 10pm\nFriday \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 6am - 10pm\nSaturday\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa08am - 10pm";
    createEL("content-box", "Timings", false, content);
    content = "123-A, Connaught Place\nNew Delhi-110001\nBharat";
    createEL("content-box", "Visit Us", false, content);
}