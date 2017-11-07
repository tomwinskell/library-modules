var library;
var hungerGames;

// creates a new game before each spec
beforeEach(function () {
  library = Library();
  hungerGames = Book('Hunger Games', 'Suzanne Collins');

  library.addBook(hungerGames);
});

// sets books back to 'checked in' after each spec
afterEach(function() {
  hungerGames.set('checkedOut', false);
});

describe("checkOutBook for Library", function () {
  it("changes a book's checkedOut attribute from false to true", function () {
    expect(hungerGames.get('checkedOut')).toEqual(false);

    library.checkOutBook(hungerGames);

    expect(hungerGames.get('checkedOut')).toEqual(true);
  });

  it("only allows you to check out books that exist in the library", function () {
    var toot = Book('Toot', 'Leslie Patricelli');

    expect(toot.get('checkedOut')).toEqual(false);

    library.checkOutBook(toot);

    expect(toot.get('checkedOut')).toEqual(false);
  });
});

describe("returnBook for Library", function () {
  it("changes a book's checkedOut attribute from true to false", function () {
    library.checkOutBook(hungerGames);

    expect(hungerGames.get('checkedOut')).toEqual(true);

    library.returnBook(hungerGames);

    expect(hungerGames.get('checkedOut')).toEqual(false);
  });

  it("only allows you to return books that exist in the library", function () {
    var toot = Book('Toot', 'Leslie Patricelli');

    toot.set('checkedOut', true);

    expect(toot.get('checkedOut')).toEqual(true);

    library.returnBook(toot);

    expect(toot.get('checkedOut')).toEqual(true);
  });
});

describe("addBook for Library", function () {
  it("should add a new book to the library and enable it to be checked out", function () {
    var harryPotter = Book('Harry Potter', 'J.K. Rowling');

    expect(harryPotter.get('checkedOut')).toEqual(false);

    library.checkOutBook(harryPotter);

    expect(harryPotter.get('checkedOut')).toEqual(false);

    library.addBook(harryPotter);

    library.checkOutBook(harryPotter);

    expect(harryPotter.get('checkedOut')).toEqual(true);
  });
});

describe("getAttribute for Book", function () {
  it("should only return an attribute if the attribute exists", function () {
    expect(hungerGames.get('pages')).toEqual(undefined);
  });

  it("should return an attribute that does exist", function () {
    expect(hungerGames.get('title')).toEqual('Hunger Games');
  });
});

describe("setAttribute for Book", function () {
  it("should not set an attribute that does not previously exist", function () {
    hungerGames.set('pages', 110);

    expect(hungerGames.get('pages')).toEqual(undefined);
  });

  it("should set an attribute that previously exists", function () {
    hungerGames.set('title', 'The Freaking Awesome Games!');

    expect(hungerGames.get('title')).toEqual('The Freaking Awesome Games!');
  });
});
