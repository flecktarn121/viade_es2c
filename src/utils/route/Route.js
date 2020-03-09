class Route {
    constructor(name, description, points, author) {
        this._name = name;
        this._description = description;
        this._points = points;
        this._author = author;
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
}