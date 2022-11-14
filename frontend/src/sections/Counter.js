import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import GroupsIcon from '@mui/icons-material/Groups';
import CheckIcon from '@mui/icons-material/Check';
import BlackContainer from '../components/BlackContainer';
import CounterCard from '../components/CounterCard';
import CounterCardsContainer from '../components/styled/CounterCardsContainer';
import { useFetch } from '../hooks/useFetch';
import { motion } from 'framer-motion';
import { useRef, useContext } from 'react';
import { DataContext } from '../admin/contexts/DataContext';

const Counter = () => {
  const { rootURL } = useContext(DataContext);
  const baseURL = `${rootURL}/api/setting`;
  const { data: aboutData } = useFetch(baseURL);
  const MotionCounterCard = motion(CounterCard);
  const counterCardRef = useRef();

  return (
    <BlackContainer>
      <CounterCardsContainer>
        {aboutData && (
          <>
            <MotionCounterCard
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 * 0 }}
              ref={counterCardRef}
              cardIcon={<WbSunnyOutlinedIcon sx={{ color: 'var(--mainOrange)', fontSize: '8rem' }} />}
              cardNumber={aboutData.data.attributes.YearsExperience}
              cardTitle='Years Experience'
            />
            <MotionCounterCard
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 * 1 }}
              ref={counterCardRef}
              cardIcon={<ManageAccountsIcon sx={{ color: 'var(--mainOrange)', fontSize: '8rem' }} />}
              cardNumber={aboutData.data.attributes.TeamMembers}
              cardTitle='Team Members'
            />
            <MotionCounterCard
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 * 2 }}
              ref={counterCardRef}
              cardIcon={<GroupsIcon sx={{ color: 'var(--mainOrange)', fontSize: '8rem' }} />}
              cardNumber={aboutData.data.attributes.SatisfiedClients}
              cardTitle='Satisfied Clients'
            />
            <MotionCounterCard
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 * 3 }}
              ref={counterCardRef}
              cardIcon={<CheckIcon sx={{ color: 'var(--mainOrange)', fontSize: '8rem' }} />}
              cardNumber={aboutData.data.attributes.CompletedProjects}
              cardTitle='Complete Projects'
            />
          </>
        )}
      </CounterCardsContainer>
    </BlackContainer>
  );
};

export default Counter;
