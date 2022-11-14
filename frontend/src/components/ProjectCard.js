import { CardContent, Typography, CardActionArea } from '@mui/material';
import StyledProjectCard from './styled/StyledProjectCard';
import { forwardRef } from 'react';

const ProjectCard = forwardRef((props, ref) => {
  const { cardImage, cardTitle, cardText } = props;

  return (
    <StyledProjectCard ref={ref}>
      <CardActionArea>
        <img className='cardImage' src={cardImage} alt='card img' />
        <CardContent className='cardContent'>
          <Typography className='cardTitle' gutterBottom variant='h5' component='div'>
            {cardTitle}
          </Typography>
          <Typography className='cardText' variant='body2' color='text.secondary'>
            {cardText}
          </Typography>
        </CardContent>
      </CardActionArea>
    </StyledProjectCard>
  );
});

export default ProjectCard;
