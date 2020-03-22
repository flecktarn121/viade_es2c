import React from 'react';
import TimeLineRoute from './children/TimeLineRoute';
import Route from '../../utils/route/Route';
import FileWriter from "../../utils/InOut/FileWriter";

import {Header, TimelineContainer, TimelineWrapper} from './timeline.style';
import RdftoRouteParser from "../../utils/parser/RdfToRouteParser";

const markers1 = [
  {lat: 43.354831, lng: -5.851303},
  {lat: 43.356440, lng: -5.854693},
  {lat: 43.361836, lng: -5.850547}
];
const ruta1 = new Route("Ruta1", "Ruta de montaña", markers1,"Elmer",null,  null, null );

const markers2 = [
  {lat: 43.354831, lng: -5.851303},
  {lat: 43.356440, lng: -5.854693},
  {lat: 43.361836, lng: -5.850547}
];
const ruta2 = new Route("Ruta2", "Ruta de montaña", markers2,"Elmer",null,  null, null );

const markers3 = [
  {lat: 43.354831, lng: -5.851303},
  {lat: 43.356440, lng: -5.854693},
  {lat: 43.361836, lng: -5.850547}
];
const ruta3 = new Route("Ruta3", "Ruta de montaña", markers3,"Elmer",null,  null, null );

const rutas = [ruta1,ruta2,ruta3];

/**
 * Container component for the Welcome Page, containing example of how to fetch data from a POD
 */
function TimeLine() {
  FileWriter.handleLoad("");
  //alert("nombre : "+ruta.name);
  //alert("Descripcion: "+ruta.description);
  //alert("puntos: "+ruta.points[0].lat+ ","+ruta.points[0].lng);
  //alert("puntos: "+ruta.points[1].lat+ ","+ruta.points[1].lng);
  //alert("comentarios_:"+ruta.comments);

  return (
    <TimelineWrapper>
      <TimelineContainer>
        <Header>
          <h1>Rutas</h1>
        </Header>
        {rutas.map((ruta, index) => {
          return (
              <TimeLineRoute
                  title={ruta.name}
                  date={ruta.name}
                  author={ruta.author}
                  description={ruta.description}
                  markers={ruta.points}
              />
          );
        })}
      </TimelineContainer>
    </TimelineWrapper>
  );
}

export default TimeLine;
