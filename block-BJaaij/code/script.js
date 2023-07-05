class BookList {
  constructor() {
    this.bookArr = [];
    this.currInd = 0;
  }
  add(books = []) {
    return this.bookArr.concat(books);
  }
  getCurrentBook() {
    return this.bookArr[this.currInd];
  }
  getNextBook() {
    let currBookInd = this.currInd;
    return this.bookArr[currBookInd + 1];
  }
  getPrevBook() {
    let currBookInd = this.currInd;
    return this.bookArr[currBookInd - 1];
  }
  changeCurrentBook(ind) {
    this.currInd = ind;
    return this.currInd;
  }
}

class Book {
  constructor(title, category, author) {
    this.title = title;
    this.category = category;
    this.author = author;
    this.isRead = false;
    this.finishedDate = null;
  }
  markBookAsRead() {
    this.isRead = true;
    this.finishedDate = Date.now();
  }
}

let book1 = new Book(
  "Sapiens: A Brief History of Humankind",
  "History",
  "Yuval Noah Harari"
);

let book2 = new Book("The Alchemist", "Inspirational Fiction", "Paulo Coelho");

let book3 = new Book(
  "The Great Gatsby",
  "Literary Fiction",
  "F.Scott Fitzgerald"
);

let book4 = new Book("1984", "Dystopian Fiction", "George Orwell");

let book5 = new Book("To Kill a Mockingbird", " Classic Fiction", "Harper Lee");
