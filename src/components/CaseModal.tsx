"use client";
import React, { useRef, useEffect, useState } from "react";
import SignaturePad from "signature_pad";

const CaseModal = ({ caseData } : any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isToastVisible, setIsToastVisible] = useState(false);

  const canvasRef = useRef(null);
  let signaturePad : any;

  useEffect(() => {
    if (isModalOpen && canvasRef.current) {
      // Initialize SignaturePad on modal open
      const canvas = canvasRef.current;
      signaturePad = new SignaturePad(canvas);

      // Clean up SignaturePad on modal close
      return () => {
        signaturePad.off(); // Remove event listeners
        signaturePad.clear(); // Clear the signature
        signaturePad = null; // Set the SignaturePad instance to null
      };
    }
  }, [isModalOpen, canvasRef.current]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSave = () => {
    // Get the signature as an image data URL
    // You can now use the signatureDataURL as needed (e.g., save it to your database, etc.)

    // Close the modal
    handleCloseModal();

    showToast();
  };

  const handleClear = () => {
    // Clear the signature
    signaturePad.clear();
  };

  const showToast = () => {
    setIsToastVisible(true);

    // Hide the toast after 3 seconds (adjust as needed)
    setTimeout(() => {
      setIsToastVisible(false);
    }, 3000);
  };

  return (
    <div>
      <div className="flex items-center justify-center mt-5">
        <button
          onClick={handleOpenModal}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Disclaimer
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
            &#8203;
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:w-full sm:max-w-lg">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg text-center font-medium text-gray-900 mb-4">
                      Waiver of founds
                    </h3>
                    <h3 className="text-base text-center leading-6 text-gray-900 mb-4">
                      I, {caseData.name}, hereby acknowledge and confirm my full
                      consent to release and absolve {caseData.fraudCompany}{" "}
                      from any liability pertaining to the funds held on my
                      behalf. This statement serves as a formal declaration of
                      my understanding and voluntary acceptance that{" "}
                      {caseData.fraudCompany} shall not be held responsible for
                      any financial matters associated with the aforementioned
                      funds.
                    </h3>
                    <div className="mb-4">
                      <canvas
                        ref={canvasRef}
                        className="border border-gray-300"
                        width={400}
                        height={200}
                      ></canvas>
                    </div>
                    <div className="flex justify-center space-x-4">
                      <button
                        onClick={handleSave}
                        className="inline-flex justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        Save
                      </button>
                      <button
                        onClick={handleClear}
                        className="inline-flex justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        Clear
                      </button>
                      <button
                        onClick={handleCloseModal}
                        className="inline-flex justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {isToastVisible && (
        <div className="fixed bottom-0 right-0 m-4 p-4 bg-green-500 text-white rounded">
          Modal Submitted!
        </div>
      )}
    </div>
  );
};

export default CaseModal;
