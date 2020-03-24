import Route from "../utils/route/Route";

const routes = [];

const markers1 = [
    {lat: 43.354831, lng: -5.851303},
    {lat: 43.356440, lng: -5.854693},
    {lat: 43.361836, lng: -5.850547}
];
const ruta1 = new Route("Ruta1", "Ruta de montaña", markers1,"Elmer",null,  null, null );

routes.push(ruta1);

const markers2 = [
    {lat: 43.354831, lng: -5.851303},
    {lat: 43.356440, lng: -5.854693},
    {lat: 43.361836, lng: -5.850547}
];
const ruta2 = new Route("Ruta2", "Ruta de montaña", markers2,"Elmer",null,  null, null );

routes.push(ruta2);

const markers3 = [
    {lat: 43.354831, lng: -5.851303},
    {lat: 43.356440, lng: -5.854693},
    {lat: 43.361836, lng: -5.850547}
];
const ruta3 = new Route("Ruta3", "Ruta de montaña", markers3,"Elmer",null,  null, null );

routes.push(ruta3);

export default routes;