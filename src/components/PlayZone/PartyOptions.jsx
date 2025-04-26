import React from 'react';
import { Box, Typography } from '@mui/material';

const sectionTitleStyle = {
  fontWeight: 'bold',
  fontSize: '1.1rem',
  textAlign: "center",
  mb: 1,
  fontFamily: "'Caveat Brush', sans-serif",
};

const sectionTextStyle = {
  fontSize: '0.95rem',
  color: '#555',
  textAlign: "center",
  
};

const partyOptions = [
  {
    title: 'Birthday Parties',
    description: `Celebrate another trip around the sun with a birthday party at Delish-Licks!
      Whether you're turning 21 or 101, our restaurant is the perfect place to gather
      with friends and family to mark the occasion.`,
  },
  {
    title: 'Anniversary Celebrations',
    description: `Toast to love and commitment with an anniversary celebration at Delish-Licks.
      Whether you're celebrating one year or fifty, we provide the perfect setting for
      a romantic evening or a lively gathering with loved ones.`,
  },
  {
    title: 'Reunion Gatherings',
    description: `Reconnect with old friends and classmates with a reunion gathering. Whether
      it's a milestone reunion or just a catch-up session, our restaurant provides
      the perfect setting for reminiscing.`,
  },
  {
    title: 'Corporate Events',
    description: `Host your next corporate event or team-building activity at Delish-Licks.
      Our restaurant offers a unique setting for meetings, networking, and presentations.`,
  },
  {
    title: 'Holiday Parties',
    description: `Spread holiday cheer with a festive party at Delish-Licks. Whether it's
      Christmas, New Year's Eve, or any other holiday, we provide the perfect
      setting for a merry gathering.`,
  },
];

const PartyOptions = () => {
  return (
    <Box
      sx={{
        ml: { xs: 0, md: '320px' },
        p: { xs: 3, md: 5 },
        backgroundColor: '#F7F7F7',
        textAlign: 'center',
      }}
    >
   
      <Typography
        variant="h6"
        align="center"
        sx={{
          textTransform: 'uppercase',
          fontWeight: 'bold',
          letterSpacing: 1,
          mb: 4,
        }}
      >
        At Delish-Licks, we offer a variety of party options.
      </Typography>

      
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 3,
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 3,
            flex: 2,
            justifyContent: 'center',
          }}
        >
          {partyOptions.map((option, index) => (
            <Box
              key={index}
              sx={{
                width: { xs: '100%', sm: '45%', md: '30%' },
                textAlign: 'left',
              }}
            >
              <Typography variant="h6" sx={sectionTitleStyle}>
                {option.title}
              </Typography>
              <Typography sx={sectionTextStyle}>{option.description}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default PartyOptions;
