import React from 'react';
import {TimelineRouteCard, TimelineRouteDetail} from './timelineroute.style';
import {Link} from "react-router-dom";
import Map from "../../../components/Map";
import Ruta from "../../Ruta/Ruta";

const TimeLineRoute = props => {
    const {title, date, author, description, markers, id} = props;
    const mostrarMarkers = () => {
        alert(markers)
    };
    let marcadores = props.markers;
    console.log(marcadores);

    let path = "/route/";
    path += id;

    console.log(path);

    return (
        <TimelineRouteCard className="card">
            <TimelineRouteDetail data-testid="welcome-detail">
                <h3>{title}</h3>
                <h4>
                    {date} - {author}
                </h4>
                <p>{description}</p>
                <button onClick={mostrarMarkers}>Ver ruta</button>
                <Link to={path}>ver ruta</Link>
                <button>Compartir</button>
            </TimelineRouteDetail>
            <Map zoom={15} markers={markers}/>
        </TimelineRouteCard>
    );
};

export default TimeLineRoute;
