import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FaHome } from 'react-icons/fa';

const SkillCounseling = () => {
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
          src="https://i.ibb.co.com/h8ktjjy/pexels-stefanstefancik-91227.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Skill Counseling</h1>
          <p className="py-3 font-serif font-semibold">
            <i>Skill Development</i>
          </p>
          <p className="py-3 font-mono text-2xl font-semibold">
            <i>Dr. Alex Green</i>
          </p>
          <p className="py-6">
          In today’s competitive world, skill development is key to staying relevant and achieving professional growth. Skill counseling helps individuals identify, nurture, and enhance their abilities to thrive in dynamic job markets.

Dr. Alex Green is a leading expert in skill counseling, with a passion for helping clients unlock their full potential. His approach focuses on understanding personal strengths and aligning them with market demands to build a strong professional profile.

Dr. Green’s sessions are highly interactive, offering practical exercises and actionable insights. He assists clients in mastering new technologies, improving soft skills, and exploring untapped talents. His guidance fosters continuous learning and adaptability.

By working with Dr. Green, clients gain clarity on skill gaps and develop strategies to overcome them. His personalized plans ensure that each individual achieves tangible improvements in their career prospects.

Dr. Alex Green’s deep knowledge and commitment to his clients’ success make him an exceptional mentor. Engaging in skill counseling with him is an investment in your future, equipping you to excel in any field.
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

export default SkillCounseling;
