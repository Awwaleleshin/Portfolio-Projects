import React from 'react'
import { Box } from '@mui/material'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'

import BodyPart from './BodyPart'
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart }) => {
  return (
    <ScrollMenu>
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
        >
          <BodyPart
            item={item}
            bodyPart={bodyPart}
            setBodyPart={setBodyPart} />
        </Box>
      ))}
    </ScrollMenu>
  );
}

export default HorizontalScrollbar