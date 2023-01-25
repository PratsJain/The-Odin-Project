function createGrid(num) {
    const grid = document.querySelector('.grid');
    grid.innerHTML = "";
    for (let i = 0; i < num; ++i) {
        const row = document.createElement('div');
        row.setAttribute("style", 'flex: 1; display: flex; justify-content: space-between; width: 960px;');
        for (let j = 0; j < num; ++j) {
            const col = document.createElement('div');
            col.classList.toggle('pixel');
            col.setAttribute('style', 'flex: 1; width: 960px; background-color: black;');
            row.appendChild(col);
        }
        grid.appendChild(row);
    }
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach((pixel) => {
        pixel.addEventListener('mouseover', () => {
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            pixel.style.backgroundColor = `rgb( ${r}, ${g}, ${b})`;
        })
    });
}


function start() {
    createGrid(100);
    const config = document.querySelector('button');
    config.addEventListener('click', () => {
        let w = Number(prompt("Give the grid dimension: "));
        createGrid(w);
    });
}

start();