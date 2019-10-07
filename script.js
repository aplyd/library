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
