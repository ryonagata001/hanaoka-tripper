export const readUploadedFileAsBase64 = (file: File): Promise<string> => {
    const temporaryFileReader = new FileReader();
    return new Promise((resolve, reject) => {
        temporaryFileReader.onerror = () => {
            temporaryFileReader.abort();
            reject(new DOMException('Problem parsing input file.'));
        };

        temporaryFileReader.onload = () => {
            resolve(temporaryFileReader.result as string);
        };
        temporaryFileReader.readAsDataURL(file);
    });
};
