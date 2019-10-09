

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

function createformElement({elementName, elementType, attributeArray}) {
    let element = document.createElement(`${elementType}`);
    attributeArray.forEach(item => {
        element.setAttribute(`${item.attributeName}`, `${item.value}`);
    })
    
    formSpace.appendChild(element);
}

function showForm() {
    formSpace.innerHTML = '';

    createformElement({
        elementName: 'title',
        elementType: 'input',
        attributeArray: [
            {
                attributeName: 'type',
                value: 'text'
            },
            {
                attributeName: 'name',
                value: 'title'
            },
            {
                attributeName: 'id',
                value: 'titleinput'
            }
        ]
    })

    // //title
    // let formTitle = document.createElement('h3');
    // formTitle.setAttribute('id', 'formtitle');
    // formTitle.textContent = 'title: ';
    // formSpace.appendChild(formTitle);

    // //title input
    // let titleInput = document.createElement('input');
    // titleInput.setAttribute('type', 'text');
    // titleInput.setAttribute('name', 'title');
    // titleInput.setAttribute('id', 'titleinput')
    // formSpace.appendChild(titleInput);

    // //author
    // let formAuthor = document.createElement('h3');
    // formAuthor.setAttribute('id', 'formauthor');
    // formAuthor.textContent = 'author: ';
    // formSpace.appendChild(formAuthor);

    // //author input
    // let authorInput = document.createElement('input');
    // authorInput.setAttribute('type', 'text');
    // authorInput.setAttribute('name', 'author');
    // authorInput.setAttribute('id', 'authorinput');
    // formSpace.appendChild(authorInput);

    // //year
    // let formYear = document.createElement('h3');
    // formYear.setAttribute('id', 'formyear');
    // formYear.textContent = 'year: ';
    // formSpace.appendChild(formYear);

    // //year input
    // let yearInput = document.createElement('input');
    // yearInput.setAttribute('type', 'text');
    // yearInput.setAttribute('name', 'year');
    // yearInput.setAttribute('id', 'yearinput');
    // formSpace.appendChild(yearInput);

    // //read
    // let formRead = document.createElement('h3');
    // formRead.setAttribute('id', 'formread');
    // formRead.textContent = 'read: ';
    // formSpace.appendChild(formRead);

    // //read input
    // let readInput = document.createElement('input');
    // readInput.setAttribute('type', 'text');
    // readInput.setAttribute('name', 'read');
    // readInput.setAttribute('id', 'readinput');
    // formSpace.appendChild(readInput);

    // //form submit
    // let submitInput = document.createElement('input');
    // submitInput.setAttribute('type', 'submit');
    // submitInput.setAttribute('name', 'submitinput');
    // submitInput.setAttribute('id', 'submitinput');
    // formSpace.appendChild(submitInput);
}

// function createFormElement(elementName, elementType, type, typeVal, name, nameVal, id, idVal) {
//     let elementName = document.createElement(`${elementType}`);
//     elementName.setAttribute(`${type}`, `${typeVal }`);
//     elementName.setAttribute(`${name}`, `${nameVal }`);
//     elementName.setAttribute(`${id}`, `${idVal }`);
//     formSpace.appendChild(elementName);
//
