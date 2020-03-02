import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import { ReactComponent as Logo } from '../img/logo-sin-fondo.svg';

const AnyReactComponent = ({text}: any) => <div>{text}}</div>;

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
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
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
                    defaultZoom={this.props.zoom}
                >
                    <Logo style={{height: "40", width: "40"}}
                          lat={this.state.center.lat}
                          lng={this.state.center.lng}/>
                </GoogleMapReact>
            </div>
        )
    }
}

export default Map;