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
            <i>Dr.  Nathan Carter </i>
          </p>
          <p className="py-6">
          Unlock Your Potential with Expert Skill Counseling
In today’s fast-paced world, staying ahead means staying skilled. Whether you're striving for career growth or transitioning into a new field, skill development is the key to success.

Meet Dr. Nathan Carter – Your Guide to Professional Excellence
Dr. Nathan Carter, a leading expert in skill development and career transformation, helps individuals identify, refine, and amplify their abilities to thrive in competitive job markets. His unique approach bridges the gap between personal strengths and industry demands, ensuring a future-proof professional profile.

Why Choose Dr. Carter’s Coaching?
✅ Engaging & Interactive Sessions  Experience hands-on learning tailored to real-world applications.
✅ Personalized Growth Plans  Identify skill gaps and receive customized strategies to elevate your career.
✅ Tech & Innovation Mastery  Stay ahead by learning cutting-edge tools and industry trends.
✅ Soft Skills Enhancement Boost leadership, communication, and problem-solving abilities.
✅ Discover Hidden Talents Uncover strengths you never knew you had!

Your Future Starts Now!
With Dr. Nathan Carter’s expert guidance, you’ll gain the confidence and skills needed to excel in any industry. His commitment to personalized coaching and continuous learning makes him the perfect mentor for ambitious professionals. </p>
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
