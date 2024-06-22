import React from 'react';
import PdfViewer from '../components/PdfView';
import pdfFile from '../assets/POWER.pdf';

const Pdf = () => {
    return (
        <div className="App">
            <PdfViewer fileUrl={pdfFile} />
        </div>
    );
};

export default Pdf;
