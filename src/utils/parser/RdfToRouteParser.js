import FileWriter from "../InOut/FileWriter";
import Route from "../route/Route";
import routes from "../../constants/globals";
class RdftoRouteParser {
    regexForQuotationMarks=  /"/g;

    async addRoute (url){
        await FileWriter.handleLoad(url,this.singleParse.bind(this));
    }

    async addRoutes (url){
        await FileWriter.readFolder(url, this.multiParse.bind(this));
    }

    singleParse(text){
        let name = this.getName(text);
        let description = this.getDescription(text);
        let points = this.getPoints(text);
        let comments = this.getComments(text);
        let route = new Route(name,description, points,null,comments,null,null);
        this.pushRoutes(route);

    }

    pushRoutes(route){
        let i
        for (i=0;i<routes.length;i++){
            if(routes[i].name === route.name){
                return
            }
        }
        routes.push(route);
    }

    multiParse(url,documentos){
        let i
        for (i=0;i<documentos.length;i++){
            FileWriter.handleLoad(url + documentos[i],this.singleParse.bind(this));
        }
    }

    getName(text){
        let tx = text.split("\n");
        let line = tx[6].split(" ");
        let name = line[1].replace(this.regexForQuotationMarks,"")
        return name;
    }
    getDescription(text){
        let tx = text.split("\n");
        let line = tx[7].split(" ");
        let description = line[1].replace(this.regexForQuotationMarks,"")
        return description;
    }

    getPoints(text){
        let tx = text.split("\n");
        let i = 9;
        let line = tx[i];
        let valores = line.split(" ");
        let points = [];
        while (valores[0] ==="["){
            points[i-9]= {position: {lat:valores[2],lng:valores[5]}};
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
        let comments = line[1].replace(this.regexForQuotationMarks,"")
        return comments;
    }

}

export default RdftoRouteParser;