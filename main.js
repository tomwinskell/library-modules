const Library = function() {
  const books = [];

  const addBook = function (book) {
    books.push(book);
    return `${book.title} added to library`
  }

  const checkOutBook = function (book) {
    if (books.includes(book)) {
      book.setAttribute('checkedOut', true)
    }
  }

  const returnBook = function (book) {
    if (books.includes(book)) {
      book.setAttribute('checkedOut', false)
    }
  }

  return {addBook, checkOutBook, returnBook};
}

const Book = function (title, author) {
  const attributes = {
    checkedOut: false,
    title,
    author,
  }

  const getAttribute = function (name) {
    if (attributes.hasOwnProperty(name)) {
      return attributes[name];
    }
  }

  const setAttribute = function (name, value) {
    if (attributes.hasOwnProperty(name)) {
      attributes[name] = value;
    }
  }

  return {getAttribute, setAttribute};
}