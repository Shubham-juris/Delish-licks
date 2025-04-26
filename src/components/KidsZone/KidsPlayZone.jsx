import React from 'react';
import { Box, Typography } from '@mui/material';
import kidsImage from "../../assets/KidsZone/Kidsimg.jpg";
const KidsPlayZone = () => {
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
        sx={{ textTransform: 'uppercase', fontWeight: 'bold', letterSpacing: 1, mb: 4, fontFamily: "'Caveat Brush', sans-serif", }}
      >
        Welcome to the Kids Play Zone at Delish-Licks
      </Typography>


      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'left',
          maxWidth: '1000px',
          margin: '0 auto',
        }}
      >
        <Box sx={{ flex: 1, p: 2 }}>
          <Typography variant="body1">
            At Delish-Licks, we understand the importance of keeping our younger
            guests entertained while their grown-ups relax and enjoy their dining
            experience. That's why we've created a dedicated Kids Play Zone that's
            bursting with excitement and endless possibilities.
            <br />
            Imagine a colorful wonderland filled with interactive games, creative
            activities, and safe play areas designed to spark the imagination and
            keep little ones engaged for hours on end. From ball pits and climbing
            structures to educational toys and hands-on crafts, our Kids Play Zone
            is a haven where children can let their imaginations run wild while
            making new friends along the way.
            <br />
            Safety is our top priority, which is why our Kids Play Zone is
            carefully monitored by our attentive staff to ensure a secure and
            enjoyable environment for all. Parents can dine with peace of mind
            knowing that their children are having a blast in a supervised space
            that's just for them.
            <br />
            But the fun doesn't stop there – our Kids Play Zone is also a place
            for special events and themed activities that add an extra layer of
            excitement to the experience. From birthday parties and holiday
            celebrations to interactive storytelling sessions and arts and crafts
            workshops, there's always something fun happening at Delish-Licks.
        <br/>
        So, whether you're looking for a family-friendly dining destination or
          planning a special outing with the little ones, come and discover the
          magic of the Kids Play Zone at Delish-Licks.
   <br/>
   It's where laughter echoes, imaginations soar, and unforgettable
          memories are made. We can't wait to welcome you and your little
          adventurers to the ultimate playground of fun and flavor!

          </Typography>
        </Box>
        <Box sx={{ flex: 1, p: 2 }}>
          <img
            src={kidsImage}
            alt="Kids Play Zone"

            style={{ width: '100%', borderRadius: '10px' }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default KidsPlayZone;
