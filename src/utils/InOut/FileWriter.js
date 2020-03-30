import SolidAuth from "solid-auth-client";
import SolidFileClient from "solid-file-client/src/SolidFileClient";

class FileWriter {

    static async handleSave(url, text) {
        // Not using LDFlex here, because this is not an RDF document.
        //const result =
         await SolidAuth.fetch(url, {
            method: 'PUT',
            body: text,
            headers: {
                'Content-Type': 'text/turtle'
            }
        });
   //     result();
    }
    static handleLoad(url,callback) {
        const doc = SolidAuth.fetch(url);
        doc
            .then(async response => {
                const text = await response.text();
                if (response.ok) {
                    callback(text);
                } else if (response.status === 404) {
                    alert('error');
                } else {
                    alert('error');
                }
            });
    }

    static readFolder(url,callback){
        let leer = new SolidFileClient(SolidAuth,[]);
        leer.readFolder(url,[]).then(promesa => {
            let i
            let carpetas = []
            for (i=0;i<promesa.files.length;i++){
                carpetas[i]=promesa.files[i].name;
            }
            callback(url,carpetas);
        });
    }
}

export default FileWriter;