import './Categories.css';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
// import Sidebar from '../../components/Sidebar/Sidebar';

function Categories() {
  return (
    <div className='categories-page-container'>
      <Header />

      <div className='categories-title'>
        <h2 >All Courses</h2>
      </div>
      
      <div className='categories-content-container'>
        {/* <Sidebar /> */}

        <main className='categories-content'>

        </main>
      </div>

      <Footer />
    </div>
  );
}

export default Categories;