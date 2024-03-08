const form = document.querySelector(".addbook-form");
const shelf = {};
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
    shelf[newbook.index] = newbook;
    const shelfarea = document.querySelector(".shelf");
    const bookcard = document.createElement("div");
    bookcard.classList.add("book-card");
    bookcard.setAttribute("id", `book-${newbook.index}`);
    const btitle = document.createElement("p");
    btitle.textContent = newbook.title;
    btitle.setAttribute("class", "book-title");
    const bookinfo = document.createElement("div");
    bookinfo.setAttribute("class", "book-info");
    const bauth = document.createElement("p");
    bauth.textContent = `Author: ${newbook.author}`;
    const bpages = document.createElement("p");
    bpages.textContent = `Pages: ${newbook.pages}`;
    const bstatus = document.createElement("p");
    bstatus.textContent = (newbook.status) ? "Status: Read" : "Status: Unread";
    bstatus.setAttribute("id", `status-${newbook.index}`);
    bookinfo.appendChild(bauth);
    bookinfo.appendChild(bpages);
    bookinfo.appendChild(bstatus);
    const bookactions = document.createElement("div");
    bookactions.setAttribute("class", "book-actions");
    const statbutt = document.createElement("button");
    const delbutt = document.createElement("button");
    statbutt.classList.add("book-button");
    delbutt.classList.add("book-button");
    statbutt.classList.add("status-button");
    delbutt.classList.add("delete-button");
    statbutt.setAttribute("id", `status-button-${newbook.index}`);
    delbutt.setAttribute("id", `delete-button-${newbook.index}`);
    statbutt.textContent = (newbook.status) ? "Unread" : "Read";
    delbutt.textContent = "Delete";
    bookactions.appendChild(statbutt);
    bookactions.appendChild(delbutt);
    bookcard.appendChild(btitle);
    bookcard.appendChild(bookinfo);
    bookcard.appendChild(bookactions);
    shelfarea.appendChild(bookcard);
    console.log(newbook.info());
    console.log("Form Submitted");
    statbutt.addEventListener('click', function (event) {
        const bookind = parseInt(event.target.getAttribute("id").split('-')[2]);
        shelf[bookind].status = !shelf[bookind].status;
        const statusinfo = document.querySelector(`#status-${bookind}`);
        event.target.textContent = (shelf[bookind].status) ? "Unread" : "Read";
        statusinfo.textContent = (shelf[bookind].status) ? "Status: Read" : "Status: Unread";
        console.log(`${shelf[bookind].title} status updated: ${shelf[bookind].status}`);
    });
    delbutt.addEventListener('click', function (event) {
        const bookind = parseInt(event.target.getAttribute("id").split('-')[2]);
        delete shelf[bookind];
        bookcard.remove();
        console.log(`${bookind} deleted!`);
    });
});