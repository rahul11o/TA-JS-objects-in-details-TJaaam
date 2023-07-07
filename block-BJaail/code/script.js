let form = document.querySelector(".form");
let bookListRoot = document.querySelector(".bookList");

class Book {
  constructor(title, author, image) {
    this.title = title;
    this.author = author;
    this.image = image;
    this.isRead = false;
  }
}

class BookList {
  constructor(list = []) {
    this.books = list;
  }
  addBook(title, author, image) {
    let book = new Book(title, author, image);
    this.books.push(book);
    this.createUI();
  }
  createUI() {
    bookListRoot.innerHTML = "";
    this.books.forEach((book) => {
      let li = document.createElement("li");
      let img = document.createElement("img");
      img.src = book.image;
      let h2 = document.createElement("h2");
      h2.innerText = book.title;
      let p = document.createElement("p");
      p.innerText = book.author;
      let button = document.createElement("button");
      button.innerText = "mark as read";
      li.append(img, h2, p, button);
      bookListRoot.append(li);
    });
  }
}

let library = new BookList();

function handleSubmit(event) {
  event.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const image = document.getElementById("image").value;
  library.addBook(title, author, image);
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("image").value = "";
}

form.addEventListener("submit", handleSubmit);
