import React, { useState } from 'react';
import { Worker, Viewer, SpecialZoomLevel } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

const Hymn = ({ fileUrl }) => {
    const [pageNumber, setPageNumber] = useState(1); // State to track the current page number

    // Function to handle page number input change
    const handlePageNumberChange = (event) => {
        let page = Number(event.target.value);
        if (page > 0) {
            setPageNumber(page); // Update page number when input changes
        }
    };

    return (
        <div className="h-screen w-full flex flex-col">
            {/* Input field for page number */}
            <div className="w-full fixed top-0 bg-white p-4 shadow-md flex justify-center items-center z-50">
                <input
                    type="number"
                    value={pageNumber}
                    onChange={handlePageNumberChange}
                    className="border border-gray-400 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    min="1"
                    placeholder="Enter page number"
                />
            </div>

            {/* PDF Viewer */}
            <div className="flex-grow flex justify-center items-center pt-20"> {/* Adjust padding to avoid overlap */}
                <Worker workerUrl={`https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js`}>
                    <Viewer
                        fileUrl={fileUrl}
                        defaultScale={SpecialZoomLevel.PageWidth} // Scale to fit the width of the screen
                        initialPage={pageNumber - 1} // Show the current page (subtract 1 because pages are 0-indexed)
                    />
                </Worker>
            </div>
        </div>
    );
};

export default Hymn;
