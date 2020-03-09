class UserComment {
    constructor(text, publishedDate, author) {
        this._text = text;
        this._publishedDate = publishedDate;
        this._author = author;
    }

    get publishedDate() {
        return this._publishedDate;
    }

    set publishedDate(value) {
        this._publishedDate = value;
    }

    get author() {
        return this._author;
    }

    set author(value) {
        this._author = value;
    }

    get text() {
        return this._text;
    }

    set text(value) {
        this._text = value;
    }
}