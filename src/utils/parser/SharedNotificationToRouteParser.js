import FileWriter from "../InOut/FileWriter";
import RdftoRouteParser from "./RdfToRouteParser";

class SharedNotificationToRouteParser {
    regexForQuotationMarks=  /"/g;

    addRoutes (url){
        url = url.replace("viade","inbox");
        FileWriter.readFolder(url, this.multiParse.bind(this));
    }

    compruebaNotificacion(text){
        let tx = text.split("\n");
        if(tx.length===18){
            if(tx[0]==="@prefix terms: <http://purl.org/dc/terms#>."){
                if(tx[5]==="@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>."){
                    if(tx[10]==="    terms:title \"Route share\";"){
                        return true;
                    }
                    return false;
                }
                return false
            }
            return false
        }
        return false;
    }

    singleParse(fileName,text) {
        if (this.compruebaNotificacion(text)) {

            let routeurl = this.getRouteUrl(text);
            let array = routeurl.split("/");
            let fileName = array[array.length-1];
            let parser = new RdftoRouteParser();
            parser.addRoute(fileName,routeurl);
        }
    }

    multiParse(url, documentos){
        for (let i=0;i<documentos.length;i++){
            FileWriter.handleLoad(url + documentos[i],documentos[i],this.singleParse.bind(this));
        }
    }

    getRouteUrl(text){
        let tx = text.split("\n");
        let line = tx[14].split(" ");
        let name = line[line.length-1].replace(">","").replace("<","").replace(";","");
        return name;
    }

}

export default SharedNotificationToRouteParser;