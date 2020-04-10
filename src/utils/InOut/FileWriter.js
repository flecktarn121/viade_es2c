import SolidAuth from "solid-auth-client";
import auth from "solid-auth-client";
import FC from "solid-file-client";
import {errorToaster} from '@utils';

class FileWriter {

    constructor( Props) {

    }

    static async handleSave(url, text) {
         await SolidAuth.fetch(url, {
            method: 'PUT',
            body: text,
            headers: {
                'Content-Type': 'text/turtle'
            }
        });
    }
    static handleLoad(url,fileName,callback) {
        const doc = SolidAuth.fetch(url);
        doc
            .then(async response => {
                const text = await response.text();
                if (response.ok) {
                    callback(fileName,text);
                } else if (response.status === 404) {
                    errorToaster("Error 404 Not Found"+" "+url, "Error")
                } else {
                    errorToaster("Error "+response.status+": "+url, "Error")
                }
            });
    }

    static readFolder(url,callback){
        const fc = new FC(auth);

        fc.readFolder(url,[]).then(promesa => {
            let i
            let carpetas = []
            for (i=0;i<promesa.files.length;i++){
                carpetas[i]=promesa.files[i].name;
            }
            callback(url,carpetas);
        }, err => errorToaster("Error: "+err+", "+url));
    }
}

export default FileWriter;