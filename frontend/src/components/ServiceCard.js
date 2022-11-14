import { CardContent, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import StyledCardActionArea from './styled/StyledCardActionArea';
import { forwardRef } from 'react';

const ServiceCard = forwardRef((props, ref) => {
  const { cardIcon, cardTitle, cardText } = props;

  return (
    <StyledCardActionArea ref={ref}>
      <CardContent className='CardContent'>
        <div className='CardContentWrapper'>
          {cardIcon}
          <Typography className='CardTitle' gutterBottom variant='h4' component='div'>
            {cardTitle}
          </Typography>
          <Typography className='CardText' color='text.secondary'>
            {cardText}
          </Typography>
          <div className='ArrowIcon'>
            <ArrowForwardIcon sx={{ color: 'var(--mainOrange)', fontSize: '2rem' }} />
          </div>
        </div>
      </CardContent>
    </StyledCardActionArea>
  );
});

export default ServiceCard;
