import React from 'react';
import {TimelineRouteCard, TimelineRouteDetail} from './timelineroute.style';
import Ruta from "../../Ruta"
import rutas from "../../../constants/globals";

const TimeLineRoute = props => {
    const {title, description, id} = props;
    let route = rutas[id];

    return (
        <TimelineRouteCard className="card">
            <TimelineRouteDetail data-testid="welcome-detail">
                <h3>{title}</h3>
                <p>{description}</p>
                <Ruta route={route} />
            </TimelineRouteDetail>
        </TimelineRouteCard>
    );
};

export default TimeLineRoute;


