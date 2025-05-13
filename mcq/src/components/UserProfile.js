import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import '../styles/UserProfile.css';

function UserProfile({ onQuizComplete }) {
  const { user } = useAuth();
  const [profile, setProfile] = useState(null);
  const [displayName, setDisplayName] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (user) {
      const fetchProfile = async () => {
        const docRef = doc(db, 'users', user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setProfile(docSnap.data());
          setDisplayName(docSnap.data().displayName);
        }
      };
      fetchProfile();
    }
  }, [user]);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    try {
      await updateDoc(doc(db, 'users', user.uid), { displayName });
      setProfile({ ...profile, displayName });
      setError('');
    } catch (err) {
      setError('Failed to update profile');
    }
  };

  if (!user) return <p>Please sign in to view your profile.</p>;

  return (
    <div className="user-profile">
      <h3>User Profile</h3>
      {profile && (
        <>
          <p>Email: {profile.email}</p>
          <form onSubmit={handleUpdateProfile}>
            <label>
              Display Name:
              <input
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
              />
            </label>
            <button type="submit" className="btn btn-primary">Update</button>
          </form>
          {error && <p className="error">{error}</p>}
        </>
      )}
    </div>
  );
}

export default UserProfile;