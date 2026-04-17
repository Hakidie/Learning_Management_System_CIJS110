import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import useGetUsers from '../../hooks/getUsers';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const allUsers = useGetUsers();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Find user by email
      const foundUser = allUsers.find(
        u => u.email?.toLowerCase() === email.toLowerCase()
      );

      if (!foundUser) {
        setError('Email not found');
        setLoading(false);
        return;
      }

      // For mock server - just check email exists (no real password validation)
      // In production, you'd verify password with backend
      if (!email || !password) {
        setError('Please enter both email and password');
        setLoading(false);
        return;
      }

      // Login successful
      login(foundUser);
      navigate('/');
    } catch (err) {
      setError('Login failed. Please try again.');
      console.error('Login error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='login-container'>
      <div className='login-box'>
        <h1>Login</h1>
        
        {error && <div className='error-message'>{error}</div>}

        <form onSubmit={handleLogin}>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter your email'
              required
            />
          </div>

          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Enter your password'
              required
            />
          </div>

          <button type='submit' disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <p className='register-link'>
          Don't have an account? <Link to='/register'>Register here</Link>
        </p>

        {/* For testing - list available users */}
        <div className='test-users'>
          <p>Test Users (click to auto-fill):</p>
          {allUsers.slice(0, 3).map(user => (
            <button
              key={user.id}
              type='button'
              className='test-user-btn'
              onClick={() => {
                setEmail(user.email || `user${user.id}@test.com`);
                setPassword('password');
              }}
            >
              User {user.id}: {user.firstName}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Login;
