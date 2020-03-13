import React from 'react';
import {TimelineRouteCard, TimelineRouteDetail} from './timelineroute.style';
import {Link} from "react-router-dom";
import Map from "../../../components/Map";

const TimeLineRoute = props => {
    const {title, date, author, description, markers} = props;
    const mostrarMarkers = () => {
        alert(markers)
    };
    return (
        <TimelineRouteCard className="card">
            <TimelineRouteDetail data-testid="welcome-detail">
                <h3>{title}</h3>
                <h4>
                    {date} - {author}
                </h4>
                <p>{description}</p>
                <button onClick={mostrarMarkers}>Ver ruta</button>
                <Link to={{
                    pathname: '/route'
                }}>ver ruta</Link>
                <button>Compartir</button>
            </TimelineRouteDetail>
            <Map zoom={15} markers={markers}/>
        </TimelineRouteCard>
    );
};

export default TimeLineRoute;
