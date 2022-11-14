import Services from '../sections/Services';
import Newsletter from '../sections/Newsletter';
import { Testimonial } from '../sections/Testimonial';
import ScrollToTopOnMount from '../components/ScrollToTopOnMount';

const Service = () => {
  return (
    <div>
      <ScrollToTopOnMount />
      <Services lowTopPadding={true} />
      <Newsletter />
      <Testimonial />
    </div>
  );
};

export default Service;
