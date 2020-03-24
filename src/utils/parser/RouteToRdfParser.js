import FileWriter from "../InOut/FileWriter";
class RouteToRdfParser {

    constructor (route, webID){
        this.route = route;
        this.webID = webID;
    }
    parse(){
        let prefixs = this.getPrefix();
        let information = this.getInformation();
        let viadePoints = this.getViadePoints();
        let media = this.getMedia();
        FileWriter.handleSave(this.webID+"viade/"+this.route.name,(String)(prefixs+information+viadePoints+media))
    }

    getPrefix(){
        let line = "@prefix :   <http://example.org/>. \n";
        let viade = "@prefix viade:  <http://arquisoft.github.io/viadeSpec/>.\n";
        let schema = "@prefix schema: <http://schema.org/>.\n";
        let rdfs = "@prefix rdfs:   <http://www.w3.org/2000/01/rdf-schema#>.\n";
        let xsd = "@prefix xsd:    <http://www.w3.org/2001/XMLSchema#>.\n";
        return (String)(line+viade+schema+rdfs+xsd);
    }
    getInformation(){
        let myRoute = ":myRoute a viade:Route ;\n";
        let name ="schema:name \""+this.route.name+"\" ;\n";
        let description = "schema:description \""+this.route.description+"\" ;\n";
        return (String)(myRoute+name+description);
    }

    getViadePoints(){
        let cabecera = "viade:points (\n";
        let final = " );\n";
        let puntos = "";
        let i;
        for (i = 0; i < this.route.points.length; i++) {
            puntos += "[ schema:latitude "+this.route.points[i].position.lat+" ; schema:longitude "+this.route.points[i].position.lng+" ]\n";
        }

        return (String)(cabecera+puntos+final);
    }

    getMedia(){
        let comments = "viade:hasComments \""+this.route.comments+"\" .\n";
        return comments;
    }

}

export default RouteToRdfParser;