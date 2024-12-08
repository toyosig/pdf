import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import examplePdf from '../assets/HYMN.pdf';

// Configure PDF.js worker globally
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Hymn = () => {
  const [pageNum, setPageNum] = useState(1);
  const [numPages, setNumPages] = useState(null);
  const [scale, setScale] = useState(1.5); // Increased default scale for better clarity

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const handlePageChange = (event) => {
    const inputPage = parseInt(event.target.value, 10);
    if (inputPage >= 1 && inputPage <= numPages) {
      setPageNum(inputPage);
    }
  };

  const zoomIn = () => setScale((prev) => Math.min(prev + 0.1, 3.0)); // Limit max zoom
  const zoomOut = () => setScale((prev) => Math.max(prev - 0.1, 0.5)); // Limit min zoom

  // Effect to update scale based on window size
  useEffect(() => {
    const handleResize = () => {
      const newScale = window.innerWidth < 600 ? 0.7 : 1.5; // Adjust scale based on width
      setScale(newScale);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call on mount to set initial scale

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="text-center p-5 max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Hymn</h2>

      {/* Zoom Controls */}
      <div className="mb-4">
        <button onClick={zoomOut} className="bg-blue-500 text-white py-2 px-4 rounded mr-2">Zoom Out</button>
        <button onClick={zoomIn} className="bg-blue-500 text-white py-2 px-4 rounded">Zoom In</button>
      </div>

      {/* Page Navigation */}
      <input
        type="number"
        min="1"
        max={numPages || 1}
        value={pageNum}
        onChange={handlePageChange}
        placeholder="Enter page number"
        className="mb-4 w-full p-2 border border-gray-300 rounded"
      />

      {/* PDF Viewer with horizontal scroll */}
      <div className="overflow-x-auto mb-4" style={{ maxHeight: '80vh' }}>
        <Document
          file={examplePdf}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page
            pageNumber={pageNum}
            scale={1.2} // Use the scale state for zoom
            renderMode="svg" // Change to svg for better clarity
          />
        </Document>
      </div>

      {/* Page Info */}
      {numPages && (
        <p className="text-lg">
          Page {pageNum} of {numPages}
        </p>
      )}
    </div>
  );
};

export default Hymn;