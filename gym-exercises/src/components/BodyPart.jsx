import React from 'react'
import { Stack, Typography } from '@mui/material'

import icon from '../assets/icons/gym.png'

const BodyPart = () => {
  return (
    <Stack
        type='button'
        alignContent='center'
        alignItems='center'
        className='bodyPart-card'
    >
        <img src={icon} alt="dumbell" style={{width: '40px', height: '40px'}} />
    </Stack>
  )
}

export default BodyPart