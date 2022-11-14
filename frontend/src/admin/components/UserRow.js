import Form from './styled/Form';
import DashboardHeader from './styled/DashboardHeader';
import DashboardContent from './styled/DashboardContent';
import Label from './styled/Label';
import Input from './styled/Input';
import RowTableCell from './styled/RowTableCell';
import { ReadMoreButton as FormSubmitButton } from '../../components/styled/Buttons';
import { useRef, useState, useContext } from 'react';
import { Table, TableBody, TableRow, TableCell, Collapse, Box, IconButton, Skeleton } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import DeleteIcon from '@mui/icons-material/Delete';
import { DataContext } from '../contexts/DataContext';

const UserRow = ({ user }) => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [open, setOpen] = useState(false);
  const { rootURL, isPending, updateData: updateUser, deleteData: deleteUser } = useContext(DataContext);
  const baseURL = `${rootURL}/api/users`;

  const handleUpdateUser = async (e, userId) => {
    e.preventDefault();
    const formData = {
      username: nameRef.current.value.trim(),
      email: emailRef.current.value.trim(),
      password: passwordRef.current.value.trim(),
    };
    await updateUser(baseURL, userId, formData);
    setOpen(!open);
  };

  const handleDeleteUser = (userId) => {
    deleteUser(baseURL, userId);
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
        <RowTableCell>{user.id}</RowTableCell>
        <RowTableCell>{isPending ? <Skeleton variant='text' sx={{ fontSize: '1rem' }} /> : user.username?.slice(0, 15)}</RowTableCell>
        <RowTableCell>{isPending ? <Skeleton variant='text' sx={{ fontSize: '1rem' }} /> : user.email?.slice(0, 15)}</RowTableCell>
        <RowTableCell>{isPending ? <Skeleton variant='text' sx={{ fontSize: '1rem' }} /> : user.password?.slice(0, 15)}</RowTableCell>
        <RowTableCell>
          <IconButton aria-label='expand row' size='small' onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon sx={{ fontSize: '2rem' }} /> : <KeyboardArrowDownIcon sx={{ fontSize: '2rem' }} />}
          </IconButton>
        </RowTableCell>
        <RowTableCell>
          <IconButton onClick={() => handleDeleteUser(user.id)}>
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
                      <Form onSubmit={(e) => handleUpdateUser(e, user.id)}>
                        <DashboardHeader style={{ marginTop: '3rem' }}>
                          <h1>Update User</h1>
                          <FormSubmitButton type='submit'>Save</FormSubmitButton>
                        </DashboardHeader>
                        <DashboardContent style={{ margin: '0 auto 6rem' }}>
                          <label>
                            <Label>Name</Label>
                            <Input defaultValue={user.username} ref={nameRef} onFocus={handleFocus} onBlur={handleBlur} type='text' required />
                          </label>
                          <label>
                            <Label>Email</Label>
                            <Input defaultValue={user.email} ref={emailRef} onFocus={handleFocus} onBlur={handleBlur} type='email' required />
                          </label>
                          <label>
                            <Label>Password</Label>
                            <Input
                              defaultValue={user.password}
                              ref={passwordRef}
                              onFocus={handleFocus}
                              onBlur={handleBlur}
                              type='password'
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

export default UserRow;
