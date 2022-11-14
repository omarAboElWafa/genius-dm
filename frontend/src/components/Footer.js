import { Container, IconButton, Skeleton } from '@mui/material';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';
import StyledFooter from './styled/StyledFooter';
import SectionTitle from './styled/SectionTitle';
import NewsletterForm from './NewsletterForm';
import GalleryImage1 from '../assets/Card Image 1-min.svg';
import GalleryImage2 from '../assets/Card Image 2-min.svg';
import GalleryImage3 from '../assets/Card Image 3-min.svg';
import GalleryImage4 from '../assets/Card Image 4-min.svg';
import GalleryImage5 from '../assets/Card Image 5-min.svg';
import GalleryImage6 from '../assets/Card Image 6-min.svg';
import Waves from '../assets/waves-min.svg';
import { useFetch } from '../hooks/useFetch';
import { useContext } from 'react';
import { DataContext } from '../admin/contexts/DataContext';

const Footer = () => {
  const { rootURL } = useContext(DataContext);
  const baseURL = `${rootURL}/api/setting-contact`;
  const baseURL2 = `${rootURL}/api/social-setting`;
  const { data: contactData, isLoading, error } = useFetch(baseURL);
  const { data: socialData } = useFetch(baseURL2);

  const PlaceHolder = <Skeleton variant='text' height={30} sx={{ fontSize: '1rem', background: 'darkGray' }} />;

  return (
    <StyledFooter className='Footer'>
      <Container maxWidth='lg'>
        <div className='footerSections'>
          <div className='address'>
            <SectionTitle sx={{ fontSize: '2.5rem' }}>Address</SectionTitle>
            <div className='addressItem'>
              <FmdGoodIcon sx={{ fontSize: '2.5rem' }} />
              <p style={{ width: isLoading || error ? '75%' : '' }}>
                {error && PlaceHolder}
                {isLoading && PlaceHolder}
                {contactData && contactData.data.attributes.Address}
              </p>
            </div>
            <div className='addressItem'>
              <LocalPhoneIcon sx={{ fontSize: '2.5rem' }} />
              <p style={{ width: isLoading || error ? '75%' : '' }}>
                {error && PlaceHolder}
                {isLoading && PlaceHolder}
                {contactData && contactData.data.attributes.PhoneNumber}
              </p>
            </div>
            <div className='addressItem'>
              <LocalPhoneIcon sx={{ fontSize: '2.5rem' }} />
              <p style={{ width: isLoading || error ? '75%' : '' }}>
                {error && PlaceHolder}
                {isLoading && PlaceHolder}
                {contactData && contactData.data.attributes.PhoneNumber2}
              </p>
            </div>
            <div className='addressItem'>
              <WhatsAppIcon sx={{ fontSize: '2.5rem' }} />
              <p style={{ width: isLoading || error ? '75%' : '' }}>
                {error && PlaceHolder}
                {isLoading && PlaceHolder}
                {contactData && contactData.data.attributes.WhatsApp}
              </p>
            </div>
            <div className='addressItem'>
              <EmailIcon sx={{ fontSize: '2.5rem' }} />
              <p style={{ width: isLoading || error ? '75%' : '' }}>
                {error && PlaceHolder}
                {isLoading && PlaceHolder}
                {contactData && contactData.data.attributes.Email}
              </p>
            </div>
            <div className='socialIcons'>
              {socialData && (
                <IconButton className='socialIconButton'>
                  <a href={socialData.data.attributes.FacebookURL} target='_blank'>
                    <svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='16' height='28' viewBox='0 0 16 28'>
                      <title>facebook</title>
                      <path d='M14.984 0.187v4.125h-2.453c-1.922 0-2.281 0.922-2.281 2.25v2.953h4.578l-0.609 4.625h-3.969v11.859h-4.781v-11.859h-3.984v-4.625h3.984v-3.406c0-3.953 2.422-6.109 5.953-6.109 1.687 0 3.141 0.125 3.563 0.187z' />
                    </svg>
                  </a>
                </IconButton>
              )}
              {socialData && (
                <IconButton className='socialIconButton'>
                  <a href={socialData.data.attributes.TwitterURL} target='_blank'>
                    <svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='26' height='28' viewBox='0 0 26 28'>
                      <title>twitter</title>
                      <path d='M25.312 6.375c-0.688 1-1.547 1.891-2.531 2.609 0.016 0.219 0.016 0.438 0.016 0.656 0 6.672-5.078 14.359-14.359 14.359-2.859 0-5.516-0.828-7.75-2.266 0.406 0.047 0.797 0.063 1.219 0.063 2.359 0 4.531-0.797 6.266-2.156-2.219-0.047-4.078-1.5-4.719-3.5 0.313 0.047 0.625 0.078 0.953 0.078 0.453 0 0.906-0.063 1.328-0.172-2.312-0.469-4.047-2.5-4.047-4.953v-0.063c0.672 0.375 1.453 0.609 2.281 0.641-1.359-0.906-2.25-2.453-2.25-4.203 0-0.938 0.25-1.797 0.688-2.547 2.484 3.062 6.219 5.063 10.406 5.281-0.078-0.375-0.125-0.766-0.125-1.156 0-2.781 2.25-5.047 5.047-5.047 1.453 0 2.766 0.609 3.687 1.594 1.141-0.219 2.234-0.641 3.203-1.219-0.375 1.172-1.172 2.156-2.219 2.781 1.016-0.109 2-0.391 2.906-0.781z' />
                    </svg>
                  </a>
                </IconButton>
              )}
              {socialData && (
                <IconButton className='socialIconButton'>
                  <a href={socialData.data.attributes.InstagramURL} target='_blank'>
                    <svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='24' height='28' viewBox='0 0 24 28'>
                      <title>instagram</title>
                      <path d='M16 14c0-2.203-1.797-4-4-4s-4 1.797-4 4 1.797 4 4 4 4-1.797 4-4zM18.156 14c0 3.406-2.75 6.156-6.156 6.156s-6.156-2.75-6.156-6.156 2.75-6.156 6.156-6.156 6.156 2.75 6.156 6.156zM19.844 7.594c0 0.797-0.641 1.437-1.437 1.437s-1.437-0.641-1.437-1.437 0.641-1.437 1.437-1.437 1.437 0.641 1.437 1.437zM12 4.156c-1.75 0-5.5-0.141-7.078 0.484-0.547 0.219-0.953 0.484-1.375 0.906s-0.688 0.828-0.906 1.375c-0.625 1.578-0.484 5.328-0.484 7.078s-0.141 5.5 0.484 7.078c0.219 0.547 0.484 0.953 0.906 1.375s0.828 0.688 1.375 0.906c1.578 0.625 5.328 0.484 7.078 0.484s5.5 0.141 7.078-0.484c0.547-0.219 0.953-0.484 1.375-0.906s0.688-0.828 0.906-1.375c0.625-1.578 0.484-5.328 0.484-7.078s0.141-5.5-0.484-7.078c-0.219-0.547-0.484-0.953-0.906-1.375s-0.828-0.688-1.375-0.906c-1.578-0.625-5.328-0.484-7.078-0.484zM24 14c0 1.656 0.016 3.297-0.078 4.953-0.094 1.922-0.531 3.625-1.937 5.031s-3.109 1.844-5.031 1.937c-1.656 0.094-3.297 0.078-4.953 0.078s-3.297 0.016-4.953-0.078c-1.922-0.094-3.625-0.531-5.031-1.937s-1.844-3.109-1.937-5.031c-0.094-1.656-0.078-3.297-0.078-4.953s-0.016-3.297 0.078-4.953c0.094-1.922 0.531-3.625 1.937-5.031s3.109-1.844 5.031-1.937c1.656-0.094 3.297-0.078 4.953-0.078s3.297-0.016 4.953 0.078c1.922 0.094 3.625 0.531 5.031 1.937s1.844 3.109 1.937 5.031c0.094 1.656 0.078 3.297 0.078 4.953z' />
                    </svg>
                  </a>
                </IconButton>
              )}
              {socialData && (
                <IconButton className='socialIconButton'>
                  <a href={socialData.data.attributes.LinkedinURL} target='_blank'>
                    <svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='24' height='28' viewBox='0 0 24 28'>
                      <title>linkedin</title>
                      <path d='M5.453 9.766v15.484h-5.156v-15.484h5.156zM5.781 4.984c0.016 1.484-1.109 2.672-2.906 2.672v0h-0.031c-1.734 0-2.844-1.188-2.844-2.672 0-1.516 1.156-2.672 2.906-2.672 1.766 0 2.859 1.156 2.875 2.672zM24 16.375v8.875h-5.141v-8.281c0-2.078-0.75-3.5-2.609-3.5-1.422 0-2.266 0.953-2.641 1.875-0.125 0.344-0.172 0.797-0.172 1.266v8.641h-5.141c0.063-14.031 0-15.484 0-15.484h5.141v2.25h-0.031c0.672-1.062 1.891-2.609 4.672-2.609 3.391 0 5.922 2.219 5.922 6.969z' />
                    </svg>
                  </a>
                </IconButton>
              )}
            </div>
          </div>
          <div className='quickLinks'>
            <SectionTitle sx={{ fontSize: '2.5rem' }}>Quick Links</SectionTitle>
            <div className='links'>
              <Link to='/about'>
                <ArrowForwardIosIcon sx={{ marginRight: '1.5rem' }} /> <span>About Us</span>
              </Link>
              <Link to='/contact'>
                <ArrowForwardIosIcon sx={{ marginRight: '1.5rem' }} /> <span>Contact Us</span>
              </Link>
              <Link to='/'>
                <ArrowForwardIosIcon sx={{ marginRight: '1.5rem' }} /> <span>Privacy Policy</span>
              </Link>
              <Link to='/'>
                <ArrowForwardIosIcon sx={{ marginRight: '1.5rem' }} /> <span>Terms & Conditions</span>
              </Link>
              <Link to='/'>
                <ArrowForwardIosIcon sx={{ marginRight: '1.5rem' }} /> <span>Career</span>
              </Link>
            </div>
          </div>
          <div className='gallery'>
            <SectionTitle sx={{ fontSize: '2.5rem' }}>Gallery</SectionTitle>
            <div className='galleryImages'>
              <img src={GalleryImage1} alt='Gallery Img' />
              <img src={GalleryImage2} alt='Gallery Img' />
              <img src={GalleryImage3} alt='Gallery Img' />
              <img src={GalleryImage4} alt='Gallery Img' />
              <img src={GalleryImage5} alt='Gallery Img' />
              <img src={GalleryImage6} alt='Gallery Img' />
            </div>
          </div>
          <div className='newsletter'>
            <SectionTitle sx={{ fontSize: '2.5rem' }}>Newsletter</SectionTitle>
            <p className='newsletterText'>Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulpu</p>
            <NewsletterForm />
          </div>
        </div>
        <div className='footerSections2'>
          <div className='copyrights'>
            <p className='copyright1'>
              © <Link to='/'>Genius Digital Marketing</Link>, All Rights Reserved. Designed By <Link to='/'>Shaher Ashraf</Link>
            </p>
            <p className='copyright2'>
              Distributed By <Link to='/'>GKC</Link>
            </p>
          </div>
          <div className='copyrightLinks'>
            <Link to='/'>Home</Link>
            <Link to='/'>Cookies</Link>
            <Link to='/'>Help</Link>
            <Link to='/'>FAQs</Link>
          </div>
        </div>
      </Container>
      <img className='waves' src={Waves} alt='footer background' />
    </StyledFooter>
  );
};

export default Footer;
