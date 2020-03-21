import SolidAuth from "solid-auth-client";
import {errorToaster, successToaster} from '@utils';
import {useTranslation} from 'react-i18next';

class FileWriter {

    static async handleSave(url, text) {
        // Not using LDFlex here, because this is not an RDF document.
        const result = await SolidAuth.fetch(url, {
            method: 'PUT',
            body: text,
            headers: {
                'Content-Type': 'text/plain'
            }
        });
        result();
    }

    static handleLoad(url) {
        const { t } = useTranslation();
        const doc = SolidAuth.fetch(url);
        doc
            .then(async response => {
                const text = await response.text();
                if (response.ok) {
                    return text;
                } else if (response.status === 404) {
                    successToaster(t('notifications.404'));
                    return null;
                } else {
                    errorToaster(t('notifications.errorLoading'));
                    return null;
                }
            })
            .catch(() => {
                errorToaster(t('notifications.errorFetching'));
            });
    } // assuming the logged in user doesn't change without a page refresh
}

export default FileWriter;