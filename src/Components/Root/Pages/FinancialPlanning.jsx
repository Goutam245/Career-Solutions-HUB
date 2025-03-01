import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FaHome } from 'react-icons/fa';

const FinancialPlanning = () => {
    const [comments, setComments] = useState([]); // State for storing comments
    const [inputValue, setInputValue] = useState(''); // State for managing input field value

      // Handler for adding a new comment
  const handleAddComment = () => {
    if (inputValue.trim() !== '') {
      setComments([...comments, inputValue]);
      setInputValue(''); // Clear input field after submitting
    }
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
         <Helmet>
                <meta charSet="utf-8" />
                <title>Services</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="https://i.ibb.co.com/4gyj0WB/pexels-latronico-709188.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Financial Planning</h1>
          <p className="py-3 font-serif font-semibold">
            <i>Finance</i>
          </p>
          <p className="py-3 font-mono text-2xl font-semibold">
            <i>Mr. Robert Brown</i>
          </p>
          <p className="py-6">
          Financial planning is a cornerstone of personal and professional stability. It equips individuals with the tools to manage their income, investments, and expenditures effectively, ensuring a secure and prosperous future.

Mr. Robert Brown is a renowned financial planner with expertise in creating personalized strategies for wealth management, retirement planning, and debt reduction. His client-centric approach ensures solutions tailored to individual goals and lifestyles.

Mr. Brown’s sessions go beyond numbers; he educates clients on financial literacy, empowering them to make informed decisions. His meticulous analysis of financial situations provides clarity and confidence in managing complex financial challenges.

From planning for major life events to achieving long-term stability, Mr. Brown offers actionable advice that creates measurable results. His experience in diverse financial landscapes ensures that clients receive holistic and practical guidance.

Choosing Mr. Robert Brown for financial planning means gaining a reliable partner who prioritizes your success and well-being. His dedication to his clients’ financial health makes him a standout in the field.
          </p>
          <button
            className="mt-6 btn btn-primary flex items-center gap-2"
            onClick={() => (window.location.href = '/services')}
          >
            <FaHome className="text-lg" />
            Go to Services
          </button>
            {/* Comment/Feedback Section */}
            <div className="mt-10">
            <h2 className="text-2xl font-bold mb-4">Leave a Comment/Feedback</h2>
            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Write your comment here..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="input input-bordered w-full max-w-lg"
              />
              <button
                className="btn btn-secondary"
                onClick={handleAddComment}
              >
                Submit Comment
              </button>
            </div>

            {/* Display Comments */}
            {comments.length > 0 && (
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Comments/Feedback:</h3>
                <ul className="list-disc pl-6">
                  {comments.map((comment, index) => (
                    <li key={index} className="mb-2 text-gray-700">
                      {comment}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialPlanning;
