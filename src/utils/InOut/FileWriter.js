import SolidAuth from "solid-auth-client";
import auth from "solid-auth-client";
import FC from "solid-file-client";

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
        const fc = new FC(auth);

        fc.readFolder(url,[]).then(promesa => {
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