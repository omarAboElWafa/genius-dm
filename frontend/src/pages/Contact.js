import { Container } from '@mui/material';
import { ServicesSection as ContactSection } from '../components/styled/ServicesSection';
import SectionTitle from '../components/styled/SectionTitle';
import SectionSubTitle from '../components/styled/SectionSubTitle';
import { ReadMoreButton as FormSubmitButton } from '../components/styled/Buttons';
import Form from '../components/styled/Form';
import ScrollToTopOnMount from '../components/ScrollToTopOnMount';
import { motion } from 'framer-motion';

const Contact = () => {
  const handleFocus = (e) => {
    e.target.style.outline = '2px solid var(--mainOrange)';
  };

  const handleBlur = (e) => {
    e.target.style.outline = '1px solid var(--dividerClr)';
  };

  return (
    <>
      <ScrollToTopOnMount />
      <ContactSection lowTopPadding>
        <Container maxWidth='lg'>
          <SectionTitle>CONTACT US</SectionTitle>
          <SectionSubTitle
            as={motion.p}
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 * 0 }}
          >
            Contact For Any Query
          </SectionSubTitle>
          <Form>
            <motion.input
              viewport={{ once: true }}
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25 * 1 }}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className='name'
              type='text'
              placeholder='Your Name'
              required
            />
            <motion.input
              viewport={{ once: true }}
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25 * 2 }}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className='email'
              type='email'
              placeholder='Your Email'
              required
            />
            <motion.input
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 200 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 * 3 }}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className='subject'
              type='text'
              placeholder='Subject'
              required
            />
            <motion.textarea
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 200 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 * 4 }}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className='message'
              placeholder='Message'
              required
              style={{ height: '150px' }}
            ></motion.textarea>
            <FormSubmitButton
              component={motion.button}
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 200 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 * 5 }}
              type='submit'
            >
              Send Message
            </FormSubmitButton>
          </Form>
        </Container>
      </ContactSection>
    </>
  );
};

export default Contact;
