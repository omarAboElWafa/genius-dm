import { Card, CardContent, Typography, CardActionArea } from '@mui/material';
import { forwardRef } from 'react';

const AboutCard = forwardRef((props, ref) => {
  const { cardIcon, cardTitle } = props;

  return (
    <Card sx={{ maxWidth: 345 }} ref={ref}>
      <CardActionArea sx={{ padding: '1rem' }}>
        <CardContent sx={{ textAlign: 'center' }}>
          {cardIcon}
          <Typography sx={{ fontFamily: 'var(--enFont)', fontWeight: 'bold', margin: '1rem auto' }} gutterBottom variant='h4' component='div'>
            {cardTitle}
          </Typography>
          <Typography sx={{ fontFamily: 'var(--enFont)', fontSize: '1.6rem' }} color='text.secondary'>
            Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
});

export default AboutCard;
