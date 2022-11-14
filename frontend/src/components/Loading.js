import Spinner from './styled/Spinner';
import { Modal } from '@mui/material';

const Loading = () => {
  return (
    <Modal open aria-labelledby='modal-modal-title' aria-describedby='modal-modal-description'>
      <Spinner className='lds-dual-ring'></Spinner>
    </Modal>
  );
};

export default Loading;
