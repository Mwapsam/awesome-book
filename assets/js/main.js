const titleInput = document.querySelector('#book_title');
const authorInput = document.querySelector('#book_author');
const addBookBtn = document.querySelector('#add_book');
const addForm = document.querySelector('.addBookForm');
const bookList = document.querySelector('.list_present');

let booksData = [];

function addBook() {
  const titleValue = titleInput.value;
  const authorValue = authorInput.value;

  if (titleValue !== '' && authorValue !== '') {
    if (booksData.length === 0) {
      bookList.innerHTML = '';
    }

    const bookId = Math.random().toString(36).slice(2);
    booksData.unshift({
      id: bookId,
      title: titleValue,
      author: authorValue,
    });

    localStorage.setItem('bookData', JSON.stringify(booksData));
    addForm.reset();

    bookList.innerHTML = `<li>
                            <h3> ${titleValue} </h3>
                            <p>by - ${authorValue} </p>
                            <input type="button" value="Remove" id="${bookId}" class="removeBook" onClick="removeBook('${bookId}')"/>
                        </li>${bookList.innerHTML}`;
  }
}

addBookBtn.addEventListener('click', addBook);

function buildBookLists(book) {
  const bookData = `<li>
                          <h3> ${book.title} </h3>
                          <p>by - ${book.author} </p>
                          <input type="button" value="Remove" id="${book.id}" onClick="removeBook('${book.id}')"/>
                      </li>`;
  return bookData;
}

function readBookData() {
  let booksBuild = '';
  if (booksData.length > 0) {
    booksData.forEach((books) => {
      booksBuild += buildBookLists(books);
    });
  } else {
    booksBuild = '<li><h3>No books available yet!</h3></li>';
  }

  bookList.innerHTML = booksBuild;
}

// eslint-disable-next-line no-unused-vars
function removeBook(bookId) {
  booksData = booksData.filter((books) => books.id !== bookId);
  localStorage.setItem('bookData', JSON.stringify(booksData));
  readBookData();
}
// Fetch data from localstorage

const localStorageData = JSON.parse(localStorage.getItem('bookData'));
function getLocalStorageData() {
  if (localStorageData !== null) {
    booksData = localStorageData;
    readBookData();
  }
}

window.onresize = getLocalStorageData();
