import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FaHome } from 'react-icons/fa';

const CareerCounseling = () => {
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
          src="https://i.ibb.co.com/mSvcCZ7/1.webp"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Career Counseling</h1>
          <p className="py-3 font-serif font-semibold">
            <i>Career Guidance</i>
          </p>
          <p className="py-3 font-mono text-2xl font-semibold">
            <i>Mr. John Doe</i>
          </p>
          <p className="py-6">
          Career counseling provides essential guidance for individuals navigating complex career paths or seeking clarity in their professional lives. It helps identify strengths, interests, and goals, offering actionable steps to achieve long-term career success. By understanding personal aspirations and market demands, career counseling ensures an aligned and fulfilling career trajectory.

Mr. John Doe is an expert in career counseling, with years of experience helping individuals transition between jobs, discover new opportunities, and overcome professional challenges. His personalized approach ensures each client receives tailored strategies to meet their unique aspirations.

Mr. Doe excels at providing practical tools for resume building, interview preparation, and workplace adaptation. He empowers clients to address career stagnation and build confidence for achieving milestones. His supportive and insightful sessions create a positive environment for growth.

Whether you're a fresh graduate or a mid-career professional seeking change, Mr. John Doe's guidance can unlock your true potential. His deep understanding of evolving industries and job market trends makes him the perfect mentor for anyone aiming to succeed.

Investing in career counseling with Mr. John Doe is a step towards a brighter and more secure future. His commitment to excellence ensures clients leave sessions motivated and equipped for their next big move.
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

export default CareerCounseling;
