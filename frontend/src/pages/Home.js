import Hero from '../sections/Hero';
import { About } from '../sections/About';
import Counter from '../sections/Counter';
import Services from '../sections/Services';
import Newsletter from '../sections/Newsletter';
import OurProjects from '../sections/OurProjects';
import { Testimonial } from '../sections/Testimonial';
import { OurTeam } from '../sections/OurTeam';
import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import ScrollToTopOnMount from '../components/ScrollToTopOnMount';
import Cookies from 'universal-cookie';

const Home = () => {
  const navigate = useNavigate();
  const { admin } = useContext(AuthContext);
  const cookies = new Cookies();

  useEffect(() => {
    if (!admin && !cookies.get('Admin')) {
      window.onpopstate = () => {
        navigate('/login');
      };
    }
  });

  return (
    <div>
      <ScrollToTopOnMount />
      <Hero />
      <About />
      <Counter />
      <Services />
      <Newsletter />
      <OurProjects />
      <Testimonial paddingTop='0' />
      <OurTeam paddingTop='0' />
    </div>
  );
};

export default Home;
