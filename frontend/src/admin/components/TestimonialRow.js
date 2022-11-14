import Form from './styled/Form';
import DashboardHeader from './styled/DashboardHeader';
import DashboardContent from './styled/DashboardContent';
import Label from './styled/Label';
import Input from './styled/Input';
import Textarea from './styled/Textarea';
import RowTableCell from './styled/RowTableCell';
import { ReadMoreButton as FormSubmitButton } from '../../components/styled/Buttons';
import { useRef, useState, useContext } from 'react';
import { Table, TableBody, TableRow, TableCell, Collapse, Box, IconButton, Skeleton } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import DeleteIcon from '@mui/icons-material/Delete';
import { DataContext } from '../contexts/DataContext';

const TestimonialRow = ({ testimonial }) => {
  const contentRef = useRef();
  const clientNameRef = useRef();
  const professionRef = useRef();
  const [clientPic, setClientPic] = useState();
  const [open, setOpen] = useState(false);
  const { rootURL, isPending, deleteOldImage, uploadNewImage, deleteData: deleteTestimonial } = useContext(DataContext);
  const baseURL = `${rootURL}/api/testimonials`;

  const handleUpdateTestimonial = (e, testimonialId) => {
    e.preventDefault();
    const userInputData = {
      entryId: testimonialId,
      Content: contentRef.current.value.trim(),
      ClientName: clientNameRef.current.value.trim(),
      Profession: professionRef.current.value.trim(),
    };
    deleteOldImage(baseURL, testimonialId);
    uploadNewImage('update', baseURL, clientPic, userInputData);
    setOpen(!open);
  };

  const handleDeleteTestimonial = (testimonialId) => {
    deleteTestimonial(baseURL, testimonialId);
    deleteOldImage(baseURL, testimonialId);
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
        <RowTableCell>{testimonial.id}</RowTableCell>
        <RowTableCell>
          {isPending ? <Skeleton variant='text' sx={{ fontSize: '1rem' }} /> : testimonial.attributes.Content?.slice(0, 15)}
        </RowTableCell>
        <RowTableCell>
          {isPending ? <Skeleton variant='text' sx={{ fontSize: '1rem' }} /> : testimonial.attributes.ClientName?.slice(0, 15)}
        </RowTableCell>
        <RowTableCell>
          {isPending ? <Skeleton variant='text' sx={{ fontSize: '1rem' }} /> : testimonial.attributes.Profession?.slice(0, 15)}
        </RowTableCell>
        <RowTableCell>
          {isPending ? (
            <Skeleton variant='circular' width={60} height={60} />
          ) : (
            <img
              style={{ width: '60px', height: '60px', objectFit: 'cover', margin: '0 auto', borderRadius: '50%' }}
              src={testimonial.attributes.ImgURL}
              alt='clientPic'
            />
          )}
        </RowTableCell>
        <RowTableCell>
          <IconButton aria-label='expand row' size='small' onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon sx={{ fontSize: '2rem' }} /> : <KeyboardArrowDownIcon sx={{ fontSize: '2rem' }} />}
          </IconButton>
        </RowTableCell>
        <RowTableCell>
          <IconButton onClick={() => handleDeleteTestimonial(testimonial.id)}>
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
                      <Form onSubmit={(e) => handleUpdateTestimonial(e, testimonial.id)}>
                        <DashboardHeader style={{ marginTop: '3rem' }}>
                          <h1>Update Testimonial</h1>
                          <FormSubmitButton type='submit'>Save</FormSubmitButton>
                        </DashboardHeader>
                        <DashboardContent style={{ margin: '0 auto 6rem' }}>
                          <label>
                            <Label>Content</Label>
                            <Textarea
                              defaultValue={testimonial.attributes.Content}
                              ref={contentRef}
                              onFocus={handleFocus}
                              onBlur={handleBlur}
                              required
                              style={{ height: '150px' }}
                            ></Textarea>
                          </label>
                          <label>
                            <Label>Client Name</Label>
                            <Input
                              defaultValue={testimonial.attributes.ClientName}
                              ref={clientNameRef}
                              onFocus={handleFocus}
                              onBlur={handleBlur}
                              type='text'
                              required
                            />
                          </label>
                          <label>
                            <Label>Profession</Label>
                            <Input
                              defaultValue={testimonial.attributes.Profession}
                              ref={professionRef}
                              onFocus={handleFocus}
                              onBlur={handleBlur}
                              type='text'
                              required
                            />
                          </label>
                          <label>
                            <Label>Client Pic</Label>
                            <Input
                              accept='image/*'
                              onFocus={handleFocus}
                              onBlur={handleBlur}
                              type='file'
                              onChange={(e) => {
                                setClientPic(e.target.files[0]);
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

export default TestimonialRow;
