import React from 'react';
import PdfViewer from '../components/PdfView';
import pdfFile from '../assets/LIMITED.pdf';

const Limited = () => {
    return (
        <div className="App">
            <PdfViewer fileUrl={pdfFile} />
        </div>
    );
};

export default Limited;
