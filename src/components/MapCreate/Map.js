import React, {Component} from 'react';
import {default as update} from "react-addons-update";
import {GoogleApiWrapper, Map, Marker, Polyline} from 'google-maps-react';

const containerStyle = {
    display: 'flex',
    padding: '30px 0',
    position: 'relative',
};

const style = {
    display: 'flex',
    flexDirection: 'row',
    height: 'auto',
    width: '100vw'
};

export class CreateMap extends Component {
    sendData = () => {
        this.props.parentCallback(this.state.markers);
    };

    state = {
        markers: [],
        center: {
            lat: 40.4165000,
            lng: -3.7025600
        }
    };

    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.setState({
                    center: {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    }
                })
            });
        }
    }

    _onClick = (event, map, clickEvent) => {
        var {markers} = this.state;
        markers = update(markers, {
            $push: [
                {
                    position: {
                        lat: clickEvent.latLng.lat(),
                        lng: clickEvent.latLng.lng(),
                    },
                    defaultAnimation: 2,
                    key: Date.now(),
                },
            ],
        });
        this.setState({markers});
        this.sendData();
    };

    crearlinea() {
        let markers = [];

        for (let i = 0; i < this.state.markers.length; i++) {
            markers.push({lat: this.state.markers[i].position.lat, lng: this.state.markers[i].position.lng})
        }
        return markers;
    };

    handleMarkerRightclick (index, event) {
        /*
         * All you modify is data, and the view is driven by data.
         * This is so called data-driven-development. (And yes, it's now in
         * web front end and even with google maps API.)
         */
        var {markers} = this.state;
        markers = update(markers, {
            $splice: [
                [index, 1]
            ],
        });
        this.setState({ markers });
        alert("asdasdsdsd")
    };

    render() {
        this.getLocation();
        return (
            <Map google={this.props.google} zoom={14} onClick={this._onClick} center={this.state.center}
                 style={style} containerStyle={containerStyle}>

                {this.state.markers.map((marker, index) => {
                    return (
                        <Marker position={{lat: marker.position.lat, lng: marker.position.lng}} />
                    );
                })}
                <Polyline
                    path={this.crearlinea()}
                    strokeColor="#005F11"
                    strokeOpacity={0.8}
                    strokeWeight={4}/>
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyC6j4mF6blrc4kZ54S6vYZ2_FpMY9VzyRU')
})(CreateMap)