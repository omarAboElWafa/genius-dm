import Form from '../components/styled/Form';
import DashboardHeader from '../components/styled/DashboardHeader';
import DashboardContent from '../components/styled/DashboardContent';
import Label from '../components/styled/Label';
import Input from '../components/styled/Input';
import Textarea from '../components/styled/Textarea';
import ServiceRow from '../components/ServiceRow';
import HeadTableCell from '../components/styled/HeadTableCell';
import NoContent from '../components/styled/NoContent';
import { ReadMoreButton as FormSubmitButton } from '../../components/styled/Buttons';
import Loading from '../../components/Loading';
import { useRef, useState, useContext, useEffect } from 'react';
import { Paper, TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { DataContext } from '../contexts/DataContext';

const Service = () => {
  const nameRef = useRef();
  const iconNameRef = useRef();
  const descriptionRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const { rootURL, data: services, readData: readServices, createData: createService, isPending } = useContext(DataContext);
  const baseURL = `${rootURL}/api/services`;

  useEffect(() => {
    readServices(baseURL);
  }, []);

  const handleCreateService = async (e) => {
    e.preventDefault();
    const formData = {
      Name: nameRef.current.value.trim(),
      IconName: iconNameRef.current.value.trim(),
      Description: descriptionRef.current.value.trim(),
    };
    await createService(baseURL, formData);
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
      <Form onSubmit={handleCreateService}>
        {isPending && <Loading />}
        <DashboardHeader>
          <h1>Services</h1>
          <FormSubmitButton onClick={() => setIsOpen((prev) => !prev)}>
            <AddIcon sx={{ fontSize: '2.5rem', marginRight: '0.5rem' }} /> Create new entry
          </FormSubmitButton>
        </DashboardHeader>
        {isOpen && (
          <>
            <DashboardHeader>
              <h1>Create Service</h1>
              <FormSubmitButton type='submit'>Save</FormSubmitButton>
            </DashboardHeader>
            <DashboardContent style={{ marginBottom: '6rem' }}>
              <label>
                <Label>Name</Label>
                <Input minLength='3' maxLength='35' ref={nameRef} onFocus={handleFocus} onBlur={handleBlur} type='text' required />
              </label>
              <label>
                <Label>Icon Name</Label>
                <Input ref={iconNameRef} onFocus={handleFocus} onBlur={handleBlur} type='text' required />
              </label>
              <label>
                <Label>Description</Label>
                <Textarea
                  minLength='15'
                  maxLength='150'
                  ref={descriptionRef}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  required
                  style={{ height: '150px' }}
                ></Textarea>
              </label>
            </DashboardContent>
          </>
        )}
      </Form>
      {services && (
        <TableContainer component={Paper}>
          <Table aria-label='collapsible table'>
            <TableHead>
              <TableRow>
                <HeadTableCell />
                <HeadTableCell>ID</HeadTableCell>
                <HeadTableCell>NAME</HeadTableCell>
                <HeadTableCell>ICONNAME</HeadTableCell>
                <HeadTableCell>DESCRIPTION</HeadTableCell>
                <HeadTableCell />
                <HeadTableCell />
              </TableRow>
            </TableHead>
            {services.length > 0 ? (
              <TableBody>
                {services.map((service) => (
                  <ServiceRow key={service.id} service={service} />
                ))}
              </TableBody>
            ) : (
              <TableBody>
                <TableRow>
                  <TableCell colSpan={7}>
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

export default Service;
