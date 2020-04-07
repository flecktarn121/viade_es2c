import React, {useEffect} from 'react';
import {TimelineRouteCard, TimelineRouteDetail, Input} from './timelineroute.style';
import Ruta from "../../Ruta"
import rutas from "../../../constants/globals";

import {NotificationTypes, useNotification} from '@inrupt/solid-react-components';
import {notification} from '@utils';
import auth from "solid-auth-client";
import {useTranslation} from 'react-i18next';

const TimeLineRoute = props => {
    let cadena = null;
    let friendWebID = null;
    const {title, description, id} = props;
    let route = rutas[id];
    const {createNotification} = useNotification(cadena);
    const { t } = useTranslation();

    useEffect(() => {
        auth.trackSession(session => {
            if (session) {
                cadena = session.webId;
            }
        });
    });

    function handleShare() {
        try {
            const contentNotif = {
                title: "Route share",
                summary: "Ha compartido una ruta contigo",
                actor: cadena,
                object: cadena + "viade/" + route.name,
                target: friendWebID
            };
            publish(sendNotification, contentNotif, friendWebID, NotificationTypes.OFFER);
        } catch (error) {
            console.log(error);
        }
    }

    const publish = async (createNotification, content, webId, type) => {
        try {
            type = type || NotificationTypes.ANNOUNCE;

            const license = 'https://creativecommons.org/licenses/by-sa/4.0/';

            const inboxes = await notification.findUserInboxes([
                {path: webId, name: 'Global'}
            ]);
            if (inboxes.length === 0)
                return false;
            const to = notification.getDefaultInbox(inboxes, 'Global');
            if (to) {

                await createNotification({
                    title: content.title,
                    summary: content.summary,
                    actor: content.actor,
                    object: content.object,
                    target: content.target
                }, to.path, type, license);
            }
            return true;
        } catch (e) {
            console.error(e);
            return false;
        }
    };


    async function sendNotification(content, to, type, license) {
        try {
            await createNotification(content, to, type, license);
        } catch (error) {
            console.log(error);
        }
    }


    function handleFriendChange(event) {
        event.preventDefault();
        friendWebID = event.target.value;
    }

    return (
        <TimelineRouteCard className="card">
            <TimelineRouteDetail data-testid="welcome-detail">
                <h3>{title}</h3>
                <p>{description}</p>
                <Ruta route={route}/>
                <p>{t('route.share')}</p>
                <Input type={"text"} placeholder={"WebID"} onChange={handleFriendChange}/>
                <button onClick={handleShare}>{t('route.share')}</button>
            </TimelineRouteDetail>
        </TimelineRouteCard>
    );
};

export default TimeLineRoute;


