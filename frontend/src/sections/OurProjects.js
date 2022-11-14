import { Container, Skeleton } from '@mui/material';
import SectionTitle from '../components/styled/SectionTitle';
import SectionSubTitle from '../components/styled/SectionSubTitle';
import ProjectCard from '../components/ProjectCard';
import { Tabs, Tab } from '../components/styled/Tabs';
import { ServicesSection as OurProjectsSection } from '../components/styled/ServicesSection';
import { ProjectsCardsContainer } from '../components/styled/ProjectsCardsContainer';
import { useState, useRef, useContext } from 'react';
import { useFetch } from '../hooks/useFetch';
import { motion } from 'framer-motion';
import { DataContext } from '../admin/contexts/DataContext';

const OurProjects = ({ lowTopPadding }) => {
  const { rootURL } = useContext(DataContext);
  const baseURL = `${rootURL}/api/projects`;
  const { data: projects, isLoading, error } = useFetch(baseURL);
  const servicesURL = `${rootURL}/api/services`;
  const { data: services } = useFetch(servicesURL);
  const [filteredProjects, setFilteredProjects] = useState(projects?.data);
  const MotionProjectCard = motion(ProjectCard);
  const projectCardRef = useRef();

  const servicesNames = new Set();
  services?.data.forEach((service) => {
    servicesNames.add(service.attributes.Name);
  });

  const PlaceHolder = (
    <>
      <Skeleton variant='rounded' width={345} height={385} sx={{ fontSize: '1rem' }} />{' '}
      <Skeleton variant='rounded' width={345} height={385} sx={{ fontSize: '1rem' }} />{' '}
      <Skeleton variant='rounded' width={345} height={385} sx={{ fontSize: '1rem' }} />
    </>
  );

  const handleClick = (e) => {
    document.querySelectorAll('.tab').forEach((tab) => {
      tab.classList.remove('active');
    });
    e.target.classList.add('active');
    if (e.target.textContent.toLowerCase() === 'all') {
      setFilteredProjects(projects?.data);
      return;
    }
    projects?.data?.map((project) => {
      if (e.target.textContent.toLowerCase() === project.attributes.Service.toLowerCase()) {
        fetch(`${baseURL}?filters[Service][$eqi]=${e.target.textContent}`)
          .then((filteredProjects) => {
            return filteredProjects.json();
          })
          .then((data) => {
            setFilteredProjects(projects.data.filter((project) => project.attributes.Service.toLowerCase() === e.target.textContent.toLowerCase()));
          });
      } else {
        setFilteredProjects([]);
      }
    });
  };

  return (
    <OurProjectsSection lowTopPadding={lowTopPadding}>
      <Container maxWidth='lg'>
        <SectionTitle>our projects</SectionTitle>
        <SectionSubTitle>Recently Completed Projects</SectionSubTitle>
        {projects && (
          <Tabs>
            <Tab className='tab active' onClick={handleClick}>
              All
            </Tab>
            {Array.from(servicesNames)?.map((serviceName) => (
              <Tab key={serviceName} className='tab' onClick={handleClick}>
                {serviceName}
              </Tab>
            ))}
          </Tabs>
        )}
        <ProjectsCardsContainer>
          {error && PlaceHolder}
          {isLoading && PlaceHolder}
          {projects && filteredProjects?.length < projects?.data.length
            ? filteredProjects?.map((project, index) => (
                <MotionProjectCard
                  viewport={{ once: true }}
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 * index }}
                  whileHover={{ scale: 1.05 }}
                  ref={projectCardRef}
                  key={project.id}
                  cardImage={project.attributes.ImgURL}
                  cardTitle={project.attributes.Title?.slice(0, 23)}
                  cardText={project.attributes.DetailedDescription?.slice(0, 60)}
                />
              ))
            : projects?.data?.map((project, index) => (
                <MotionProjectCard
                  viewport={{ once: true }}
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 * index }}
                  whileHover={{ scale: 1.05 }}
                  ref={projectCardRef}
                  key={project.id}
                  cardImage={project.attributes.ImgURL}
                  cardTitle={project.attributes.Title?.slice(0, 23)}
                  cardText={project.attributes.DetailedDescription?.slice(0, 60)}
                />
              ))}
        </ProjectsCardsContainer>
      </Container>
    </OurProjectsSection>
  );
};

export default OurProjects;
