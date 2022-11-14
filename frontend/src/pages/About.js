import { About as AboutSection } from '../sections/About';
import Counter from '../sections/Counter';
import { OurTeam } from '../sections/OurTeam';
import ScrollToTopOnMount from '../components/ScrollToTopOnMount';

const About = () => {
  return (
    <div>
      <ScrollToTopOnMount />
      <AboutSection lowTopPadding={true} />
      <Counter />
      <OurTeam />
    </div>
  );
};

export default About;
