let list = document.getElementById('list');

let myLibrary = [
    {title: 'Atomic Habits', 
    author: 'James Clear',
    year: 2018, 
    read: true},

    {title: 'A Smarter Way To Learn JavaScript',
    author: 'Mark Myers',
    year: 2014,
    read: true},

    {title: 'Cracking The Coding Interview',
    author: 'Gayle Laakmann McDowell',
    year: 2008,
    read: false}
];

function Book(title, author, year, read) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.read = read;
}

function addBookToLibrary() {
    let book = new Book();
    myLibrary.push(book);
}

//function to display books in table
function render() {
    for (i = 0; i < myLibrary.length; i++) {
        let item = document.createElement('tr');
        for (let prop in myLibrary) {
            console.log(prop);
        }
    }
}

render();
