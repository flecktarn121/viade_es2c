import React from 'react';
import {TimelineRouteCard, TimelineRouteDetail} from './timelineroute.style';
import {Button} from '../timeline.style';

const TimeLineRoute = props => {
  const { title, date, author, description } = props;
  return (
    <TimelineRouteCard className="card">
      <TimelineRouteDetail data-testid="welcome-detail">
        <h3>{title}</h3>
        <h4>
          {date} - {author}
        </h4>
        <p>{description}</p>
        <Button>Ver ruta</Button>
        <Button>Compartir</Button>
      </TimelineRouteDetail>
    </TimelineRouteCard>
  );
};

export default TimeLineRoute;
