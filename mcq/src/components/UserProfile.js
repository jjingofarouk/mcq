// src/components/UserProfile.js
import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { doc, getDoc, updateDoc, collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import '../styles/UserProfile.css';

function UserProfile({ onQuizComplete }) {
  const { user } = useAuth();
  const [profile, setProfile] = useState(null);
  const [displayName, setDisplayName] = useState('');
  const [settings, setSettings] = useState({ theme: 'light', difficulty: 'medium' });
  const [progress, setProgress] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    if (user) {
      const fetchProfile = async () => {
        const docRef = doc(db, 'users', user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setProfile(docSnap.data());
          setDisplayName(docSnap.data().displayName);
          if (docSnap.data().settings) {
            setSettings(docSnap.data().settings);
          }
        }
      };
      const fetchProgress = async () => {
        const querySnapshot = await getDocs(collection(db, 'users', user.uid, 'progress'));
        const progressData = querySnapshot.docs.map(doc => doc.data());
        setProgress(progressData);
      };
      fetchProfile();
      fetchProgress();
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

  const handleUpdateSettings = async (e) => {
    e.preventDefault();
    try {
      await updateDoc(doc(db, 'users', user.uid), { settings });
      setError('');
    } catch (err) {
      setError('Failed to update settings');
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
          <h4>Settings</h4>
          <form onSubmit={handleUpdateSettings}>
            <label>
              Theme:
              <select
                value={settings.theme}
                onChange={(e) => setSettings({ ...settings, theme: e.target.value })}
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
              </select>
            </label>
            <label>
              Quiz Difficulty:
              <select
                value={settings.difficulty}
                onChange={(e) => setSettings({ ...settings, difficulty: e.target.value })}
              >
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </label>
            <button type="submit" className="btn btn-primary">Save Settings</button>
          </form>
          {error && <p className="error">{error}</p>}
          <h4>Quiz Progress</h4>
          {progress.length > 0 ? (
            <ul>
              {progress.map((item) => (
                <li key={item.quizId}>
                  Score: {item.score}/{item.total} ({item.percentage}%) - {item.timestamp}
                </li>
              ))}
            </ul>
          ) : (
            <p>No quiz progress yet.</p>
          )}
        </>
      )}
    </div>
  );
}

export default UserProfile;