

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

function addBookToLibrary(book) {
    myLibrary.push(book);
    render();
}

//function to display books in table
function render() {
        list.innerHTML = '';    

    myLibrary.forEach(function (book, index) {
        let tr = document.createElement('tr');

        let tdindex = document.createElement('td');
        tdindex.appendChild(document.createTextNode(index + 1));
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

        //read checkboxes
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        if (book.read == true) {
            checkbox.checked = true;
        } else {
            checkbox.checked = false;
        }
        tr.appendChild(checkbox);

        checkbox.addEventListener('change', function() {
            if (this.checked) {
                book.read = true;
                console.log(myLibrary);
            } else {
                book.read = false;
                console.log(myLibrary);
            }
        })
        
        list.appendChild(tr);
    })
}

render();

function createformElement({elementType, attributeArray, elementText}) {
    let element = document.createElement(elementType);
    attributeArray.forEach(attribute => {
        element.setAttribute(attribute.attributeName, attribute.value);
    })
    element.textContent = elementText;
    formSpace.appendChild(element);
}

function showForm() {
    formSpace.innerHTML = '';

    //create title + input
    createformElement({
        elementType: 'text',
        attributeArray: [
            {
                attributeName: 'id',
                value: 'formtitle'
            }
        ],
        elementText: 'title : '
    })

    createformElement({
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

    //create author + input

    createformElement({
        elementType: 'text',
        attributeArray: [
            {
                attributeName: 'id',
                value: 'formauthor'
            }
        ],
        elementText: 'author : '
    })

    createformElement({
        elementType: 'input',
        attributeArray: [
            {
                attributeName: 'type',
                value: 'text'
            },
            {
                attributeName: 'name',
                value: 'author'
            },
            {
                attributeName: 'id',
                value: 'authorinput'
            }
        ]
    })

    //create year + input

    createformElement({
        elementType: 'text',
        attributeArray: [
            {
                attributeName: 'id',
                value: 'formyear'
            }
        ],
        elementText: 'year : '
    })

    createformElement({
        elementType: 'input',
        attributeArray: [
            {
                attributeName: 'type',
                value: 'text'
            },
            {
                attributeName: 'name',
                value: 'year'
            },
            {
                attributeName: 'id',
                value: 'yearinput'
            }
        ]
    })

    //create read + input

    createformElement({
        elementType: 'text',
        attributeArray: [
            {
                attributeName: 'id',
                value: 'formread'
            }
        ],
        elementText: 'read: '
    })

    createformElement({
        elementType: 'input',
        attributeArray: [
            {
                attributeName: 'type',
                value: 'radio'
            },
            {
                attributeName: 'name',
                value: 'read'
            },
            {
                attributeName: 'id',
                value: 'radioread'
            },
            {
                attributeName: 'value',
                value: 'true'
            }
        ]
    })

    

    //create submit form button
    createformElement({
        elementType: 'button',
        attributeArray: [
            {
                attributeName: 'type',
                value: 'submit'
            },
            {
                attributeName: 'name',
                value: 'submit'
            },
            {
                attributeName: 'id',
                value: 'submitinput'
            },
        ],
        elementText: 'submit'
    })

    let submitFormButton = document.getElementById('submitinput');
    submitFormButton.addEventListener('click', function() {
        let newBook = new Book();
        newBook.title = document.getElementById('titleinput').value;
        newBook.author = document.getElementById('authorinput').value;
        newBook.year = document.getElementById('yearinput').value;

        if (document.getElementById('radioread').checked == true) {
            newBook.read = true;
        } else {
            newBook.read = false;
        }

        formSpace.innerHTML = '';

        if (newBook.title && newBook.author) {
            addBookToLibrary(newBook);
        } else {
            alert('title and author fields are required');
        }
    })

}
