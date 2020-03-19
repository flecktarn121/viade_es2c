import React, {Component, useEffect, useState} from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from "./Children/Marker";
import {LiveUpdate} from '@inrupt/solid-react-components';


const Map = (props) => {

    // constructor(props) {
    //     super(props);
    //     this.handleGoogleMapApi = this.handleGoogleMapApi.bind(this);
    // }

    const markers = props.markers;
    console.log(markers);
    // const marcadores = atob(markers);
    const [wasChecked, setWasChecked] = useState(false);

    const isMarkersValid = async () => {
        try {
            const url = new URL(markers);
            setWasChecked(url !== undefined);
        } catch (e) {
            // history.push('/404');
            console.log("Error al cargar los marcadores");
        }
    };

    isMarkersValid();

    // useEffect(() => {
    //     if (markers) isMarkersValid();
    // }, [markers, props]);

    const getLocation = async () => {
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
    };

    const cargarMarcadores = (list) => {
        let markers = [];

        for (let i = 0; i < list.length; i++) {
            markers.push(
                <Marker text="" lat={list[i].lat} lng={list[i].lng}/>
            )
        }
        return markers;
    };

    const handleGoogleMapApi = (google) => {
        var routePath = new google.maps.Polyline({
            path: markers,
            geodesic: true,
            strokeColor: '#33BD4E',
            strokeOpacity: 1,
            strokeWeight: 5
        });

        routePath.setMap(google.map);
    };

    const center = {
        lat: markers[0].lat,
        lng: markers[0].lng
    };

    return (
        <div style={{height: '70vh', width: '100%'}}>
            <GoogleMapReact
                bootstrapURLKeys={{key: 'AIzaSyC6j4mF6blrc4kZ54S6vYZ2_FpMY9VzyRU'}}
                defaultCenter={center}
                defaultZoom={props.zoom}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={handleGoogleMapApi}
            >
                {cargarMarcadores(markers)}
            </GoogleMapReact>
        </div>
    );
};

export default Map;