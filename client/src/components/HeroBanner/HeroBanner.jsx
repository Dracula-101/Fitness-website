import React from 'react';
import { Typography, Stack, Box } from '@mui/material';
import HeroBannerImg from '../../assets/images/banner.jpg';
import './HeroBanner.css';

const HeroBanner = () => {
  return (
    <div className='Hero_banner'>
      <Box sx={{
        mt: { lg: '120px', xs: '70px' },
        ml: { sm: '50px' }
      }} position="relative" p="20px">

        <Typography color="#ffb700" fontWeight={600} fontSize="26px">
          Fitness Mania Club
        </Typography>

        <Typography fontWeight={700} color='#b2becd' sx={{ fontSize: { lg: '54px', xs: '40px' } }}>
          Sweat, Smile <br /> And Exercise
        </Typography>

        <Typography fontSize="22px" color='#dbe1e8' lineHeight="35px" mb={4}>
          Check out the most effective exercises
        </Typography>

        <Stack>
          <a href="#exercises" style={{ marginTop: '200px', textDecoration: 'none', width: 'max-content', textAlign: 'center', background: '#ffb700', padding: '14px', fontSize: '22px', textTransform: 'none', color: '#dbe1e8', borderRadius: '4px' }}>Explore Exercises</a>
        </Stack>
        <Typography fontWeight={600} color="#ffb700" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px', textAlign: 'center' }}>
          Exercise
        </Typography>
        <img src={HeroBannerImg} alt="hero-banner" className="hero-banner-img" />
      </Box>
    </div>

  )
}

export default HeroBanner