import SolidAuth from "solid-auth-client";

class FileWriter {
    constructor() {
    }

  static async handleSave(url,text) {
            // Not using LDFlex here, because this is not an RDF document.
            const result = await SolidAuth.fetch(url, {
                method: 'PUT',
                body: text,
                headers: {
                    'Content-Type': 'text/plain'
                }
            });
    }
}