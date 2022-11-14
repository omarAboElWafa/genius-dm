import Form from '../components/styled/Form';
import DashboardHeader from '../components/styled/DashboardHeader';
import DashboardContent from '../components/styled/DashboardContent';
import Label from '../components/styled/Label';
import Input from '../components/styled/Input';
import { ReadMoreButton as FormSubmitButton } from '../../components/styled/Buttons';
import Loading from '../../components/Loading';
import { useRef, useContext, useEffect } from 'react';
import { DataContext } from '../contexts/DataContext';

const Contact = () => {
  const emailRef = useRef();
  const whatsAppRef = useRef();
  const addressRef = useRef();
  const phonNumberRef = useRef();
  const phonNumber2Ref = useRef();
  const { rootURL, isPending, data: contactData, readData: readContact, updateData: updateContact } = useContext(DataContext);
  const baseURL = `${rootURL}/api/setting-contact`;

  useEffect(() => {
    readContact(baseURL);
  }, []);

  const handelSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      Email: emailRef.current.value.trim(),
      WhatsApp: whatsAppRef.current.value.trim(),
      Address: addressRef.current.value.trim(),
      PhoneNumber: phonNumberRef.current.value.trim(),
      PhoneNumber2: phonNumber2Ref.current.value.trim(),
    };
    await updateContact(baseURL, null, formData);
  };

  const handleFocus = (e) => {
    e.target.style.outline = '2px solid var(--mainOrange)';
  };

  const handleBlur = (e) => {
    e.target.style.outline = '1px solid var(--dividerClr)';
  };

  return (
    <Form onSubmit={handelSubmit}>
      {isPending && <Loading />}
      <DashboardHeader>
        <h1>Contact</h1>
        <FormSubmitButton type='submit'>Save</FormSubmitButton>
      </DashboardHeader>
      <DashboardContent>
        <label>
          <Label>Email</Label>
          <Input defaultValue={contactData?.attributes?.Email} ref={emailRef} onFocus={handleFocus} onBlur={handleBlur} type='email' required />
        </label>
        <label>
          <Label>WhatsApp</Label>
          <Input defaultValue={contactData?.attributes?.WhatsApp} ref={whatsAppRef} onFocus={handleFocus} onBlur={handleBlur} type='text' required />
        </label>
        <label>
          <Label>Phone Number</Label>
          <Input
            defaultValue={contactData?.attributes?.PhoneNumber}
            ref={phonNumberRef}
            onFocus={handleFocus}
            onBlur={handleBlur}
            type='text'
            required
          />
        </label>
        <label>
          <Label>Phone Number 2</Label>
          <Input
            defaultValue={contactData?.attributes?.PhoneNumber2}
            ref={phonNumber2Ref}
            onFocus={handleFocus}
            onBlur={handleBlur}
            type='text'
            required
          />
        </label>
        <label>
          <Label>Address</Label>
          <Input defaultValue={contactData?.attributes?.Address} ref={addressRef} onFocus={handleFocus} onBlur={handleBlur} type='text' required />
        </label>
      </DashboardContent>
    </Form>
  );
};

export default Contact;
