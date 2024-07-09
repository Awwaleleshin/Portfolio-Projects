import React from 'react'
import { Stack, Typography } from '@mui/material'

import icon from '../assets/icons/gym.png'

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack
        type='button'
        alignContent='center'
        alignItems='center'
        className='bodyPart-card'
        sx={
          bodyPart === item ? 
          { borderTop: '4px solid #FF2625', background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' } : 
          { background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' }}
            onClick={() => {
              setBodyPart(item)
            }}
    >
        <img src={icon} alt="dumbell" 
          style={{width: '40px', height: '40px'}} />
          
          <Typography fontSize='24px' fontWeight='bold' color='#3A1212' textTransform='capitalize'>{item}</Typography>
    </Stack>
  )
}

export default BodyPart