import JSZip from 'jszip';
import { saveAs } from 'file-saver';

export const ziped = async (images: Array<{ uri: string, name: string }>, name: string) => {
    const zip = new JSZip();
    images.map(async (item) => {
        zip.file(
            item.name,
            item.uri.replace(/^data:image\/(png|jpg);base64,/, ''),
            { base64: true },
        );
    });
    const data = await zip.generateAsync({ type: 'blob' });
    saveAs(data, `${name}.zip`);
    return data;
};

