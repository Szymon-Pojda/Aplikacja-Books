{
    'use strict';
    const select = {
        templateOf: {
            book: '#template-book',
            // eslint-disable-next-line indent
        },
        containerOf: {
            image: '.book__image',
            list: '.books-list',
        }
    };
    const templates = {
        book: Handlebars.compile(document.querySelector(select.templateOf.book).innerHTML),
    };

    function render() {
        // eslint-disable-next-line no-undef
        for (let book of dataSource.books) {
            const bookData = {
                id: book.id,
                name: book.name,
                price: book.price,
                rating: book.rating,
                image: book.image,
            };
            const generatedHTML = templates.book(bookData);
            // eslint-disable-next-line no-undef
            const generatedDOM = utils.createDOMFromHTML(generatedHTML);
            const containerOfList = document.querySelector(select.containerOf.list);
            containerOfList.appendChild(generatedDOM);
        }
    }

    function initActions() {
        const favoriteBooks = [];
        console.log('favoriteBooks', favoriteBooks);
        const booksList = document.querySelector(select.containerOf.list);
        const bookImages = booksList.querySelectorAll(select.containerOf.image);
        for (let image of bookImages) {
            image.addEventListener('click', function(event) {
                event.preventDefault();
                const bookID = image.getAttribute('data-id');
                favoriteBooks.push(bookID);
                if (favoriteBooks.includes(bookID)) {
                    image.classList.toggle('favorite');
                }
            });


        }











    }
    render();
    initActions();
}