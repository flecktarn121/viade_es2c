import FileWriter from "../InOut/FileWriter";
class RdftoRouteParser {

    constructor (webID, name){
        this.text =  FileWriter.handleLoad(webID+"viade/"+name)
    }
    parse(){
        let name = this.getName();
        let description = this.getDescription();
        let points = this.getPoints();
        let comments = this.getComments();
        return new Route(name,description, points,null,comments,null,null);
    }

    getName(){
        let tx = this.text.split("\n");
        let line = tx[6].split(" ");
        let name = line[1].replace('"',"")
        return name;
    }
    getDescription(){
        let tx = this.text.split("\n");
        let line = tx[7].split(" ");
        let description = line[1].replace('"',"")
        return description;
    }

    getPoints(){
      //  let cabecera = "viade:points (\n";
      //  let final = " );\n";
      //  let puntos = "";
      //  let i;
      //  for (i = 0; i < this.route.points.length; i++) {
      //   puntos += "[ schema:latitude "+this.route.points[i].position.lat+" ; schema:longitude "+this.route.points[i].position.lng+" ]\n";
        // }

        //return (String)(cabecera+puntos+final);
    }

    getComments(){
        let tx = this.text.split("\n");
        let line = tx[tx.length-1].split(" ");
        let comments = line[1].replace('"',"")
        return comments;
    }

}

export default RdftoRouteParser;