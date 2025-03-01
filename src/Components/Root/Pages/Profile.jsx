import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { Helmet } from 'react-helmet';

const Profile = () => {
  const { user, setUser } = useContext(AuthContext); // Get the authenticated user and setUser function from AuthContext
  const [name, setName] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // Initialize form fields with the user's current information
    if (user) {
      setName(user.displayName || '');
      setPhotoURL(user.photoURL || '');
    }
  }, [user]);

  const handleSaveChanges = () => {
    if (!user) {
      setError('No user is logged in.');
      return;
    }

    // Update the user's profile in Firebase
    updateProfile(user, {
      displayName: name,
      photoURL: photoURL,
    })
      .then(() => {
        // Update the user state in AuthContext
        setUser({ ...user, displayName: name, photoURL: photoURL });
        setMessage('Profile updated successfully!');
        setError('');
      })
      .catch((err) => {
        console.error('Error updating profile:', err);
        setMessage('');
        setError('Failed to update profile. Please try again.');
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Profile</title>
      </Helmet>

      <div className="hero-content flex-col lg:flex-row gap-6">
        {/* User Avatar */}
        <div className="avatar">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={photoURL || 'https://via.placeholder.com/150'} alt="User Avatar" />
          </div>
        </div>

        {/* User Information & Edit Form */}
        <div className="flex flex-col w-full max-w-lg gap-4">
          <h1 className="text-4xl font-bold">User Profile</h1>

          {/* Email Display */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              value={user?.email || ''}
              className="input input-bordered bg-gray-100"
              disabled
            />
          </div>

          {/* Name Input Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input input-bordered"
              placeholder="Enter your name"
            />
          </div>

          {/* Photo URL Input Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              className="input input-bordered"
              placeholder="Enter photo URL"
            />
          </div>

          {/* Save Changes Button */}
          <button onClick={handleSaveChanges} className="btn btn-primary mt-4">
            Save Changes
          </button>

          {/* Success/Error Messages */}
          {message && <p className="text-green-600 font-medium">{message}</p>}
          {error && <p className="text-red-600 font-medium">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Profile;
