import React from 'react';
import TimeLineRoute from './children/TimeLineRoute';

import {Header, TimelineContainer, TimelineWrapper} from './timeline.style';
import routes from "../../constants/globals";
import RdftoRouteParser from "../../utils/parser/RdfToRouteParser";

/**
 * Container component for the Welcome Page, containing example of how to fetch data from a POD
 */
function TimeLine() {
    return (
        <TimelineWrapper>
            <TimelineContainer>
                <Header>
                    <h1>Ver Rutas</h1>
                </Header>
                {routes.map((ruta, index) => {
                    console.log(index);
                    return (
                        <TimeLineRoute
                            title={ruta.name}
                            date={ruta.name}
                            author={ruta.author}
                            description={ruta.description}
                            markers={ruta.points}
                            id={index}
                        />
                    );
                })}
            </TimelineContainer>
        </TimelineWrapper>
    );
}

export default TimeLine;
