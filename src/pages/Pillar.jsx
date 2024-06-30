import React from 'react';
import PdfViewer from '../components/PdfView';
import pdfFile from '../assets/PILLARS.pdf';

const Pillar = () => {
    return (
        <div className="App">
            <PdfViewer fileUrl={pdfFile} />
        </div>
    );
};

export default Pillar;
