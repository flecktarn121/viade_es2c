import FileWriter from "../InOut/FileWriter";
import Route from "../route/Route";
class RdftoRouteParser {

    constructor (url){
        FileWriter.handleLoad(url,this.parse.bind(this));
    }
    parse(text){
        let name = this.getName(text);
        let description = this.getDescription(text);
        let points = this.getPoints(text);
        let comments = this.getComments(text);
        let route = new Route(name,description, points,null,comments,null,null);
    }

    getName(text){
        let tx = text.split("\n");
        let line = tx[6].split(" ");
        let name = line[1].replace('"',"")
        return name;
    }
    getDescription(text){
        let tx = text.split("\n");
        let line = tx[7].split(" ");
        let description = line[1].replace('"',"")
        return description;
    }

    getPoints(text){
        let tx = text.split("\n");
        let i = 9;
        let line = tx[i];
        let valores = line.split(" ");
        let points = [];
        while (valores[0] ==="["){
            points[i-9]= {lat:valores[2],lng:valores[5]};
            i++;
            line = tx[i];
            valores = line.split(" ");
        }
        return points;
    }

    getComments(text){
        let tx = text.split("\n");
        let indice = tx.length-2;
        let line = tx[indice].split(" ");
        let comments = line[1].replace('"',"")
        return comments;
    }

}

export default RdftoRouteParser;