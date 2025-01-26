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
    setInputValue(event.target.value); // Accept any input without restrictions
  };

  const handleSearchPage = () => {
    if (inputValue.startsWith('v')) {
      // Handle virtual page logic (e.g., v1, v2)
      const virtualPage = parseInt(inputValue.substring(1), 10); // Extract number after 'v'
      if (!isNaN(virtualPage) && virtualPage >= 1) {
        const actualPage = 1007 + virtualPage - 1; // Map v1 to 1007, v2 to 1008, etc.
        setPageNum(actualPage <= numPages ? actualPage : pageNum); // Validate page number
      }
    } else {
      // Handle numeric page logic
      const inputPage = parseInt(inputValue, 10); // Convert to number
      if (!isNaN(inputPage) && inputPage >= 1 && inputPage <= numPages) {
        let newPage = inputPage;

        // Conditional logic for specific pages
        if (inputPage === 315) {
          newPage += 3;
        } else if (inputPage >= 316 && inputPage < 345) {
          newPage += 5;
        } else if (inputPage >= 345 && inputPage < 1007) {
          newPage += 6;
        }

        setPageNum(newPage <= numPages ? newPage : pageNum); // Ensure page is valid
      }
    }
  };

  const handleNextPage = () => {
    if (pageNum < numPages) {
      setPageNum((prev) => prev + 1);
      setInputValue((prev) => {
        const nextPage = parseInt(prev.replace('v', ''), 10) + 1;
        return pageNum >= 1007 ? `v${nextPage}` : nextPage.toString();
      });
    }
  };

  const handlePreviousPage = () => {
    if (pageNum > 1) {
      setPageNum((prev) => prev - 1);
      setInputValue((prev) => {
        const prevPage = parseInt(prev.replace('v', ''), 10) - 1;
        return pageNum > 1007 ? `v${prevPage}` : prevPage.toString();
      });
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
        <p>To search for various type 'v' and the various number</p>

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
          placeholder="Enter page number or v1"
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
