import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import useRegisterUser from '../../hooks/useRegisterUser';
import './Register.css';
import Header from '../../components/Header/Header';
import registerPicture from '../../assets/Pictures/register.svg';
import arrowIcon from '../../assets/Icons/arrow-narrow-right.svg';

function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const { registerUser } = useRegisterUser();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Validation
      if (!formData.firstName || !formData.lastName || !formData.email || !formData.password) {
        setError('All fields are required');
        setLoading(false);
        return;
      }

      if (formData.password !== formData.confirmPassword) {
        setError('Passwords do not match');
        setLoading(false);
        return;
      }

      if (formData.password.length < 6) {
        setError('Password must be at least 6 characters');
        setLoading(false);
        return;
      }

      // Register user via API
      const newUser = await registerUser({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
      });

      // Login the new user
      login(newUser);
      navigate('/');
    } catch (err) {
      setError(err.message || 'Registration failed. Please try again.');
      console.error('Register error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='register-page'>
      <Header />

      <main className='register-container'>
        <div className='register-picture'>
          <img src={registerPicture} alt='register picture' />
        </div>

        <div className='register-frame'>
          <div className='register-box'>
            <h1>Create Your Account</h1>

            <form className='register-form' onSubmit={handleRegister}>

              <div className='form-group'>
                <label htmlFor='firstName'>Full Name</label>

                <div className='form-row'>
                  <input
                    type='text'
                    id='firstName'
                    name='firstName'
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder='First name'
                    required
                  />

                  <input
                    type='text'
                    id='lastName'
                    name='lastName'
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder='Last name'
                    required
                  />
                </div>

              </div>

              <div className='form-group'>
                <label htmlFor='email'>Email</label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  placeholder='Enter your email'
                  required
                />
              </div>

              <div className='form-group'>
                <label htmlFor='password'>Password</label>

                <input
                  type='password'
                  id='password'
                  name='password'
                  value={formData.password}
                  onChange={handleChange}
                  placeholder='At least 6 characters'
                  required
                />
              </div>

              <div className='form-group'>
                <label htmlFor='confirmPassword'>Confirm Password</label>
                <input
                  type='password'
                  id='confirmPassword'
                  name='confirmPassword'
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder='Confirm password'
                  required
                />
              </div>

              {/* <button type='submit' disabled={loading}>
                {loading ? 'Creating Account...' : 'Register'}
              </button> */}

              <button className='create-account-button' type='submit'>
                <p>Create Account</p>
                <img src={arrowIcon} alt='arrow icon' />
              </button>
            </form>

            {error && <div className='error-message'>{error}</div>}

          </div>
        </div>
      </main>
    </div>
  );
}

export default Register;
