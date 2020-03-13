class GeoCoordinate {
    constructor(name, description, elevation, latitude, longitude) {
        this._name = name;
        this._description = description;
        this._elevation = elevation;
        this._latitude = latitude;
        this._longitude = longitude;
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

    get elevation() {
        return this._elevation;
    }

    set elevation(value) {
        this._elevation = value;
    }

    get latitude() {
        return this._latitude;
    }

    set latitude(value) {
        this._latitude = value;
    }

    get longitude() {
        return this._longitude;
    }

    set longitude(value) {
        this._longitude = value;
    }
}