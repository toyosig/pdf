import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import examplePdf from '../assets/HYMN.pdf'; // Adjust the path as necessary

// Set the worker path for PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Hymni = () => {
  const [pageNum, setPageNum] = useState(1);
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const goToPage = (event) => {
    const page = Number(event.target.value);
    if (page >= 1 && page <= numPages) {
      setPageNum(page);
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>PDF Viewer</h2>
      <input
        type="number"
        min="1"
        max={numPages}
        value={pageNum}
        onChange={goToPage}
        placeholder="Enter page number"
      />
      <div style={{ border: '1px solid #ccc', marginTop: '20px', overflow: 'hidden' }}>
        <Document
          file={examplePdf} // Use the imported PDF file
          onLoadSuccess={onDocumentLoadSuccess}
          options={{ disableStream: true }} // Prevents downloading
        >
          <Page pageNumber={pageNum} />
        </Document>
      </div>
      <p>
        Page {pageNum} of {numPages}
      </p>
    </div>
  );
};

export default Hymni;


// import React, { useState } from 'react';
// import { Worker, Viewer } from '@react-pdf-viewer/core';
// import { pageNavigationPlugin } from '@react-pdf-viewer/page-navigation';
// import '@react-pdf-viewer/core/lib/styles/index.css';
// import '@react-pdf-viewer/page-navigation/lib/styles/index.css';

// const Hymni = ({ fileUrl }) => {
//     const [pageNumber, setPageNumber] = useState(1);
//     const [errorMessage, setErrorMessage] = useState('');

//     // Initialize the page navigation plugin
//     const pageNavigationPluginInstance = pageNavigationPlugin();
//     const { jumpToPage } = pageNavigationPluginInstance;

//     // Handle "Go to Page" button click
//     const handleGoToPage = () => {
//         if (pageNumber > 0) {
//             setErrorMessage(''); // Clear any previous error messages
//             jumpToPage(pageNumber - 1); // Navigate to the specified page (0-indexed)
//         } else {
//             setErrorMessage('Please enter a valid page number.');
//         }
//     };

//     // Update state when the input value changes
//     const handlePageNumberChange = (event) => {
//         const page = Number(event.target.value);
//         setPageNumber(page);
//     };

//     return (
//         <div className="h-screen w-full flex flex-col bg-gray-100">
//             {/* Header with input and button */}
//             <div className="w-full fixed top-0 bg-white p-4 shadow-md flex justify-center items-center z-50">
//                 <input
//                     type="number"
//                     value={pageNumber}
//                     onChange={handlePageNumberChange}
//                     className="border border-gray-400 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 mx-2"
//                     min="1"
//                     placeholder="Enter page number"
//                 />
//                 <button
//                     onClick={handleGoToPage}
//                     className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
//                 >
//                     Go to Page
//                 </button>
//             </div>

//             {/* Error Message */}
//             {errorMessage && (
//                 <div className="text-center text-red-600 mt-4">
//                     {errorMessage}
//                 </div>
//             )}

//             {/* PDF Viewer */}
//             <div className="flex-grow flex justify-center items-center pt-20">
//                 <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js">
//                     <Viewer
//                         fileUrl={fileUrl}
//                         plugins={[pageNavigationPluginInstance]}
//                     />
//                 </Worker>
//             </div>
//         </div>
//     );
// };

// export default Hymni;
