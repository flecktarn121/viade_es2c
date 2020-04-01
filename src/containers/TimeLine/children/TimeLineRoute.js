import React, {useState, useCallback, useEffect} from 'react';
import {TimelineRouteCard, TimelineRouteDetail} from './timelineroute.style';
import {Link} from "react-router-dom";
import {Input} from "../../CreateRoute/Route.style";
import {useNotification} from '@inrupt/solid-react-components';
//import Map from "../../../components/Map";
//import Ruta from "../../Ruta/Ruta";
//import RdftoRouteParser from "../../../utils/parser/RdfToRouteParser";




const TimeLineRoute = props => {
    const {title, description, id} = props;
    const [share, setShare] = useState('');

    let path = "/route/" + id;

    useEffect(() => {
        // const auth = require('solid-auth-client');
        // auth.trackSession(session => {
        //     if (session){
        //         setWebID(session.webId)
        //     }
        // });
    });

    function handleShare() {
        if( share != undefined && share.trim().length!=0){
            // console.log(webID)
            // const auth = require('solid-auth-client');
            // auth.trackSession(session => {
            //     if(session){
            //         console.log(session.webId)
            //         const { createNotification} = useNotification(session.webId);
            //     }
            // });


                // const sendNotification=useCallback(
                //     async (content, to, type, license) => {
                //         try {
                //             await createNotification(content, to, type, license);
                //         } catch (error) {
                //             console.log(error);
                //             alert('Error: RouteConst > sendNotification');
                //         }
                //     },
                //     [  createNotification]
                // );
            // })
        }
    }
    function handleShareChange(event) {
        event.preventDefault();
        setShare(event.target.value);
    }
    return (
        <TimelineRouteCard className="card">
            <TimelineRouteDetail data-testid="welcome-detail">
                <h3>{title}</h3>
                <p>{description}</p>
                <button><Link to={path}>ver ruta</Link></button>
                <Input type="text" size="100" placeholder="webId" onChange={handleShareChange}/>
                <button onClick={handleShare}>
                    Compartir
                </button>
            </TimelineRouteDetail>
        </TimelineRouteCard>
    );
};

export default TimeLineRoute;


