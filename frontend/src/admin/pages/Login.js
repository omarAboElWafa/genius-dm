import { Container, Modal } from '@mui/material';
import { ServicesSection as LoginSection } from '../../components/styled/ServicesSection';
import SectionTitle from '../../components/styled/SectionTitle';
import SectionSubTitle from '../../components/styled/SectionSubTitle';
import { ReadMoreButton as FormSubmitButton } from '../../components/styled/Buttons';
import Form from '../../components/styled/Form';
import Spinner from '../../components/styled/Spinner';
import { ErrorAlert } from '../../components/styled/Alert';
import ScrollToTopOnMount from '../../components/ScrollToTopOnMount';
import { useState, useEffect, useRef, useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { DataContext } from '../contexts/DataContext';
import Cookies from 'universal-cookie';
import { motion } from 'framer-motion';

const Login = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [isError, setIsError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [open, setOpen] = useState(false);
  const { admin, setAdmin } = useContext(AuthContext);
  const { rootURL } = useContext(DataContext);
  const cookies = new Cookies();
  const navigate = useNavigate();

  useEffect(() => {
    if (cookies.get('Admin')) navigate('/dashboard');
  });

  const loginUser = async (e) => {
    e.preventDefault();
    setIsPending(true);
    setOpen(true);
    const controller = new AbortController();
    try {
      const res = await fetch(
        `${rootURL}/api/auth/local`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            identifier: nameRef.current.value,
            password: passwordRef.current.value,
          }),
        },
        { signal: controller.signal }
      );
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      const json = await res.json();
      setAdmin(json);
      setIsPending(false);
      setIsError(false);
      cookies.set('Admin', { jwt: json.jwt, adminName: json.user.username }, { path: '/' /* , secure: true, httpOnly: true  */ });
    } catch (err) {
      if (err.name === 'AbortError') {
        console.log('The fetch was aborted!');
      } else {
        setAdmin(null);
        setIsPending(false);
        setIsError(true);
        console.log(err.message);
      }
    }
  };

  const handleFocus = (e) => {
    e.target.style.outline = '2px solid var(--mainOrange)';
  };

  const handleBlur = (e) => {
    e.target.style.outline = '1px solid var(--dividerClr)';
  };

  return (
    <>
      <LoginSection lowTopPadding={true}>
        <ScrollToTopOnMount />
        <Container maxWidth='lg'>
          <SectionTitle>Admin Login</SectionTitle>
          <SectionSubTitle
            as={motion.p}
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 * 0 }}
          >
            Accessing Dashboard
          </SectionSubTitle>
          <Form width='400px' onSubmit={loginUser}>
            <motion.input
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 200 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 * 1 }}
              style={{ outline: isError ? '2px solid var(--errorClr)' : '' }}
              ref={nameRef}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className='name'
              type='text'
              placeholder='Your Name'
              required
            />
            <motion.input
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 200 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 * 2 }}
              ref={emailRef}
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
              style={{ outline: isError ? '2px solid var(--errorClr)' : '' }}
              ref={passwordRef}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className='password'
              type='password'
              placeholder='Password'
              required
            />
            <FormSubmitButton
              component={motion.button}
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 200 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 * 4 }}
              type='submit'
            >
              Login
            </FormSubmitButton>
            {isError && <ErrorAlert>Invalid Username or Password!</ErrorAlert>}
          </Form>
          {isPending && (
            <Modal open={open} aria-labelledby='modal-modal-title' aria-describedby='modal-modal-description'>
              <Spinner className='lds-dual-ring'></Spinner>
            </Modal>
          )}
          {admin && <Navigate to='/dashboard' replace={true} />}
        </Container>
      </LoginSection>
    </>
  );
};

export default Login;
