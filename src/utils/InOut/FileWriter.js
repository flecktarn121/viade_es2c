import SolidAuth from "solid-auth-client";

class FileWriter {

  static async handleSave(url,text) {
            // Not using LDFlex here, because this is not an RDF document.
            await SolidAuth.fetch(url, {
                method: 'PUT',
                body: text,
                headers: {
                    'Content-Type': 'text/plain'
                }
            });
    }
}
export default FileWriter;