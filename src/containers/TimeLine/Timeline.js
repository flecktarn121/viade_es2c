import React from 'react';
import TimeLineRoute from './children/TimeLineRoute';

import {Header, TimelineContainer, TimelineWrapper} from './timeline.style';

/**
 * Container component for the Welcome Page, containing example of how to fetch data from a POD
 */
function TimeLine() {
  return (
    <TimelineWrapper>
      <TimelineContainer>
        <Header>
          <h1>Rutas</h1>
        </Header>
        <TimeLineRoute
          title="Prueba"
          date="18/08/2018"
          author="Elmer"
          description="Ruta de montaña"
        />
        <TimeLineRoute
          title="Hola2"
          date="18/08/2018"
          author="Jaime"
          description="Ruta de montaña"
        />
        <TimeLineRoute
          title="Hola3"
          date="18/08/2018"
          author="Jaime"
          description="Ruta de montaña"
        />
        <TimeLineRoute
          title="Hola4"
          date="18/08/2018"
          author="Jaime"
          description="Ruta de montaña"
        />
        <TimeLineRoute
          title="Hola5"
          date="18/08/2018"
          author="Jaime"
          description="Ruta de montaña"
        />
      </TimelineContainer>
    </TimelineWrapper>
  );
}

export default TimeLine;
