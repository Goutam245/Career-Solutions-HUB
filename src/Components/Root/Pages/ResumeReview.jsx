import React, { useState } from 'react';
import { FaHome } from 'react-icons/fa';

const ResumeReview = () => {
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
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="https://i.ibb.co.com/19zNhJF/pexels-andersonguerra-1197132.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Resume Review</h1>
          <p className="py-3 font-serif font-semibold">
            <i>CV Management</i>
          </p>
          <p className="py-3 font-mono text-2xl font-semibold">
            <i>Ms. Emily Clark</i>
          </p>
          <p className="py-6">
          A well-crafted resume is your key to career success. Professional resume review services ensure your CV highlights your skills, experience, and achievements in line with industry standards.

Mr. David Reynolds is an expert in resume optimization, helping job seekers create compelling, ATS-friendly resumes that stand out. With deep recruitment insights, he refines content for clarity, structure, and impact—whether for entry-level positions or senior roles.

His tailored approach ensures your strengths shine, addressing gaps and enhancing relevance. Many clients have secured interviews and advanced their careers with his expert guidance.

Partner with Mr. Reynolds to elevate your resume and take the next step toward your professional goals.
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

export default ResumeReview;
