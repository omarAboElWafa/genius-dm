import Form from '../components/styled/Form';
import DashboardHeader from '../components/styled/DashboardHeader';
import DashboardContent from '../components/styled/DashboardContent';
import Label from '../components/styled/Label';
import Input from '../components/styled/Input';
import Textarea from '../components/styled/Textarea';
import { ReadMoreButton as FormSubmitButton } from '../../components/styled/Buttons';
import Loading from '../../components/Loading';
import { useRef, useContext, useEffect } from 'react';
import { DataContext } from '../contexts/DataContext';

const About = () => {
  const yearsExperienceRef = useRef();
  const teamMembersRef = useRef();
  const satisfiedClientsRef = useRef();
  const completedProjectsRef = useRef();
  const aboutCompanyRef = useRef();
  const { rootURL, isPending, data: aboutData, readData: readAbout, updateData: updateAbout } = useContext(DataContext);
  const baseURL = `${rootURL}/api/setting`;

  useEffect(() => {
    readAbout(baseURL);
  }, []);

  const handelSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      YearsExperience: yearsExperienceRef.current.value.trim(),
      TeamMembers: teamMembersRef.current.value.trim(),
      SatisfiedClients: satisfiedClientsRef.current.value.trim(),
      CompletedProjects: completedProjectsRef.current.value.trim(),
      AboutCompany: aboutCompanyRef.current.value.trim(),
    };
    await updateAbout(baseURL, null, formData);
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
        <h1>About</h1>
        <FormSubmitButton type='submit'>Save</FormSubmitButton>
      </DashboardHeader>
      <DashboardContent>
        <label>
          <Label>Years Experience</Label>
          <Input
            defaultValue={aboutData?.attributes?.YearsExperience}
            ref={yearsExperienceRef}
            onFocus={handleFocus}
            onBlur={handleBlur}
            type='number'
            min='1'
            max='100'
            required
          />
        </label>
        <label>
          <Label>Team Members</Label>
          <Input
            defaultValue={aboutData?.attributes?.TeamMembers}
            ref={teamMembersRef}
            onFocus={handleFocus}
            onBlur={handleBlur}
            type='number'
            min='1'
            max='100'
            required
          />
        </label>
        <label>
          <Label>Satisfied Clients</Label>
          <Input
            defaultValue={aboutData?.attributes?.SatisfiedClients}
            ref={satisfiedClientsRef}
            onFocus={handleFocus}
            onBlur={handleBlur}
            type='number'
            min='1'
            max='100'
            required
          />
        </label>
        <label>
          <Label>Completed Projects</Label>
          <Input
            defaultValue={aboutData?.attributes?.CompletedProjects}
            ref={completedProjectsRef}
            onFocus={handleFocus}
            onBlur={handleBlur}
            type='number'
            min='1'
            max='100'
            required
          />
        </label>
        <label>
          <Label>About Company</Label>
          <Textarea
            defaultValue={aboutData?.attributes?.AboutCompany}
            ref={aboutCompanyRef}
            onFocus={handleFocus}
            onBlur={handleBlur}
            type='textarea'
            required
            style={{ height: '150px' }}
          ></Textarea>
        </label>
      </DashboardContent>
    </Form>
  );
};

export default About;
