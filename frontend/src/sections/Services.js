import { Container, Skeleton } from '@mui/material';
import SectionTitle from '../components/styled/SectionTitle';
import SectionSubTitle from '../components/styled/SectionSubTitle';
import ServiceCard from '../components/ServiceCard';
import { ServicesSection } from '../components/styled/ServicesSection';
import { ServicesCardsContainer } from '../components/styled/ServicesCardsContainer';
/* import {
  StyledManageSearchIcon,
  StyledDevicesIcon,
  StyledSmartphoneIcon,
  StyledMarkAsUnreadIcon,
  StyledThumbUpIcon,
  StyledAdbIcon,
} from '../components/styled/Icons'; */
import { useFetch } from '../hooks/useFetch';
import { motion } from 'framer-motion';
import { useRef, useContext } from 'react';
import { DataContext } from '../admin/contexts/DataContext';

const Services = ({ lowTopPadding }) => {
  const { rootURL } = useContext(DataContext);
  const baseURL = `${rootURL}/api/services`;
  const { data: services, isLoading, error } = useFetch(baseURL);
  const MotionServiceCard = motion(ServiceCard);
  const serviceCardRef = useRef();

  const PlaceHolder = (
    <>
      <Skeleton variant='rounded' width={300} height={300} sx={{ fontSize: '1rem' }} />{' '}
      <Skeleton variant='rounded' width={300} height={300} sx={{ fontSize: '1rem' }} />{' '}
      <Skeleton variant='rounded' width={300} height={300} sx={{ fontSize: '1rem' }} />
    </>
  );

  return (
    <ServicesSection lowTopPadding={lowTopPadding}>
      <Container maxWidth='lg'>
        <SectionTitle>OUR SERVICES</SectionTitle>
        <SectionSubTitle>What Solutions We Provide</SectionSubTitle>
        <ServicesCardsContainer>
          {error && PlaceHolder}
          {isLoading && PlaceHolder}
          {services &&
            services.data.map((service, index) => (
              <MotionServiceCard
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 * index }}
                ref={serviceCardRef}
                key={service.id}
                cardIcon={<i className={'CardIcon fa-solid fa-' + service.attributes.IconName}></i>}
                cardTitle={service.attributes.Name}
                cardText={service.attributes.Description.slice(0, 250) + '...'}
              />
            ))}
        </ServicesCardsContainer>
      </Container>
    </ServicesSection>
  );
};

export default Services;
