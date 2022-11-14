import { createContext, useContext, useState, useRef } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'universal-cookie';

export const DataContext = createContext();

const DataContextProvider = (props) => {
  const { admin } = useContext(AuthContext);
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const cookies = new Cookies();
  const rootURL = process.env.REACT_APP_DOMAIN ? process.env.REACT_APP_DOMAIN : 'http://localhost:1337';

  console.log(process.env.REACT_APP_DOMAIN);
  console.log('rootURL =>', process.env.REACT_APP_DOMAIN);

  // NOTIFICATIONS
  const toastId = useRef(null);
  const notify = (state, message) => {
    const toastProps = {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    };
    if (!toast.isActive(toastId.current)) {
      if (state === 'success') toastId.current = toast.success(message, toastProps);
      if (state === 'error') toastId.current = toast.error(message, toastProps);
    }
  };

  // CREATE DATA
  const createData = async (baseURL, formData) => {
    setIsPending(true);
    try {
      const res = await fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify({
          data: formData,
        }),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${cookies.get('Admin') ? cookies.get('Admin').jwt : admin.jwt}`,
        },
      });
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      const json = await res.json();
      setData(data.push(json.data));
      setIsPending(false);
      readData(baseURL);
      notify('success', 'Success: Saved');
    } catch (err) {
      setIsPending(false);
      console.log(err.message);
      notify('error', `Error: Could not add data, Make some changes & try again!`);
    }
  };

  // READ DATA
  const readData = async (baseURL) => {
    setIsPending(true);
    try {
      const res = await fetch(`${baseURL}`);
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      const json = await res.json();
      setData(json.data);
      setIsPending(false);
    } catch (err) {
      setIsPending(false);
      console.log(err.message);
      notify('error', `Error: Could not fetch data!`);
    }
  };

  // UPDATE DATA
  const updateData = async (baseURL, id, formData) => {
    setIsPending(true);
    try {
      const res = await fetch(id ? `${baseURL}/${id}` : `${baseURL}`, {
        method: 'PUT',
        body: JSON.stringify({
          data: formData,
        }),
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
      readData(baseURL);
      notify('success', 'Success: Saved');
    } catch (err) {
      setIsPending(false);
      console.log(err.message);
      notify('error', `Error: Could not update data, Make some changes & try again!`);
    }
  };

  // DELETE DATA
  const deleteData = async (baseURL, id) => {
    setIsPending(true);
    try {
      const res = await fetch(`${baseURL}/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${cookies.get('Admin') ? cookies.get('Admin').jwt : admin.jwt}`,
        },
      });
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      const json = await res.json();
      setData(data.filter((item) => item.id !== id));
      setIsPending(false);
      notify('success', 'Success: Saved');
    } catch (err) {
      setIsPending(false);
      console.log(err.message);
      notify('error', `Error: Could not delete data, try again!`);
    }
  };

  // UPLOAD THE NEW IMAGE
  const uploadNewImage = async (flag, baseURL, image, userInputData) => {
    setIsPending(true);
    if (!image) {
      notify('error', `Error: Please select an image!`);
      setIsPending(false);
      return;
    }
    if (!image.type.includes('image')) {
      notify('error', `Error: The file must be an image!`);
      setIsPending(false);
      return;
    }
    const imgData = new FormData();
    imgData.append('files', image);
    try {
      const res = await fetch(`${rootURL}/api/upload`, {
        method: 'POST',
        body: imgData,
      });
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      const uploadedImage = await res.json();
      const uploadedImageData = { ImgID: uploadedImage[0]?.id, ImgName: uploadedImage[0]?.name, ImgURL: uploadedImage[0]?.url };
      const formData = { ...userInputData, ...uploadedImageData };
      if (flag === 'create') await createData(baseURL, formData);
      if (flag === 'update') await updateData(baseURL, userInputData.entryId, formData);
      setIsPending(false);
    } catch (err) {
      setIsPending(false);
      console.log(err.message);
      notify('error', `Error: Could not add data, Make some changes & try again!`);
    }
  };

  // DELETE THE OLD IMAGE
  const deleteOldImage = async (baseURL, entryId) => {
    const res = await fetch(`${baseURL}/${entryId}`);
    const entry = await res.json();
    await fetch(`${rootURL}/api/upload/files/${entry.data.attributes.ImgID}`, {
      method: 'DELETE',
    });
  };

  return (
    <DataContext.Provider value={{ data, rootURL, isPending, createData, readData, updateData, deleteData, uploadNewImage, deleteOldImage }}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
