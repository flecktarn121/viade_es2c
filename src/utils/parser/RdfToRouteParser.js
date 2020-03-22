import FileWriter from "../InOut/FileWriter";
import Route from "../route/Route";
class RdftoRouteParser {

    constructor (text){
        alert(text);
        this.text = text;
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
        let tx = this.text.split("\n");
        let i = 9;
        let line = tx[i];
        let points = [];
        while (line.split(" ")[0].equals("[")){
            let valores = line.split(" ")
            points[i-9]= {lat:valores[2],lng:valores[5]};
            i++;
            line = tx[i];
        }
        return points;
    }

    getComments(){
        let tx = this.text.split("\n");
        let line = tx[tx.length-1].split(" ");
        let comments = line[1].replace('"',"")
        return comments;
    }

}

export default RdftoRouteParser;