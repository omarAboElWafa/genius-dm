import Form from '../components/styled/Form';
import DashboardHeader from '../components/styled/DashboardHeader';
import DashboardContent from '../components/styled/DashboardContent';
import Label from '../components/styled/Label';
import Input from '../components/styled/Input';
import UserRow from '../components/UserRow';
import HeadTableCell from '../components/styled/HeadTableCell';
import NoContent from '../components/styled/NoContent';
import { ReadMoreButton as FormSubmitButton } from '../../components/styled/Buttons';
import Loading from '../../components/Loading';
import { useRef, useState, useContext, useEffect } from 'react';
import { Paper, TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { DataContext } from '../contexts/DataContext';
import { AuthContext } from '../../contexts/AuthContext';
import Cookies from 'universal-cookie';

const User = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const { rootURL, createData: createUser } = useContext(DataContext);
  const baseURL = `${rootURL}/api/users`;
  const [users, setUsers] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { admin } = useContext(AuthContext);
  const cookies = new Cookies();

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      setIsPending(true);
      try {
        const res = await fetch(baseURL, {
          signal: controller.signal,
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${cookies.get('Admin') ? cookies.get('Admin').jwt : admin.jwt}`,
          },
        });
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        const json = await res.json();
        setIsPending(false);
        setUsers(json);
      } catch (err) {
        if (err.name === 'AbortError') {
          console.log('The fetch was aborted!');
        } else {
          setIsPending(false);
          console.log(err.message);
        }
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, []);

  const handleCreateUser = async (e) => {
    e.preventDefault();
    const userInputData = {
      username: nameRef.current.value.trim(),
      email: emailRef.current.value.trim(),
      password: passwordRef.current.value.trim(),
      confirmed: true,
      blocked: false,
    };
    await createUser(baseURL, userInputData);
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
      <Form onSubmit={handleCreateUser}>
        {isPending && <Loading />}
        <DashboardHeader>
          <h1>Users</h1>
          <FormSubmitButton onClick={() => setIsOpen((prev) => !prev)}>
            <AddIcon sx={{ fontSize: '2.5rem', marginRight: '0.5rem' }} /> Create new entry
          </FormSubmitButton>
        </DashboardHeader>
        {isOpen && (
          <>
            <DashboardHeader>
              <h1>Create User</h1>
              <FormSubmitButton type='submit'>Save</FormSubmitButton>
            </DashboardHeader>
            <DashboardContent style={{ marginBottom: '6rem' }}>
              <label>
                <Label>Username</Label>
                <Input ref={nameRef} onFocus={handleFocus} onBlur={handleBlur} type='text' required />
              </label>
              <label>
                <Label>Email</Label>
                <Input ref={emailRef} onFocus={handleFocus} onBlur={handleBlur} type='email' required />
              </label>
              <label>
                <Label>Password</Label>
                <Input ref={passwordRef} onFocus={handleFocus} onBlur={handleBlur} type='password' required />
              </label>
            </DashboardContent>
          </>
        )}
      </Form>
      {users && (
        <TableContainer component={Paper}>
          <Table aria-label='collapsible table'>
            <TableHead>
              <TableRow>
                <HeadTableCell />
                <HeadTableCell>ID</HeadTableCell>
                <HeadTableCell>NAME</HeadTableCell>
                <HeadTableCell>EMAIL</HeadTableCell>
                <HeadTableCell>PASSWORD</HeadTableCell>
                <HeadTableCell />
                <HeadTableCell />
              </TableRow>
            </TableHead>
            {users.length > 0 ? (
              <TableBody>
                {users.map((user) => (
                  <UserRow key={user.id} user={user} />
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

export default User;
