import React from 'react';
import ReactDelayRender from 'react-delay-render';
import routes from "../../constants/globals";
import TimeLineRoute from "../TimeLine/children/TimeLineRoute";

const SmallRow = () => {
    let rutas = [];
    for(let i=0; i<routes.length; i++){
        rutas.push(
            <TimeLineRoute
                title={routes[i].name}
                date={routes[i].name}
                author={routes[i].author}
                description={routes[i].description}
                markers={routes[i].points}
                id={i}
            />
        );
    }
    return rutas;
};

export default ReactDelayRender({ delay: 2000 })(SmallRow);