const form = document.querySelector(".addbook-form");
const shelf = [];
let ind = 0;

function Book(title, author, pages, status) {

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.index = ind++;
    this.info = () => {
        return `${this.title} by ${this.author}, ${this.pages} pages, Read Status: ${this.status}. Index: ${this.index}`
    };
}
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const bookname = document.querySelector("#book-name").value;
    const bookauthor = document.querySelector("#book-author").value;
    const bookpages = document.querySelector("#book-pages").value;
    const bookread = document.querySelector("#book-read");
    const status = (bookread.checked) ? true : false;
    let newbook = new Book(bookname, bookauthor, bookpages, status);
    shelf.push(newbook);
    const shelfarea = document.querySelector(".shelf");
    const bookcard = document.createElement("div");
    bookcard.classList.add("book-card");
    bookcard.setAttribute("id", "newbook.index");
    shelfarea.appendChild(bookcard);
    console.log(newbook.info());
    console.log("Form Submitted");
});