import Form from '../components/styled/Form';
import DashboardHeader from '../components/styled/DashboardHeader';
import DashboardContent from '../components/styled/DashboardContent';
import Label from '../components/styled/Label';
import Input from '../components/styled/Input';
import Textarea from '../components/styled/Textarea';
import TestimonialRow from '../components/TestimonialRow';
import HeadTableCell from '../components/styled/HeadTableCell';
import NoContent from '../components/styled/NoContent';
import { ReadMoreButton as FormSubmitButton } from '../../components/styled/Buttons';
import Loading from '../../components/Loading';
import { useRef, useState, useContext, useEffect } from 'react';
import { Paper, TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { DataContext } from '../contexts/DataContext';

const Testimonial = () => {
  const contentRef = useRef();
  const clientNameRef = useRef();
  const professionRef = useRef();
  const [clientPic, setClientPic] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const { rootURL, isPending, data: testimonials, readData: readTestimonials, uploadNewImage } = useContext(DataContext);
  const baseURL = `${rootURL}/api/testimonials`;

  useEffect(() => {
    readTestimonials(baseURL);
  }, []);

  const handleCreateTestimonial = async (e) => {
    e.preventDefault();
    const userInputData = {
      Content: contentRef.current.value.trim(),
      ClientName: clientNameRef.current.value.trim(),
      Profession: professionRef.current.value.trim(),
    };
    await uploadNewImage('create', baseURL, clientPic, userInputData);
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
      <Form onSubmit={handleCreateTestimonial}>
        {isPending && <Loading />}
        <DashboardHeader>
          <h1>Testimonials</h1>
          <FormSubmitButton onClick={() => setIsOpen((prev) => !prev)}>
            <AddIcon sx={{ fontSize: '2.5rem', marginRight: '0.5rem' }} /> Create new entry
          </FormSubmitButton>
        </DashboardHeader>
        {isOpen && (
          <>
            <DashboardHeader>
              <h1>Create Testimonial</h1>
              <FormSubmitButton type='submit'>Save</FormSubmitButton>
            </DashboardHeader>
            <DashboardContent style={{ marginBottom: '6rem' }}>
              <label>
                <Label>Content</Label>
                <Textarea ref={contentRef} onFocus={handleFocus} onBlur={handleBlur} required style={{ height: '150px' }}></Textarea>
              </label>
              <label>
                <Label>Client Name</Label>
                <Input ref={clientNameRef} onFocus={handleFocus} onBlur={handleBlur} type='text' required />
              </label>
              <label>
                <Label>Profession</Label>
                <Input ref={professionRef} onFocus={handleFocus} onBlur={handleBlur} type='text' required />
              </label>
              <label>
                <Label>Client Pic</Label>
                <Input
                  accept='image/*'
                  onChange={(e) => {
                    setClientPic(e.target.files[0]);
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
      {testimonials && (
        <TableContainer component={Paper}>
          <Table aria-label='collapsible table'>
            <TableHead>
              <TableRow>
                <HeadTableCell />
                <HeadTableCell>ID</HeadTableCell>
                <HeadTableCell>CONTENT</HeadTableCell>
                <HeadTableCell>CLIENTNAME</HeadTableCell>
                <HeadTableCell>PROFESSION</HeadTableCell>
                <HeadTableCell sx={{ textAlign: 'center' }}>CLIENTPIC</HeadTableCell>
                <HeadTableCell />
                <HeadTableCell />
              </TableRow>
            </TableHead>
            {testimonials.length > 0 ? (
              <TableBody>
                {testimonials.map((testimonial) => (
                  <TestimonialRow key={testimonial.id} testimonial={testimonial} />
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

export default Testimonial;
