var ViewModel = function () {
    var self = this;
    self.books = window.ko.observableArray();
    self.error = window.ko.observable();
    self.detail = window.ko.observable();
    self.categories = window.ko.observableArray();
    self.newBook = {
        Category: window.ko.observable(),
        Name: window.ko.observable(),
        Author: window.ko.observable(),
        ISBN: window.ko.observable()
    }

    var booksUri = '/api/books/';
    var categoriesUri = '/api/categories/';

    function ajaxHelper(uri, method, data) {
        self.error(''); // Clear error message
        return $.ajax({
            type: method,
            url: uri,
            dataType: 'json',
            contentType: 'application/json',
            data: data ? JSON.stringify(data) : null
        }).fail(function (jqXHR, textStatus, errorThrown) {
            self.error(errorThrown);
        });
    }

    function getAllBooks() {
        ajaxHelper(booksUri, 'GET').done(function (data) {
            self.books(data);
        });
    }

    self.getBookDetail = function (item) {
        ajaxHelper(booksUri + item.Id, 'GET').done(function (data) {
            self.detail(data);
        });
    }

    function getCategories() {
        ajaxHelper(categoriesUri, 'GET').done(function (data) {
            self.categories(data);
        });
    }


    self.addBook = function (formElement) {
        var book = {
            CategoryId: self.newBook.Category().Id,
            Name: self.newBook.name(),
            Author: self.newBook.Author(),
            ISBN: self.newBook.ISBN()
        };

        ajaxHelper(booksUri, 'POST', book).done(function (item) {
            self.books.push(item);
        });
    }

    // Fetch the initial data.
    getAllBooks();
    getCategories();
};

ko.applyBindings(new ViewModel());