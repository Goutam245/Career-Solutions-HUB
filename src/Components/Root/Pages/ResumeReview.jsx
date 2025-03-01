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
          A professional resume is more than just a document; it is a gateway to your career aspirations. Resume review services refine your CV to effectively showcase your skills, experience, and achievements in alignment with industry standards.

Ms. Emily Clark is a seasoned professional specializing in crafting impactful resumes that leave lasting impressions on hiring managers. With a keen eye for detail and a deep understanding of recruitment processes, she helps clients stand out in competitive job markets.

Ms. Clark's resume review services focus on clarity, structure, and relevance. She highlights strengths, addresses gaps, and ensures the document reflects the client's unique value proposition. Whether you're applying for your first job or aiming for a senior role, she provides targeted feedback to enhance your CV.

Her expertise extends to optimizing resumes for Applicant Tracking Systems (ATS), increasing the chances of passing initial screenings. By leveraging her guidance, clients have successfully secured interviews and advanced their careers.

Ms. Emily Clark’s dedication to empowering clients through polished resumes has made her a trusted advisor in CV management. Partnering with her is the first step toward achieving your professional dreams.
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
