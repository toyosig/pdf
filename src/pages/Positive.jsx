import React from 'react';
import PdfViewer from '../components/PdfView';
import pdfFile from '../assets/Positive.pdf';

const Positive = () => {
    return (
        <div className="App">
            <PdfViewer fileUrl={pdfFile} />
        </div>
    );
};

export default Positive;
