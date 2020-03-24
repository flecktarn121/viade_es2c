import React from 'react';
import {TimelineRouteCard, TimelineRouteDetail} from './timelineroute.style';
import {Link} from "react-router-dom";
import Map from "../../../components/Map";
import Ruta from "../../Ruta/Ruta";

const TimeLineRoute = props => {
    const {title, date, author, description, id} = props;
    let path = "/route/" + id;

    console.log(path);

    return (
        <TimelineRouteCard className="card">
            <TimelineRouteDetail data-testid="welcome-detail">
                <h3>{title}</h3>
                <h4>
                    {date} - {author}
                </h4>
                <p>{description}</p>
                <Link to={path}>ver ruta</Link>
                <button>Compartir</button>
            </TimelineRouteDetail>
        </TimelineRouteCard>
    );
};

export default TimeLineRoute;
