import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import examplePdf from '../assets/HYMN.pdf';

// Configure PDF.js worker globally
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Hymn = () => {
  const [pageNum, setPageNum] = useState(1);
  const [numPages, setNumPages] = useState(null);
  const [inputValue, setInputValue] = useState('1'); // Separate state for input value

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const handleInputChange = (event) => {
    const value = event.target.value;

    // Allow empty input or numeric values
    if (value === '' || /^\d+$/.test(value)) {
      setInputValue(value);
    }
  };

  const handleSearchPage = () => {
    const inputPage = parseInt(inputValue, 10);

    if (inputValue === '' || isNaN(inputPage) || inputPage < 1 || inputPage > numPages) {
      setInputValue(pageNum.toString()); // Reset to the current page number if invalid
    } else {
      let newPage = inputPage;

      // Conditional logic: Add specific values based on the page entered
      if (inputPage === 315) {
        newPage += 3;
      } else if (inputPage >= 316 && inputPage < 345) {
        newPage += 5;
      } else if (inputPage >= 345 && inputPage <= 1000) {
        newPage += 6;
      }

      // Ensure the newPage is within bounds
      if (newPage < 1 || newPage > numPages) {
        newPage = pageNum; // Revert to current page if out of bounds
      }

      setPageNum(newPage);
      setInputValue(newPage.toString());
    }
  };

  const handleNextPage = () => {
    if (pageNum < numPages) {
      setPageNum((prev) => prev + 1);
      setInputValue((prev) => (parseInt(prev, 10) + 1).toString());
    }
  };

  const handlePreviousPage = () => {
    if (pageNum > 1) {
      setPageNum((prev) => prev - 1);
      setInputValue((prev) => (parseInt(prev, 10) - 1).toString());
    }
  };

  return (
    <div className="text-center p-5 max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Hymn</h2>

      {/* Page Navigation */}
      <div className="flex items-center justify-center gap-4 mb-4">
        <button
          onClick={handlePreviousPage}
          disabled={pageNum === 1}
          className={`text-blue-500 underline hover:text-blue-700 ${
            pageNum === 1 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          Previous Page
        </button>

        <p className="font-medium">
          Page {pageNum} of {numPages}
        </p>

        <button
          onClick={handleNextPage}
          disabled={pageNum === numPages}
          className={`text-blue-500 underline hover:text-blue-700 ${
            pageNum === numPages ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          Next Page
        </button>
      </div>

      {/* Search Section */}
      <div className="flex flex-col items-center gap-2 mb-4">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter page number"
          className="p-2 border border-gray-300 rounded w-24 text-center"
        />

        <button
          onClick={handleSearchPage}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Search Hymn
        </button>
      </div>

      {/* PDF Viewer */}
      <div className="overflow-x-auto mb-4 w-[100%]" style={{ maxHeight: '80vh' }}>
        <Document file={examplePdf} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNum} scale={1.2} renderMode="svg" />
        </Document>
      </div>
    </div>
  );
};

export default Hymn;
