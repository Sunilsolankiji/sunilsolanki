import React from 'react';
import { Document, Page } from 'react-pdf';

const Resume = () => {
  const resumeUrl = '/path-to-resume.pdf';

  return (
    <div className="bg-lightGray dark:bg-deepBlue text-deepBlue dark:text-lightGray min-h-screen p-8">
      <h2 className="text-3xl font-bold mb-8 text-center">Resume</h2>
      <div className="flex flex-col items-center">
        {/* Embedded PDF Viewer */}
        <div className="w-full max-w-4xl border rounded shadow-lg mb-8 bg-white dark:bg-slateGray">
          <Document file={resumeUrl} className="p-4">
            <Page pageNumber={1} />
          </Document>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <a
            href={resumeUrl}
            download
            className="bg-skyBlue text-white px-6 py-2 rounded font-semibold hover:bg-deepBlue"
          >
            Download Resume
          </a>
          <a
            href="/resume-html"
            className="bg-lightGray dark:bg-slateGray text-deepBlue dark:text-lightGray px-6 py-2 rounded font-semibold hover:bg-skyBlue"
          >
            View as HTML
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;