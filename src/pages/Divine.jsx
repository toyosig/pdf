import React from 'react';
import PdfViewer from '../components/PdfView';
import pdfFile from '../assets/DIVINE.pdf';

const Divine = () => {
    return (
        <div className="App">
            <PdfViewer fileUrl={pdfFile} />
        </div>
    );
};

export default Divine;
