import FileWriter from "../InOut/FileWriter";
import Route from "../route/Route";
import rutas from "../../constants/globals";

class RdftoRouteParser {
    regexForQuotationMarks=  /"/g;

    addRoute (fileName,url){
        FileWriter.handleLoad(url,fileName,this.singleParse.bind(this));
    }

    addRoutes (url){
        FileWriter.readFolder(url, this.multiParse.bind(this));
    }

    singleParse(fileName,text){
        let name = this.getName(text);
        let description = this.getDescription(text);
        let points = this.getPoints(text);
        let comments = this.getComments(text,points);
        let image = this.getImage(text,points);
        let video = null;
        if(image != null){
            video = this.getVideo(text,points, true);
        }else{
            video = this.getVideo(text,points, false);
        }
        let route = new Route(name,description, points,null,comments,image,video,fileName);
        this.pushRoutes(route);

    }

    pushRoutes(route){
        for (let i=0;i<rutas.length;i++){
            if(rutas[i].name === route.name){
                return
            }
        }
        rutas.push(route);
    }

    multiParse(url, documentos){
        for (let i=0;i<documentos.length;i++){
            FileWriter.handleLoad(url + documentos[i],documentos[i],this.singleParse.bind(this));
        }
    }

    getName(text){
        let tx = text.split("\n");
        let line = tx[6].split(" ");
        let name = line[1].replace(this.regexForQuotationMarks,"");
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

    getComments(text,points){
        let tx = text.split("\n");
        let indice = 9+points.length+1;
        let line = tx[indice].split(" ");
        let comments = line[1].replace(this.regexForQuotationMarks,"")
        if (comments==="null"){
            comments = null;
        }
        return comments;
    }

    getImage(text,points){
        let tx = text.split("\n");
        let indice = 9+points.length+2;
        let line = tx[indice].split(" ");
        if(line[1]==="\"null\""){
            return null;
        }
        indice = indice + 2;
        line = tx[indice].split(" ");
        return line[2].replace(this.regexForQuotationMarks,"")
    }

    getVideo(text,points, imagen){
        let tx = text.split("\n");
        let indice = 9+points.length+3;
        let line = tx[indice].split(" ");
        if(line[1]==="\"null\""){
            return null;
        }
        if(imagen){
            indice = indice + 2;
        }else{
            indice = indice + 1;
        }
        line = tx[indice].split(" ");
        return line[2].replace(this.regexForQuotationMarks,"")
    }

}

export default RdftoRouteParser;