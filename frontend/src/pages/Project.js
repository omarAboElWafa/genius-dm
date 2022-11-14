import OurProjects from '../sections/OurProjects';
import ScrollToTopOnMount from '../components/ScrollToTopOnMount';

const Project = () => {
  return (
    <>
      <ScrollToTopOnMount />
      <OurProjects lowTopPadding={true} />
    </>
  );
};

export default Project;
