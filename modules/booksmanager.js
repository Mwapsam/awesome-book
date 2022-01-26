export default class BooksManager {
  constructor(books) {
    this.books = books;
    this.counter = 0;
    this.BOOK_COLLECTION = document.querySelector('#book_collection');
  }

  incrementCounter() {
    this.counter += 1;
  }

  addBook(book) {
    this.books.push(book);
    this.displayBooks();
    this.saveBooks();
  }

  removeBook(index) {
    this.books = this.books.filter((book) => book.id !== index);
    this.displayBooks();
    this.saveBooks();
    if (this.books.length === 0) {
      this.BOOK_COLLECTION.innerHTML = 'No books found.';
    }
  }

  loadBooks() {
    if (localStorage.getItem('books') != null) {
      this.books = JSON.parse(localStorage.getItem('books'));
      if (this.books.length === 0) {
        this.BOOK_COLLECTION.innerHTML = 'No books found.';
        this.counter = 0;
      } else {
        this.displayBooks();
        this.counter = this.books[this.books.length - 1].id;
      }
    } else {
      this.BOOK_COLLECTION.innerHTML = 'No books found.';
    }
  }

  saveBooks() {
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  createHtml = (parent, tag) => {
    const element = document.createElement(tag);
    parent.appendChild(element);
    return element;
  };

  displayBooks() {
    this.BOOK_COLLECTION.innerText = '';

    this.books.forEach((book) => {
      const li = this.createHtml(this.BOOK_COLLECTION, 'li');
      const p = this.createHtml(li, 'p');
      this.createHtml(p, 'span').innerText = `"${book.title}" by `;
      this.createHtml(p, 'span').innerText = book.author;
      const button = this.createHtml(li, 'button');
      button.innerText = 'Remove';
      button.id = book.id;
      button.addEventListener('click', () => {
        this.removeBook(book.id);
      });
    });
  }
}
