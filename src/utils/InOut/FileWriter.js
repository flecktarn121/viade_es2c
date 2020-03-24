import SolidAuth from "solid-auth-client";
import {useTranslation} from 'react-i18next';

class FileWriter {

    static async handleSave(url, text) {
        // Not using LDFlex here, because this is not an RDF document.
        //const result =
         await SolidAuth.fetch(url, {
            method: 'PUT',
            body: text,
            headers: {
                'Content-Type': 'text/plain'
            }
        });
   //     result();
    }
    static async handleLoad(url,callback) {
        const {t} = useTranslation();
        const doc = SolidAuth.fetch(url);
        doc
            .then(async response => {
                const text = await response.text();
                if (response.ok) {
                    callback(text);
                } else if (response.status === 404) {
                    alert(t('notifications.404'));
                } else {
                    alert(t('notifications.errorLoading'));
                }
            });
    }
}

export default FileWriter;