import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FaHome } from 'react-icons/fa';

const StressManagement = () => {
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
          src="https://i.ibb.co.com/dbfztnZ/pexels-olly-846741.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Stress Management</h1>
          <p className="py-3 font-serif font-semibold">
            <i>Mental Health</i>
          </p>
          <p className="py-3 font-mono text-2xl font-semibold">
            <i>Dr. Michael White</i>
          </p>
          <p className="py-6">
          Stress is an unavoidable part of life, but managing it effectively is crucial for maintaining mental and physical well-being. Stress management services teach individuals techniques to cope with pressure, reduce anxiety, and enhance overall quality of life.

Dr. Michael White is a highly experienced counselor specializing in stress management. With a compassionate and evidence-based approach, he helps clients identify stress triggers and develop strategies to navigate them effectively.

Dr. White’s sessions emphasize mindfulness, relaxation techniques, and cognitive restructuring. He empowers clients to regain control of their emotions and build resilience in the face of challenges.

By addressing stress at its root, Dr. White enables individuals to achieve a healthier work-life balance and improved productivity. His guidance fosters a sense of calm and clarity, even in high-pressure environments.

Partnering with Dr. Michael White for stress management equips clients with lifelong tools to maintain mental equilibrium. His expertise and dedication make him a trusted ally in the journey toward holistic well-being.







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

export default StressManagement;
