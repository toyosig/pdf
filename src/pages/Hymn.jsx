import React from 'react';
import PdfViewer from '../components/PdfView';
import pdfFile from '../assets/HYMN.pdf';

const Angel = () => {
    return (
        <div className="App">
            <PdfViewer fileUrl={pdfFile} />
        </div>
    );
};

export default Angel;
