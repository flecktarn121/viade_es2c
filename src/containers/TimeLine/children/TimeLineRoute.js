import React from 'react';
import {TimelineRouteCard, TimelineRouteDetail} from './timelineroute.style';
import {Link} from "react-router-dom";
import {useTranslation} from 'react-i18next';

const TimeLineRoute = props => {
    const { t } = useTranslation();
    const {title, description, id} = props;
    let path = "/route/" + id;

    return (
        <TimelineRouteCard className="card">
            <TimelineRouteDetail data-testid="welcome-detail">
                <h3>{title}</h3>
                <p>{description}</p>
                <button><Link to={path}>{t('timeline.seeRoute')}</Link></button>
            </TimelineRouteDetail>
        </TimelineRouteCard>
    );
};

export default TimeLineRoute;


