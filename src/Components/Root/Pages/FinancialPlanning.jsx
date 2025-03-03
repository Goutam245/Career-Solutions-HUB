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
            <i>Mr. David Carter</i>
          </p>
          <p className="py-6">
          Financial success isn’t just about numbers—it’s about building a future where you feel confident, secure, and in control. Whether you're planning for retirement, managing investments, or working toward financial freedom, the right strategy makes all the difference.

Meet David Carter, a seasoned financial expert known for his ability to turn financial uncertainty into opportunity. With a personalized, results-driven approach, he creates tailored wealth management, retirement, and debt-reduction strategies designed to fit your unique goals and lifestyle.

David’s expertise goes beyond traditional financial planning—he believes in empowering his clients. Through clear, insightful guidance, he breaks down complex financial concepts into actionable steps, helping you make informed decisions with confidence. His meticulous analysis ensures you have a clear roadmap to success, no matter your financial challenges.

From milestone moments like buying a home or starting a business to long-term stability and wealth-building, David provides the tools and strategies needed to create lasting financial security. His deep industry knowledge and client-first approach make him the trusted choice for those who want not just financial planning, but financial freedom.
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
