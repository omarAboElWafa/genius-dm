import { Container, Skeleton } from '@mui/material';
import SectionTitle from '../components/styled/SectionTitle';
import SectionSubTitle from '../components/styled/SectionSubTitle';
import TestimonialCard from '../components/TestimonialCard';
import { ServicesSection as TestimonialSection } from '../components/styled/ServicesSection';
import TestimonialsContainer from '../components/styled/TestimonialsContainer';
import useViewport from '../hooks/useViewport';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { useFetch } from '../hooks/useFetch';
import { useContext } from 'react';
import { DataContext } from '../admin/contexts/DataContext';

export const Testimonial = ({ paddingTop }) => {
  useViewport();
  let mql = window.matchMedia('(min-width: 992px)');
  const { rootURL } = useContext(DataContext);
  const baseURL = `${rootURL}/api/testimonials`;
  const { data: testimonials, isLoading, error } = useFetch(baseURL);

  const PlaceHolder = (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Skeleton variant='rounded' width={450} height={200} sx={{ fontSize: '1rem' }} />{' '}
      <Skeleton variant='rounded' width={450} height={200} sx={{ fontSize: '1rem' }} />{' '}
    </div>
  );

  return (
    <TestimonialSection style={{ paddingTop: paddingTop }}>
      <Container maxWidth='lg'>
        <SectionTitle>TESTIMONIAL</SectionTitle>
        <SectionSubTitle>What Say Our Clients!</SectionSubTitle>
        <TestimonialsContainer>
          <Swiper modules={[Navigation]} navigation grabCursor={true} spaceBetween={50} slidesPerView={mql.matches ? 2 : 1}>
            {error && PlaceHolder}
            {isLoading && PlaceHolder}
            {testimonials &&
              testimonials.data.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <TestimonialCard
                    cardText={testimonial.attributes.Content}
                    clientImage={testimonial.attributes.ImgURL}
                    clientName={testimonial.attributes.ClientName}
                    profession={testimonial.attributes.Profession}
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        </TestimonialsContainer>
      </Container>
    </TestimonialSection>
  );
};
