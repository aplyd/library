let list = document.getElementById('list');
let formSpace = document.getElementById('formspace');

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
    myLibrary.push(book);
}

//function to display books in table
function render() {
    myLibrary.forEach(function (book, index) {
        let tr = document.createElement('tr');

        let tdindex = document.createElement('td');
        tdindex.appendChild(document.createTextNode(index));
        tr.appendChild(tdindex);

        let tdtitle = document.createElement('td');
        tdtitle.appendChild(document.createTextNode(book.title));
        tr.appendChild(tdtitle);

        let tdauthor = document.createElement('td');
        tdauthor.appendChild(document.createTextNode(book.author));
        tr.appendChild(tdauthor);

        let tdyear = document.createElement('td');
        tdyear.appendChild(document.createTextNode(book.year));
        tr.appendChild(tdyear);

        let tdread = document.createElement('td');
        tdread.appendChild(document.createTextNode(book.read));
        tr.appendChild(tdread);
        
        list.appendChild(tr);
    })
}

render();

function showForm() {
    formSpace.innerHTML = '';
    let bookFormTitle = document.createTextNode('h2');
    bookFormTitle.textContent = 'book form';
    formSpace.appendChild(bookFormTitle);

    let titleInput = document.createElement('input');
    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('name', 'title');
    titleInput.setAttribute('id', 'titleinput')
    formSpace.appendChild(titleInput);

    let authorInput = document.createElement('input');
    authorInput.setAttribute('type', 'text');
    authorInput.setAttribute('name', 'author');
    authorInput.setAttribute('id', 'authorinput');
    formSpace.appendChild(authorInput);

    let yearInput = document.createElement('input');
    yearInput.setAttribute('type', 'text');
    yearInput.setAttribute('name', 'year');
    yearInput.setAttribute('id', 'yearinput');
    formSpace.appendChild(yearInput);

    let readInput = document.createElement('input');
    readInput.setAttribute('type', 'text');
    readInput.setAttribute('name', 'read');
    readInput.setAttribute('id', 'readinput');
    formSpace.appendChild(readInput);
}
