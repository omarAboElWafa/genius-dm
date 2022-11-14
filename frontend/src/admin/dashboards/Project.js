import Form from '../components/styled/Form';
import DashboardHeader from '../components/styled/DashboardHeader';
import DashboardContent from '../components/styled/DashboardContent';
import Label from '../components/styled/Label';
import Input from '../components/styled/Input';
import Select from '../components/styled/Select';
import Textarea from '../components/styled/Textarea';
import ProjectRow from '../components/ProjectRow';
import HeadTableCell from '../components/styled/HeadTableCell';
import NoContent from '../components/styled/NoContent';
import { ReadMoreButton as FormSubmitButton } from '../../components/styled/Buttons';
import Loading from '../../components/Loading';
import { useRef, useState, useContext, useEffect } from 'react';
import { Paper, TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { DataContext } from '../contexts/DataContext';
import { useFetch } from '../../hooks/useFetch';

const Project = () => {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const serviceRef = useRef();
  const [image, setImage] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const { rootURL, isPending, data: projects, readData: readProjects, uploadNewImage } = useContext(DataContext);
  const { data: services } = useFetch(`${rootURL}/api/services`);
  const baseURL = `${rootURL}/api/projects`;

  const servicesNames = new Set();
  services?.data.forEach((service) => {
    servicesNames.add(service.attributes.Name);
  });

  useEffect(() => {
    readProjects(baseURL);
  }, []);

  const handleCreateProject = async (e) => {
    e.preventDefault();
    const userInputData = {
      Title: titleRef.current.value.trim(),
      DetailedDescription: descriptionRef.current.value.trim(),
      Service: serviceRef.current.value.trim(),
    };
    await uploadNewImage('create', baseURL, image, userInputData);
    setIsOpen(!isOpen);
  };

  const handleFocus = (e) => {
    e.target.style.outline = '2px solid var(--mainOrange)';
  };

  const handleBlur = (e) => {
    e.target.style.outline = '1px solid var(--dividerClr)';
  };

  return (
    <>
      <Form onSubmit={handleCreateProject}>
        {isPending && <Loading />}
        <DashboardHeader>
          <h1>Projects</h1>
          <FormSubmitButton onClick={() => setIsOpen((prev) => !prev)}>
            <AddIcon sx={{ fontSize: '2.5rem', marginRight: '0.5rem' }} /> Create new entry
          </FormSubmitButton>
        </DashboardHeader>
        {isOpen && (
          <>
            <DashboardHeader>
              <h1>Create Project</h1>
              <FormSubmitButton type='submit'>Save</FormSubmitButton>
            </DashboardHeader>
            <DashboardContent style={{ marginBottom: '6rem' }}>
              <label>
                <Label>Title</Label>
                <Input minLength='3' maxLength='50' ref={titleRef} onFocus={handleFocus} onBlur={handleBlur} type='text' required />
              </label>
              <label>
                <Label>Detailed Description</Label>
                <Textarea
                  minLength='50'
                  ref={descriptionRef}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  required
                  style={{ height: '150px' }}
                ></Textarea>
              </label>
              <label>
                <Label>Service</Label>
                <Select ref={serviceRef} onFocus={handleFocus} onBlur={handleBlur} type='text' required>
                  {services && Array.from(servicesNames)?.map((serviceName) => <option key={serviceName}>{serviceName}</option>)}
                </Select>
              </label>
              <label>
                <Label>Featured Pic</Label>
                <Input
                  accept='image/*'
                  onChange={(e) => {
                    setImage(e.target.files[0]);
                  }}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  type='file'
                  required
                />
              </label>
            </DashboardContent>
          </>
        )}
      </Form>
      {projects && (
        <TableContainer component={Paper}>
          <Table aria-label='collapsible table'>
            <TableHead>
              <TableRow>
                <HeadTableCell />
                <HeadTableCell>ID</HeadTableCell>
                <HeadTableCell>TITLE</HeadTableCell>
                <HeadTableCell>DESCRIPTION</HeadTableCell>
                <HeadTableCell sx={{ textAlign: 'center' }}>FEATUREDPIC</HeadTableCell>
                <HeadTableCell>SERVICE</HeadTableCell>
                <HeadTableCell />
                <HeadTableCell />
              </TableRow>
            </TableHead>
            {projects.length > 0 ? (
              <TableBody>
                {projects.map((project) => (
                  <ProjectRow key={project.id} project={project} />
                ))}
              </TableBody>
            ) : (
              <TableBody>
                <TableRow>
                  <TableCell colSpan={8}>
                    <NoContent />
                  </TableCell>
                </TableRow>
              </TableBody>
            )}
          </Table>
        </TableContainer>
      )}
    </>
  );
};

export default Project;
