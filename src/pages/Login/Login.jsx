import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import useGetUsers from '../../hooks/getUsers';
import './Login.css';
import Header from '../../components/Header/Header';
import loginPicture from '../../assets/Pictures/login.svg';
import arrowIcon from '../../assets/Icons/arrow-narrow-right.svg';

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
    <div className='login-page'>
      <Header />

      <main className='login-container'>
        <div className='login-frame'>
          <div className='login-box'>
            <h1>Sign in to your account</h1>

            <form className='login-form' onSubmit={handleLogin}>
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

              <button className='sign-in-button' type='submit'>
                <p>Sign in</p>
                <img src={arrowIcon} alt='arrow icon' />
              </button>

              {error && <div className='error-message'>{error}</div>}
            </form>
          </div>
          
        </div>

        <div className='login-picture'>
          <img src={loginPicture} alt='login picture' />
        </div>
      </main>
    </div>
  );
}

export default Login;
