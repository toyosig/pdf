import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { pdfjs } from 'react-pdf';
import '@react-pdf-viewer/core/lib/styles/index.css';

const PdfViewer = ({ fileUrl }) => {
    return (
        <div className=" flex justify-center items-center">
            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js`}>
                <Viewer 
                    fileUrl={fileUrl}
                    defaultScale={2.0} // Set an appropriate default scale for clarity
                    theme={{
                        theme: 'dark', // Optional: Use a dark theme for better visibility
                    }}
                />
            </Worker>
        </div>
    );
};

export default PdfViewer;
