import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from "./Children/Marker";

class Map extends Component {

    constructor(props) {
        super(props);
        this.handleGoogleMapApi = this.handleGoogleMapApi.bind(this);
    }

    state = {
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

    cargarMarcadores = (list) => {
        let markers = [];

        for (let i = 0; i < list.length; i++) {
            markers.push(
                <Marker text="" lat={list[i].lat} lng={list[i].lng}/>
            )
        }
        return markers;
    };

    handleGoogleMapApi = (google) => {
        var flightPath = new google.maps.Polyline({
            path: this.props.markers,
            geodesic: true,
            strokeColor: '#33BD4E',
            strokeOpacity: 1,
            strokeWeight: 5
        });

        flightPath.setMap(google.map);
    };

    render() {
        //this.getLocation();
        this.center = {
            lat: this.props.markers[0].lat,
            lng: this.props.markers[0].lng
        };
        return (
            <div style={{height: '70vh', width: '100%'}}>
                <GoogleMapReact
                    bootstrapURLKeys={{key: 'AIzaSyC6j4mF6blrc4kZ54S6vYZ2_FpMY9VzyRU'}}
                    defaultCenter={this.center}
                    defaultZoom={this.props.zoom}
                    yesIWantToUseGoogleMapApiInternals
                    onGoogleApiLoaded={this.handleGoogleMapApi}
                >
                    {this.cargarMarcadores(this.props.markers)}
                </GoogleMapReact>
            </div>
        )
    }
}

export default Map;