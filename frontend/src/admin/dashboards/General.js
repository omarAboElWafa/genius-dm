import Form from '../components/styled/Form';
import DashboardHeader from '../components/styled/DashboardHeader';
import DashboardContent from '../components/styled/DashboardContent';
import Label from '../components/styled/Label';
import Input from '../components/styled/Input';
import { ReadMoreButton as FormSubmitButton } from '../../components/styled/Buttons';
import Loading from '../../components/Loading';
import { useRef, useContext, useEffect } from 'react';
import { DataContext } from '../contexts/DataContext';

const General = () => {
  const websiteTitleRef = useRef();
  const { rootURL, isPending, data: generalData, readData: readGeneral, updateData: updateGeneral } = useContext(DataContext);
  const baseURL = `${rootURL}/api/general-setting`;

  useEffect(() => {
    readGeneral(baseURL);
  }, []);

  const handelSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      WebsiteTitle: websiteTitleRef.current.value.trim(),
    };
    await updateGeneral(baseURL, null, formData);
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
        <h1>General</h1>
        <FormSubmitButton type='submit'>Save</FormSubmitButton>
      </DashboardHeader>
      <DashboardContent>
        <label>
          <Label>Website Title</Label>
          <Input
            defaultValue={generalData?.attributes?.WebsiteTitle}
            ref={websiteTitleRef}
            onFocus={handleFocus}
            onBlur={handleBlur}
            type='text'
            required
          />
        </label>
      </DashboardContent>
    </Form>
  );
};

export default General;
