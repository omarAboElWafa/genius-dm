import { IconButton } from '@mui/material';
import AsideListTitle from './AsideListTitle';

const ListTitle = ({ color, icon, text, cursor, type, setCurrentBoard }) => {
  const handleClick = (e) => {
    document.querySelectorAll('.lt').forEach((lt) => {
      if (type) return;
      lt.classList.remove('active');
    });
    if (!type) e.target.closest('div').classList.add('active');
    if (setCurrentBoard) setCurrentBoard(e.target.closest('div').id);
  };

  return (
    <AsideListTitle id={text} className={text === 'Projects' ? 'active lt' : 'lt'} cursor={cursor} onClick={(e, type) => handleClick(e, type)}>
      <IconButton sx={{ borderRadius: '0.5rem', cursor: cursor }}>{icon}</IconButton>
      <p className='listTitle' style={{ color: color ? color : 'white' }}>
        {text}
      </p>
    </AsideListTitle>
  );
};

export default ListTitle;
