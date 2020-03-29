import React from 'react';
import TimeLineRoute from './children/TimeLineRoute';

import {Header, TimelineContainer, TimelineWrapper} from './timeline.style';
import routes from "../../constants/globals";
import RdftoRouteParser from "../../utils/parser/RdfToRouteParser";

type Props = {webId: String};

/**
 * Container component for the Welcome Page, containing example of how to fetch data from a POD
 */
class TimeLine extends React.Component{

    constructor({webId}: Props) {
        super();
        this.webID = webId.replace("profile/card#me", "viade/");
        const parser = new RdftoRouteParser();
        parser.addRoutes(this.webID);
    }

    render() {
        return (
            <TimelineWrapper>
                <TimelineContainer>
                    <Header>
                        <h1>Ver Rutas</h1>
                    </Header>
                    {routes.map((ruta, index) => {
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

}
//
//
//
// function TimeLine({ webId }: Props) {
//     const webID = webId.replace("profile/card#me", "viade/");
//     async function Parser (){
//         let parser = new RdftoRouteParser();
//         await parser.addRoutes(webID);
//     }
//     return (
//         <TimelineWrapper>
//             <TimelineContainer>
//                 <Header>
//                     <h1>Ver Rutas</h1>
//                 </Header>
//                 {routes.map((ruta, index) => {
//                     console.log(index);
//                     return (
//                         <TimeLineRoute
//                             title={ruta.name}
//                             date={ruta.name}
//                             author={ruta.author}
//                             description={ruta.description}
//                             markers={ruta.points}
//                             id={index}
//                         />
//                     );
//                 })}
//             </TimelineContainer>
//         </TimelineWrapper>
//     );
// }

export default TimeLine;
