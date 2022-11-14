import Form from '../components/styled/Form';
import DashboardHeader from '../components/styled/DashboardHeader';
import DashboardContent from '../components/styled/DashboardContent';
import Label from '../components/styled/Label';
import Input from '../components/styled/Input';
import { ReadMoreButton as FormSubmitButton } from '../../components/styled/Buttons';
import Loading from '../../components/Loading';
import { useRef, useContext, useEffect } from 'react';
import { DataContext } from '../contexts/DataContext';

const Social = () => {
  const instagramURLRef = useRef();
  const facebookURLRef = useRef();
  const twitterURLRef = useRef();
  const linkedinURLRef = useRef();
  const { rootURL, isPending, data: socialData, readData: readSocial, updateData: updateSocial } = useContext(DataContext);
  const baseURL = `${rootURL}/api/social-setting`;

  useEffect(() => {
    readSocial(baseURL);
  }, []);

  const handelSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      InstagramURL: instagramURLRef.current.value.trim(),
      FacebookURL: facebookURLRef.current.value.trim(),
      TwitterURL: twitterURLRef.current.value.trim(),
      LinkedinURL: linkedinURLRef.current.value.trim(),
    };
    await updateSocial(baseURL, null, formData);
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
        <h1>Social</h1>
        <FormSubmitButton type='submit'>Save</FormSubmitButton>
      </DashboardHeader>
      <DashboardContent>
        <label>
          <Label>Instagram URL</Label>
          <Input
            defaultValue={socialData?.attributes?.InstagramURL}
            ref={instagramURLRef}
            onFocus={handleFocus}
            onBlur={handleBlur}
            type='text'
            pattern='https://.*'
            required
          />
        </label>
        <label>
          <Label>Facebook URL</Label>
          <Input
            defaultValue={socialData?.attributes?.FacebookURL}
            ref={facebookURLRef}
            onFocus={handleFocus}
            onBlur={handleBlur}
            type='text'
            pattern='https://.*'
            required
          />
        </label>
        <label>
          <Label>Twitter URL</Label>
          <Input
            defaultValue={socialData?.attributes?.TwitterURL}
            ref={twitterURLRef}
            onFocus={handleFocus}
            onBlur={handleBlur}
            type='text'
            pattern='https://.*'
            required
          />
        </label>
        <label>
          <Label>Linkedin URL</Label>
          <Input
            defaultValue={socialData?.attributes?.LinkedinURL}
            ref={linkedinURLRef}
            onFocus={handleFocus}
            onBlur={handleBlur}
            type='text'
            pattern='https://.*'
            required
          />
        </label>
      </DashboardContent>
    </Form>
  );
};

export default Social;
