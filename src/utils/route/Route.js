class Route {
    constructor(name, description, points, author, comments, image, video) {
        this._name = name;
        this._description = description;
        this._points = points;
        this._author = author;
        this._comments = comments;
        this._image = image;
        this._video = video;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get description() {
        return this._description;
    }

    set description(value) {
        this._description = value;
    }

    get points() {
        return this._points;
    }

    set points(value) {
        this._points = value;
    }

    get author() {
        return this._author;
    }

    set author(value) {
        this._author = value;
    }


    get comments() {
        return this._comments;
    }

    set comments(value) {
        this._comments = value;
    }

    get image() {
        return this._image;
    }

    set image(value) {
        this._image = value;
    }

    get video() {
        return this._video;
    }

    set video(value) {
        this._video = value;
    }
}

export default Route;