import React from 'react';
import {TimelineRouteCard, TimelineRouteDetail} from './timelineroute.style';
import {Link} from "react-router-dom";
//import Map from "../../../components/Map";
//import Ruta from "../../Ruta/Ruta";
//import RdftoRouteParser from "../../../utils/parser/RdfToRouteParser";




const TimeLineRoute = props => {
    const {title, description, id} = props;
    let path = "/route/" + id;

    return (
        <TimelineRouteCard className="card">
            <TimelineRouteDetail data-testid="welcome-detail">
                <h3>{title}</h3>
                <p>{description}</p>
                <button><Link to={path}>ver ruta</Link></button>
            </TimelineRouteDetail>
        </TimelineRouteCard>
    );
};

export default TimeLineRoute;


