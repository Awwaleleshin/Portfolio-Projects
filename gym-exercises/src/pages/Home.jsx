import React, { useState } from 'react';
import { Box } from '@mui/material';

import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Excercises from '../components/Excercises';

const Home = () => {
  const aaa = process.env.REACT_APP_RAPID_API_KEY
  console.log(aaa)
  return (
    <Box>
      <HeroBanner />
      <SearchExercises />
      <p>Code: {import.meta.env}</p>
      <Excercises />
    </Box>
  )
}

export default Home