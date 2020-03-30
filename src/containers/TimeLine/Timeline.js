import React from 'react';

import {Header, TimelineContainer, TimelineWrapper} from './timeline.style';
import RdftoRouteParser from "../../utils/parser/RdfToRouteParser";
import SmallRow from "../Delay/Delay";

type Props = { webId: String };

/**
 * Container component for the Welcome Page, containing example of how to fetch data from a POD
 */
class TimeLine extends React.Component {

    constructor({webId}: Props) {
        super();
        this.webID = webId.replace("profile/card#me", "viade/");

        this.parser = new RdftoRouteParser();
        this.parser.addRoutes(this.webID);
    }

    render() {
        return (
            <TimelineWrapper>
                <TimelineContainer>
                    <Header>
                        <h1>Ver Rutas</h1>
                    </Header>
                    <SmallRow />
                </TimelineContainer>
            </TimelineWrapper>
        );
    }
}

export default TimeLine;