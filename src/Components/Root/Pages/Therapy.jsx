import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FaHome } from 'react-icons/fa';
const Therapy = () => {
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
            src="https://i.ibb.co.com/JzMgmmZ/pexels-olly-733872.jpg"
            className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Personal Teatment</h1>
            <p className="py-3 font-serif font-semibold"> <i>Mental Health Cheack</i></p>
            <p className="py-3 font-mono text-2xl font-semibold"> <i>Dr. Emily Carter</i></p>
            <p className="py-6">
            Transform Your Career and Well-Being with Dr. Emily Carter
Dr. Emily Carter is the perfect guide for those seeking both career success and mental well-being. With a unique blend of expertise in clinical psychology and career counseling, she empowers individuals to overcome challenges, build confidence, and unlock their true potential. Her compassionate, results-driven approach helps clients navigate stress, strengthen resilience, and make informed career decisions.

Dr. Carter’s personalized strategies and evidence-based techniques ensure tailored support, whether you’re battling burnout, facing workplace dilemmas, or striving for professional growth. With a deep understanding of workplace dynamics and mental health, she provides the clarity and tools needed for a thriving, fulfilling career.
            </p>
            <button
          className="mt-6 btn btn-primary flex items-center gap-2"
          onClick={() => window.location.href = '/services'}
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

export default Therapy;