import './Footer.css';
import { Link } from 'react-router-dom';
import logoIcon from '../../assets/Icons/logo.svg';
import contactIcon from '../../assets/Pictures/social_media.svg';


function Footer() {
  return (
    <div className='footer-container'>
      {/* Logo */}
      <div className='footer-logo-container'>
        <div className='footer-logo'>
          <img src={logoIcon} alt='byway' />
          <h2>Byway</h2>
        </div>

        <p>Empowering learners through accessible and engaging online education.<br />Byway is a leading online learning platform dedicated to providing high-quality, flexible, and affordable educational experiences. </p>
      </div>

      {/* Get help */}
      <div className='help-container'>
        <div>
          <h2>Get Help</h2>
        </div>

        <ul>
          <li>
            <Link to="/contact-us" className='footer-link'>
              Contact Us
            </Link>
          </li>

          <li>
            <Link to="/articles" className='footer-link'>
              Latest Articles
            </Link>
          </li>

          <li>
            <Link to="/faq" className='footer-link'>
              FAQ
            </Link>
          </li>
        </ul>
      </div>

      {/* Programs */}
      <div className='programs-container'>
        <div>
          <h2>Programs</h2>
        </div>

        <ul>
          <li>
            <Link to="/art_&_desgin" className='footer-link'>
              Art & Design
            </Link>
          </li>

          <li>
            <Link to="/business" className='footer-link'>
              Business
            </Link>
          </li>

          <li>
            <Link to="/it_&_software" className='footer-link'>
              IT & Software
            </Link>
          </li>

          <li>
            <Link to="/languages" className='footer-link'>
              Languages
            </Link>
          </li>

          <li>
            <Link to="/programming" className='footer-link'>
              Programming
            </Link>
          </li>
        </ul>
      </div>

      {/* Contact */}
      <div className='contact-container'>
        <div>
          <h2>Contact Us</h2>
        </div>

        <p>Address: 123 Main Street, Anytown, CA 12345</p>
        <p>Tel: +(123) 456-7890</p>
        <p>Mail: bywayedu@webkul.in</p>
        <Link to="/contact" className='contact-link'>
          <img src={contactIcon} />
        </Link>
      </div>
    </div>
  );
}

export default Footer;