/* eslint-disable max-classes-per-file */
import Book from './modules/book.js';
import BooksManager from './modules/booksmanager.js';
import Date from './modules/time.js';

const SMALL = document.querySelector('small');
const FORM = document.querySelector('form');
const MANAGER = new BooksManager([]);

document.querySelector('#add_button').addEventListener('click', (event) => {
  event.preventDefault();

  if (FORM.title.validity.valueMissing) {
    SMALL.innerHTML = 'You need to enter an Title';
    SMALL.classList.remove('collapse');
  } else if (FORM.author.validity.valueMissing) {
    SMALL.innerHTML = 'You need to enter an Author';
    SMALL.classList.remove('collapse');
  } else {
    MANAGER.incrementCounter();
    MANAGER.addBook(
      new Book(MANAGER.counter, FORM.title.value, FORM.author.value)
    );
    FORM.reset();
    SMALL.classList.add('collapse');
  }
});

MANAGER.loadBooks();

//
document.querySelector('#add_new').addEventListener('click', () => {
  document.querySelector('#add_new').style.color = 'rgb(58, 169, 206)';
  document.querySelector('#list').style.color = 'black';
  document.querySelector('#contact').style.color = 'black';
  document.querySelector('#book_list').classList.add('collapse');
  document.querySelector('#add_books').classList.remove('collapse');
  document.querySelector('#contact-information').classList.add('collapse');
});

document.querySelector('#contact').addEventListener('click', () => {
  document.querySelector('#add_new').style.color = 'black';
  document.querySelector('#list').style.color = 'black';
  document.querySelector('#contact').style.color = 'rgb(58, 169, 206)';
  document.querySelector('#book_list').classList.add('collapse');
  document.querySelector('#add_books').classList.add('collapse');
  document.querySelector('#contact-information').classList.remove('collapse');
});

document.querySelector('#list').addEventListener('click', () => {
  document.querySelector('#contact').style.color = 'black';
  document.querySelector('#add_new').style.color = 'black';
  document.querySelector('#list').style.color = 'rgb(58, 169, 206)';
  document.querySelector('#book_list').classList.remove('collapse');
  document.querySelector('#add_books').classList.add('collapse');
  document.querySelector('#contact-information').classList.add('collapse');
});

document.querySelector('.date').innerHTML = Date;
