import chefimg from './assets/chef.png';

export default function home() {
    document.getElementById("home").setAttribute("class", "unselected");
    document.getElementById("menu").setAttribute("class", "unselected");
    document.getElementById("about").setAttribute("class", "selected");
    const cont = document.getElementById("container");
    cont.innerHTML = "";
    const createEL = (divClass, title, istitle = false, content = null, img = null) => {
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
            if (img !== null) {
                const mydp = new Image();
                mydp.src = img;
                mydp.setAttribute("class", "name-card-photo");
                box.appendChild(mydp);
            }
        }
        cont.appendChild(box);
    };
    createEL("title-box", "Our Lineup", true);
    let content = "Chef\n555-555-5554\nmotu@spiceParadise.com";
    createEL("name-card", "Motabhai", false, content, chefimg);
    content = "Manager\n555-555-5555\njetha@spiceParadise.com";
    createEL("name-card", "Jethalal", false, content, chefimg);
    content = "Waiter\n555-555-5556\niter@spiceParadise.com";
    createEL("name-card", "Iyer", false, content, chefimg);
}