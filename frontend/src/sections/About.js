import { Container, Skeleton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AboutCard from '../components/AboutCard';
import SectionTitle from '../components/styled/SectionTitle';
import SectionSubTitle from '../components/styled/SectionSubTitle';
import ProgressBar from '../components/styled/ProgressBar';
import { ReadMoreButton } from '../components/styled/Buttons';
import { StyledMarkAsUnreadIcon, StyledManageSearchIcon, StyledDevicesIcon } from '../components/styled/Icons';
import StyledSectionContent from '../components/styled/StyledSectionContent';
import { HeroImage as AboutImage } from '../components/styled/HeroImage';
import AboutSectionContainer from '../components/styled/AboutSectionContainer';
import BarText from '../components/styled/BarText';
import ProgressBars from '../components/styled/ProgressBars';
import SectionCards from '../components/styled/SectionCards';
import { AboutTextualContent, TextualContent } from '../components/styled/AboutTextualContent';
import AboutImg from '../assets/About Section Image-min.svg';
import { useFetch } from '../hooks/useFetch';
import { motion } from 'framer-motion';
import { useRef, useContext } from 'react';
import { DataContext } from '../admin/contexts/DataContext';

export const About = ({ lowTopPadding }) => {
  const navigate = useNavigate();
  const { rootURL } = useContext(DataContext);
  const baseURL = `${rootURL}/api/setting`;
  const { data: aboutData, isLoading, error } = useFetch(baseURL);
  const MotionAboutCard = motion(AboutCard);
  const aboutCardRef = useRef();

  const PlaceHolder1 = (
    <>
      <Skeleton variant='text' sx={{ fontSize: '1rem' }} />
      <Skeleton variant='text' width={'75%'} sx={{ fontSize: '1rem' }} />
    </>
  );

  const PlaceHolder2 = (
    <>
      <Skeleton variant='text' sx={{ fontSize: '1rem' }} />
      <Skeleton variant='text' sx={{ fontSize: '1rem' }} />
      <Skeleton variant='text' width={'75%'} sx={{ fontSize: '1rem' }} />
    </>
  );

  return (
    <AboutSectionContainer lowTopPadding={lowTopPadding}>
      <Container maxWidth='lg'>
        <SectionCards>
          <MotionAboutCard
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 * 0 }}
            ref={aboutCardRef}
            cardIcon={<StyledMarkAsUnreadIcon />}
            cardTitle='Digital Marketing'
          />
          <MotionAboutCard
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 * 1 }}
            ref={aboutCardRef}
            cardIcon={<StyledManageSearchIcon />}
            cardTitle='SEO & Backlinks'
          />
          <MotionAboutCard
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 * 2 }}
            ref={aboutCardRef}
            cardIcon={<StyledDevicesIcon />}
            cardTitle='Design & Development'
          />
        </SectionCards>
        <StyledSectionContent>
          <AboutTextualContent>
            <TextualContent>
              <SectionTitle>About US</SectionTitle>
              <SectionSubTitle
                as={motion.p}
                viewport={{ once: true }}
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25 * 0 }}
              >
                {error && PlaceHolder1}
                {isLoading && PlaceHolder1}
                {aboutData && `#1 Digital solution with ${aboutData.data.attributes.YearsExperience} years of experience`}
              </SectionSubTitle>
              <motion.p
                className='text'
                viewport={{ once: true }}
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25 * 1 }}
              >
                {error && PlaceHolder2}
                {isLoading && PlaceHolder2}
                {aboutData && aboutData.data.attributes.AboutCompany}
              </motion.p>
            </TextualContent>
            <ProgressBars
              as={motion.div}
              viewport={{ once: true }}
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25 * 2 }}
            >
              <div>
                <BarText>
                  <p>Digital Marketing</p>
                  <p>85%</p>
                </BarText>
                <ProgressBar bg='var(--darkGray)' variant='determinate' value={85} />
              </div>
              <div>
                <BarText>
                  <p>SEO & Backlinks</p>
                  <p>90%</p>
                </BarText>
                <ProgressBar bg='var(--mainOrange)' variant='determinate' value={90} />
              </div>
              <div>
                <BarText>
                  <p>Design & Development</p>
                  <p>95%</p>
                </BarText>
                <ProgressBar bg='black' variant='determinate' value={95} />
              </div>
            </ProgressBars>
            <ReadMoreButton
              component={motion.button}
              viewport={{ once: true }}
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25 * 2 }}
              onClick={() => navigate('/about')}
            >
              Read More
            </ReadMoreButton>
          </AboutTextualContent>
          <AboutImage
            as={motion.div}
            viewport={{ once: true }}
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25 }}
          >
            <img src={AboutImg} alt='About' />
          </AboutImage>
        </StyledSectionContent>
      </Container>
    </AboutSectionContainer>
  );
};
