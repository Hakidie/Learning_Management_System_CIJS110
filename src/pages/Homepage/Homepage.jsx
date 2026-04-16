import './Homepage.css';

import useResource from '../../hooks/getResources';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Banner from '../../components/Homepage/Banner/Banner';
import Stats from '../../components/Homepage/Stats/Stats';
import Top from '../../components/Homepage/Top/Top';
import Bottom from '../../components/Homepage/Bottom/Bottom';


function Homepage() {
  const coursesData = useResource("courses");
  const teachersData = useResource("teachers");

  return (
    <div className='homepage-page-container'>
      <Header viewType={'default'} />

      <main className='homepage-content-container'>
        <Banner />
        <Stats />
        <Top typeName={'Courses'} typeData={coursesData} />
        <Top typeName={'Instructors'} typeData={teachersData} />
        <Bottom />
      </main>

      <Footer />
    </div>
  );
}

export default Homepage;