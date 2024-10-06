import React from 'react';
import PdfViewer from '../components/PdfView';
import pdfFile from '../assets/Heal.pdf';

const Heal = () => {
    return (
        <div className="App">
            <PdfViewer fileUrl={pdfFile} />
        </div>
    );
};

export default Heal;
