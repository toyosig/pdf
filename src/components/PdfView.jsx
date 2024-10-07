import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const PdfViewer = ({ fileUrl }) => {
    // Default layout plugin for better user experience on mobile
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return (
        <div className="h-screen w-full">
            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js`}>
                <Viewer 
                    fileUrl={fileUrl}
                    plugins={[defaultLayoutPluginInstance]}  // Add toolbar with zooming support
                />
            </Worker>
        </div>
    );
};

export default PdfViewer;
