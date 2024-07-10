import React, { useEffect, useState } from 'react'
import { Pagination } from '@mui/material/Pagination'
import { Box, Stack, Typography } from '@mui/material'

import { exerciseOptions, fetchData } from '../utils/FetchData'

const Excercises = ({ exercises, setExercises, bodyPart}) => {
  return (
    <Box id='exercises'
      sx={{mt: { l: '110px'}}}
      mt='50px'
      p='20px'
    >
      <Typography>
        Showing Results
      </Typography>
    </Box>
  )
}

export default Excercises