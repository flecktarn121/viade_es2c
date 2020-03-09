class Video {
    constructor(url, publishedDate, author) {
        this._url = url;
        this._publishedDate = publishedDate;
        this._author = author;
    }

    get url() {
        return this._url;
    }

    set url(value) {
        this._url = value;
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
}