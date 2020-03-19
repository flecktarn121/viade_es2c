import React from 'react';
import {Header, RouteContainer, RouteWrapper} from "./Route.style";
import Map from "../../components/Map";

function Route() {

    // const markers = props.params.markers;
    //
    // console.log(markers);
    //
    // const [wasChecked, setWasChecked] = useState(false);
    //
    // const isRouteValid = async () => {
    //     try {
    //         const url = new URL(markers);
    //         setWasChecked(url !== undefined);
    //     } catch (e) {
    //         // history.push('/404');
    //         console.log("Error al cargar los marcadores");
    //     }
    // };

    console.log("");

    return (
        <RouteWrapper>
            <RouteContainer>
                <Header>
                    <h1 className="text--white">Ruta</h1>
                </Header>

            </RouteContainer>
        </RouteWrapper>
    );
}

export default Route;

// <Map zoom={15} markers={markers}/>