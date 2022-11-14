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

const ServiceRow = ({ service }) => {
  const nameRef = useRef();
  const iconNameRef = useRef();
  const descriptionRef = useRef();
  const [open, setOpen] = useState(false);
  const { rootURL, isPending, updateData: updateService, deleteData: deleteService } = useContext(DataContext);
  const baseURL = `${rootURL}/api/services`;

  const handleUpdateService = async (e, serviceId) => {
    e.preventDefault();
    const formData = {
      Name: nameRef.current.value.trim(),
      IconName: iconNameRef.current.value.trim(),
      Description: descriptionRef.current.value.trim(),
    };
    await updateService(baseURL, serviceId, formData);
    setOpen(!open);
  };

  const handleDeleteService = (serviceId) => {
    deleteService(baseURL, serviceId);
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
        <RowTableCell>{service.id}</RowTableCell>
        <RowTableCell>{isPending ? <Skeleton variant='text' sx={{ fontSize: '1rem' }} /> : service.attributes.Name?.slice(0, 15)}</RowTableCell>
        <RowTableCell>{isPending ? <Skeleton variant='text' sx={{ fontSize: '1rem' }} /> : service.attributes.IconName?.slice(0, 15)}</RowTableCell>
        <RowTableCell>
          {isPending ? <Skeleton variant='text' sx={{ fontSize: '1rem' }} /> : service.attributes.Description?.slice(0, 15)}
        </RowTableCell>
        <RowTableCell>
          <IconButton aria-label='expand row' size='small' onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon sx={{ fontSize: '2rem' }} /> : <KeyboardArrowDownIcon sx={{ fontSize: '2rem' }} />}
          </IconButton>
        </RowTableCell>
        <RowTableCell>
          <IconButton onClick={() => handleDeleteService(service.id)}>
            <DeleteIcon sx={{ fontSize: '2rem' }} />
          </IconButton>
        </RowTableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ padding: 0, borderBottom: 0 }} colSpan={7}>
          <Collapse in={open} timeout='auto' unmountOnExit sx={{ background: 'var(--lightGray)' }}>
            <Box sx={{ margin: 1 }}>
              <Table>
                <TableBody>
                  <TableRow>
                    <RowTableCell style={{ borderBottom: 0 }} />
                    <RowTableCell sx={{ width: '100%', padding: 0, borderBottom: 0 }}>
                      <Form onSubmit={(e) => handleUpdateService(e, service.id)}>
                        <DashboardHeader style={{ marginTop: '3rem' }}>
                          <h1>Update Service</h1>
                          <FormSubmitButton type='submit'>Save</FormSubmitButton>
                        </DashboardHeader>
                        <DashboardContent style={{ margin: '0 auto 6rem' }}>
                          <label>
                            <Label>Name</Label>
                            <Input
                              defaultValue={service.attributes.Name}
                              ref={nameRef}
                              minLength='3'
                              maxLength='35'
                              onFocus={handleFocus}
                              onBlur={handleBlur}
                              type='text'
                              required
                            />
                          </label>
                          <label>
                            <Label>Icon Name</Label>
                            <Input
                              defaultValue={service.attributes.IconName}
                              ref={iconNameRef}
                              onFocus={handleFocus}
                              onBlur={handleBlur}
                              type='text'
                              required
                            />
                          </label>
                          <label>
                            <Label>Description</Label>
                            <Textarea
                              defaultValue={service.attributes.Description}
                              ref={descriptionRef}
                              minLength='15'
                              maxLength='150'
                              onFocus={handleFocus}
                              onBlur={handleBlur}
                              type='textarea'
                              required
                              style={{ height: '150px' }}
                            ></Textarea>
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

export default ServiceRow;
