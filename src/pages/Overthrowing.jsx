import React from 'react';
import PdfViewer from '../components/PdfView';
import pdfFile from '../assets/OVERTHROWING.pdf';

const Overthrowing = () => {
    return (
        <div className="App">
            <PdfViewer fileUrl={pdfFile} />
        </div>
    );
};

export default Overthrowing;
