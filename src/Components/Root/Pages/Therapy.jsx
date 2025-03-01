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
            <h1 className="text-5xl font-bold">Personal Therapy</h1>
            <p className="py-3 font-serif font-semibold"> <i>Mental Health</i></p>
            <p className="py-3 font-mono text-2xl font-semibold"> <i>Dr. Sarah Johnson</i></p>
            <p className="py-6">
            Mental health plays a crucial role in shaping one’s career success and overall well-being. A healthy mind fosters creativity, focus, and resilience, which are essential for overcoming professional challenges and achieving goals. Neglecting mental health can lead to burnout, reduced productivity, and career stagnation. Prioritizing mental health helps individuals make informed decisions, maintain work-life balance, and unlock their full potential. In today’s fast-paced professional world, addressing mental health is not just important—it is fundamental for a thriving and sustainable career.

Why Dr. Sarah Johnson is Perfect for Therapy and Career Counseling
Dr. Sarah Johnson combines her expertise in clinical psychology with years of experience in career counseling, making her an ideal therapist for those seeking clarity and guidance in their professional lives. Her compassionate approach helps clients navigate stress, build confidence, and identify their strengths to excel in their chosen fields. Dr. Johnson’s personalized strategies and evidence-based techniques ensure tailored support for each individual. Her deep understanding of workplace dynamics and mental health challenges equips her to address complex career dilemmas effectively. Choosing Dr. Johnson means investing in both personal growth and professional success.
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