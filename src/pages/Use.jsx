import React from 'react';
import PdfViewer from '../components/PdfView';
import pdfFile from '../assets/Have.pdf';

const Use = () => {
    return (
        <div className="App">
            <PdfViewer fileUrl={pdfFile} />
        </div>
    );
};

export default Use;
