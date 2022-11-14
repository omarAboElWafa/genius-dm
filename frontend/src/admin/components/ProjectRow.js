import Form from './styled/Form';
import DashboardHeader from './styled/DashboardHeader';
import DashboardContent from './styled/DashboardContent';
import Label from './styled/Label';
import Input from './styled/Input';
import Select from './styled/Select';
import Textarea from './styled/Textarea';
import RowTableCell from './styled/RowTableCell';
import { ReadMoreButton as FormSubmitButton } from '../../components/styled/Buttons';
import { useRef, useState, useContext } from 'react';
import { Table, TableBody, TableRow, TableCell, Collapse, Box, IconButton, Skeleton } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import DeleteIcon from '@mui/icons-material/Delete';
import { DataContext } from '../contexts/DataContext';
import { useFetch } from '../../hooks/useFetch';

const ProjectRow = ({ project }) => {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const serviceRef = useRef();
  const [image, setImage] = useState();
  const [open, setOpen] = useState(false);
  const { rootURL, isPending, deleteOldImage, uploadNewImage, deleteData: deleteProject } = useContext(DataContext);
  const { data: services } = useFetch(`${rootURL}/api/services`);
  const baseURL = `${rootURL}/api/projects`;

  const servicesNames = new Set();
  services?.data.forEach((service) => {
    servicesNames.add(service.attributes.Name);
  });

  const handleUpdateProject = (e, projectId) => {
    e.preventDefault();
    const userInputData = {
      entryId: projectId,
      Title: titleRef.current.value.trim(),
      DetailedDescription: descriptionRef.current.value.trim(),
      Service: serviceRef.current.value.trim(),
    };
    deleteOldImage(baseURL, projectId);
    uploadNewImage('update', baseURL, image, userInputData);
    setOpen(!open);
  };

  const handleDeleteProject = (projectId) => {
    deleteProject(baseURL, projectId);
    deleteOldImage(baseURL, projectId);
  };

  const handleFocus = (e) => {
    e.target.style.outline = '2px solid var(--mainOrange)';
  };

  const handleBlur = (e) => {
    e.target.style.outline = '1px solid var(--dividerClr)';
  };

  return (
    <>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <RowTableCell />
        <RowTableCell>{project.id}</RowTableCell>
        <RowTableCell>{isPending ? <Skeleton variant='text' sx={{ fontSize: '1rem' }} /> : project.attributes.Title?.slice(0, 15)}</RowTableCell>
        <RowTableCell>
          {isPending ? <Skeleton variant='text' sx={{ fontSize: '1rem' }} /> : project.attributes.DetailedDescription?.slice(0, 15)}
        </RowTableCell>
        <RowTableCell>
          {isPending ? (
            <Skeleton variant='circular' width={60} height={60} />
          ) : (
            <img
              style={{ width: '60px', height: '60px', objectFit: 'cover', margin: '0 auto', borderRadius: '50%' }}
              src={project.attributes.ImgURL}
              alt='projectImage'
            />
          )}
        </RowTableCell>
        <RowTableCell>{isPending ? <Skeleton variant='text' sx={{ fontSize: '1rem' }} /> : project.attributes.Service?.slice(0, 15)}</RowTableCell>
        <RowTableCell>
          <IconButton aria-label='expand row' size='small' onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon sx={{ fontSize: '2rem' }} /> : <KeyboardArrowDownIcon sx={{ fontSize: '2rem' }} />}
          </IconButton>
        </RowTableCell>
        <RowTableCell>
          <IconButton onClick={() => handleDeleteProject(project.id)}>
            <DeleteIcon sx={{ fontSize: '2rem' }} />
          </IconButton>
        </RowTableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ padding: 0, borderBottom: 0 }} colSpan={8}>
          <Collapse in={open} timeout='auto' unmountOnExit sx={{ background: 'var(--lightGray)' }}>
            <Box sx={{ margin: 1 }}>
              <Table>
                <TableBody>
                  <TableRow>
                    <RowTableCell style={{ borderBottom: 0 }} />
                    <RowTableCell sx={{ width: '100%', padding: 0, borderBottom: 0 }}>
                      <Form onSubmit={(e) => handleUpdateProject(e, project.id)}>
                        <DashboardHeader style={{ marginTop: '3rem' }}>
                          <h1>Update Project</h1>
                          <FormSubmitButton type='submit'>Save</FormSubmitButton>
                        </DashboardHeader>
                        <DashboardContent style={{ margin: '0 auto 6rem' }}>
                          <label>
                            <Label>Title</Label>
                            <Input
                              defaultValue={project.attributes.Title}
                              ref={titleRef}
                              onFocus={handleFocus}
                              onBlur={handleBlur}
                              type='text'
                              required
                            />
                          </label>
                          <label>
                            <Label>Detailed Description</Label>
                            <Textarea
                              defaultValue={project.attributes.DetailedDescription}
                              minLength='50'
                              ref={descriptionRef}
                              onFocus={handleFocus}
                              onBlur={handleBlur}
                              type='textarea'
                              required
                              style={{ height: '150px' }}
                            ></Textarea>
                          </label>
                          <label>
                            <Label>Service</Label>
                            <Select
                              defaultValue={project.attributes.Service}
                              ref={serviceRef}
                              onFocus={handleFocus}
                              onBlur={handleBlur}
                              type='text'
                              required
                            >
                              {services && Array.from(servicesNames)?.map((serviceName) => <option key={serviceName}>{serviceName}</option>)}
                            </Select>
                          </label>
                          <label>
                            <Label>Featured Pic</Label>
                            <Input
                              accept='image/*'
                              onFocus={handleFocus}
                              onBlur={handleBlur}
                              type='file'
                              onChange={(e) => {
                                setImage(e.target.files[0]);
                              }}
                              required
                            />
                          </label>
                        </DashboardContent>
                      </Form>
                    </RowTableCell>
                    <RowTableCell style={{ borderBottom: 0 }} />
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

export default ProjectRow;
