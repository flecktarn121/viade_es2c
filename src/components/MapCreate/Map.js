import React, {Component} from 'react';
import {default as update} from "react-addons-update";


import {Map, InfoWindow, Marker, GoogleApiWrapper, Polyline} from 'google-maps-react';

const style = {
    width: '70%',
    height: '80%'
};

const containerStyle = {
    width: '50%',
    height: '50%',
    flex: '1 0 auto'
};

export class CreateMap extends Component {

    state = {
        markers: [{
            position: {
                lat: 25.0112183,
                lng: 121.52067570000001,
            },
            key: "Taiwan",
            defaultAnimation: 2
        }],
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
    };

    crearlinea() {
        let markers = [];

        for (let i = 0; i < this.state.markers.length; i++) {
            if (i != 0) {
                markers.push({lat: this.state.markers[i].position.lat, lng: this.state.markers[i].position.lng})
            }
        }
        return markers;
    };

    render() {
        this.getLocation();
        return (
            <Map google={this.props.google} zoom={14} onClick={this._onClick} center={this.state.center}  containerStyle={containerStyle}>

                {this.state.markers.map((marker, index) => {
                    return (
                        <Marker position={{lat: marker.position.lat, lng: marker.position.lng}}/>
                    );
                })}
                <Polyline
                    path={this.crearlinea()}
                    strokeColor="#0000FF"
                    strokeOpacity={0.8}
                    strokeWeight={2}/>
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyC6j4mF6blrc4kZ54S6vYZ2_FpMY9VzyRU')
})(CreateMap)