import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import TableViewIcon from '@mui/icons-material/TableView';
import WorkIcon from '@mui/icons-material/Work';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import TimesOneMobiledataIcon from '@mui/icons-material/TimesOneMobiledata';
import PublicIcon from '@mui/icons-material/Public';
import InfoIcon from '@mui/icons-material/Info';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import Project from '../dashboards/Project';
import Service from '../dashboards/Service';
import Testimonial from '../dashboards/Testimonial';
import User from '../dashboards/User';
import General from '../dashboards/General';
import About from '../dashboards/About';
import Contact from '../dashboards/Contact';
import Social from '../dashboards/Social';
import ListTitle from '../components/styled/ListTitle';
import Divider from '../components/styled/Divider';
import AsideList from '../components/styled/AsideList';
import StyledDashboard from '../components/styled/StyledDashboard';
import DashboardHeading from '../components/styled/DashboardHeading';
import DashboardAside from '../components/styled/DashboardAside';
import DashboardMain from '../components/styled/DashboardMain';
import SquareLogo from '../../assets/squareLogo.svg';
import DashboardTextLogo from '../../assets/DashboardTextLogo.svg';
import useViewport from '../../hooks/useViewport';
import Cookies from 'universal-cookie';

const Dashboard = () => {
  const navigate = useNavigate();
  const { admin, setAdmin } = useContext(AuthContext);
  const [currentBoard, setCurrentBoard] = useState(null);
  let mql = window.matchMedia('(min-width: 992px)');
  useViewport();
  const cookies = new Cookies();

  const handleLogout = () => {
    setAdmin(null);
    cookies.remove('Admin');
    navigate('/', { replace: true });
  };

  return (
    <>
      <StyledDashboard>
        <DashboardHeading>
          <div className='headerContent'>
            <h4 className='adminName'>Welcome, {admin ? admin.user.username : cookies.get('Admin').adminName} 👋</h4>
            <IconButton onClick={handleLogout}>
              <LogoutIcon sx={{ fontSize: '2.5rem', cursor: 'pointer' }} />
            </IconButton>
          </div>
        </DashboardHeading>
        <DashboardAside>
          <div className='asideLogo'>
            {mql.matches ? <img src={DashboardTextLogo} alt='dashboard logo' /> : <img src={SquareLogo} alt='dashboard logo' />}
          </div>
          <div className='asideContent'>
            <AsideList>
              <ListTitle
                type='mainTitle'
                color='var(--mainOrange)'
                cursor='auto'
                icon={<TableViewIcon sx={{ color: 'var(--mainOrange)', fontSize: '2.5rem' }} />}
                text='COLLECTION TYPES'
              />
              <div className='asideListItems'>
                <ListTitle setCurrentBoard={setCurrentBoard} icon={<WorkIcon sx={{ color: 'white', fontSize: '2.3rem' }} />} text='Projects' />
                <ListTitle
                  setCurrentBoard={setCurrentBoard}
                  icon={<DesignServicesIcon sx={{ color: 'white', fontSize: '2.3rem' }} />}
                  text='Services'
                />
                <ListTitle
                  setCurrentBoard={setCurrentBoard}
                  icon={<FormatQuoteIcon sx={{ color: 'white', fontSize: '2.3rem' }} />}
                  text='Testimonials'
                />
                <ListTitle setCurrentBoard={setCurrentBoard} icon={<VerifiedUserIcon sx={{ color: 'white', fontSize: '2.3rem' }} />} text='Users' />
              </div>
            </AsideList>
            <Divider />
            <AsideList>
              <ListTitle
                type='mainTitle'
                color='var(--mainOrange)'
                cursor='auto'
                icon={<TimesOneMobiledataIcon sx={{ color: 'var(--mainOrange)', fontSize: '2.5rem' }} />}
                text='SINGLE TYPES'
              />
              <div className='asideListItems'>
                <ListTitle setCurrentBoard={setCurrentBoard} icon={<PublicIcon sx={{ color: 'white', fontSize: '2.3rem' }} />} text='General' />
                <ListTitle setCurrentBoard={setCurrentBoard} icon={<InfoIcon sx={{ color: 'white', fontSize: '2.3rem' }} />} text='About' />
                <ListTitle setCurrentBoard={setCurrentBoard} icon={<ContactPhoneIcon sx={{ color: 'white', fontSize: '2.3rem' }} />} text='Contact' />
                <ListTitle setCurrentBoard={setCurrentBoard} icon={<GroupAddIcon sx={{ color: 'white', fontSize: '2.3rem' }} />} text='Social' />
              </div>
            </AsideList>
          </div>
        </DashboardAside>
        <DashboardMain>
          {!currentBoard && <Project />}
          {currentBoard === 'Projects' && <Project />}
          {currentBoard === 'Services' && <Service />}
          {currentBoard === 'Testimonials' && <Testimonial />}
          {currentBoard === 'Users' && <User />}
          {currentBoard === 'General' && <General />}
          {currentBoard === 'About' && <About />}
          {currentBoard === 'Contact' && <Contact />}
          {currentBoard === 'Social' && <Social />}
        </DashboardMain>
      </StyledDashboard>
    </>
  );
};

export default Dashboard;
