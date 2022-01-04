const container = document.getElementById('booksList');
const title = document.getElementById('title');
const author = document.getElementById('author');

let books = [];

function data() {
  books.forEach((book) => {
    container.innerHTML += `
        <p>${book.author}</p>
        <p>${book.title}</p>
        <input type="button" value="Remove" id="${book.id}" onClick="removeItem('${book.id}')"/>
        <hr>
        `;
  });
}

function addItem() {
  const bookId = Math.random().toString(36).slice(2);
  books = JSON.parse(localStorage.getItem('books'));
  const inputForm = {
    Id: bookId,
    title: title.value,
    author: author.value,
  };
  books.push(inputForm);
  localStorage.setItem('books', JSON.stringify(books));
  data();
}

const formData = document.querySelectorAll('input');
for (let form of formData) {
  form.addEventListener('change', () => {
    addItem();
  });
}

function removeItem(bookId) {
  books = JSON.parse(localStorage.getItem('books'));
  books = books.filter((e) => e.id !== bookId);
  console.log(books);
  localStorage.setItem('books', JSON.stringify(books));
}

const getFormData = JSON.parse(localStorage.getItem('books'));
function getFormDataStorage() {
  if (getFormData !== null) {
    books = getFormData;
    data();
  }
}

window.onresize = getFormDataStorage();
