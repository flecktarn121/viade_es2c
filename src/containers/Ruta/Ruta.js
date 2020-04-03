//import React, {Component} from 'react';
import React, {useEffect} from 'react';
import {Header, Input, RouteContainer, RouteWrapper} from "./Ruta.style";
import Map from "../../components/Map";
import routes from "../../constants/globals";
import {NotificationTypes, useNotification} from '@inrupt/solid-react-components';
import {notification} from '@utils';


const Ruta = ({match,ruta}) => {
        let cadena = null;
        let friendWebID = null;
        const {createNotification} = useNotification(cadena);
        const route = ruta == null? routes[match.params.id] : ruta;

        useEffect(() => {
            const auth = require('solid-auth-client');
            auth.trackSession(session => {
                if (session) {
                    cadena = session.webId;
                }
            });
        });

        async function sendNotification(content, to, type, license) {
            try {
                await createNotification(content, to, type, license);
            } catch (error) {
                console.log(error);
                alert('Error: RouteConst > sendNotification');
            }
        }

        function handleSave() {
            try {
                const contentNotif = {
                    title: "Route share",
                    summary: "hola guapa",
                    actor: cadena,
                    object: cadena + "viade/" + route.name,
                    target: friendWebID
                };
                publish(sendNotification, contentNotif, friendWebID, NotificationTypes.OFFER);
            } catch (error) {
                console.log(error);
                alert("Could not share the route");
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

        function handleFriendChange(event) {
            event.preventDefault();
            friendWebID = event.target.value;
        }

        return (
            <RouteWrapper>
                <RouteContainer>
                    <Header>
                        <h1 className="text--white">{route.name}: </h1>
                        <h2 className="text--white">{route.description}</h2>
                        <br/>
                        <Input type={"text"} placeholder={"WebID"} onChange={handleFriendChange}/>
                        <button onClick={handleSave}> compartir</button>
                    </Header>
                    <Map zoom={15} markers={route.points}/>
                </RouteContainer>
            </RouteWrapper>
        )

    }

;

export default Ruta;