class BookList {
  constructor() {
    this.bookArr = bookArray;
    this.currInd = currIndex;
  }
  add(book) {
    return this.bookArr.push(book);
  }
  getCurrentBook() {
    return this.currInd;
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
  }
}

class Book {
  constructor() {
    this.title = title;
    this.category = category;
    this.author = author;
    this.isRead = false;
    this.finishedDate = finishedDate;
  }
  markBookAsRead() {
    this.isRead = true;
    this.finishedDate = Date.now();
  }
}
