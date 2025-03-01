import React from 'react';
import { FaHome } from 'react-icons/fa';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-blue-600">404</h1>
        <h2 className="mt-4 text-3xl font-semibold text-gray-800">Page Not Found</h2>
        <p className="mt-2 text-gray-600">
          Oops! The page you're looking for doesn't exist.
        </p>
        <button
          className="mt-6 btn btn-primary flex items-center gap-2"
          onClick={() => window.location.href = '/'}
        >
          <FaHome className="text-lg" />
          Go to Homepage
        </button>
      </div>
    </div>
  );
};

export default NotFound;
