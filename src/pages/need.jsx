import React from 'react';
import PdfViewer from '../components/PdfView';
import pdfFile from '../assets/Angels.pdf';

const need = () => {
    return (
        <div className="App">
            <PdfViewer fileUrl={pdfFile} />
        </div>
    );
};

export default need;
