import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';

class Map extends Component {

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
                        lat : position.coords.latitude,
                        lng : position.coords.longitude
                    }
                })
            });
        }
    }

    render() {
        this.getLocation();
        return (
            <div style={{height: '80vh', width: '100%'}}>
                <GoogleMapReact
                    bootstrapURLKeys={{key: 'AIzaSyC6j4mF6blrc4kZ54S6vYZ2_FpMY9VzyRU'}}
                    defaultCenter={this.state.center}
                    defaultZoom={15}
                >
                </GoogleMapReact>
            </div>
        )
    }
}

export default Map;