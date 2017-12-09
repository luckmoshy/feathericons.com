import React from 'react';
import { Box } from 'grid-styled';

import Heading from './Heading';

function Masthead(props) {
  return (
    <Box {...props}>
      <Heading>Simply beautiful open source icons</Heading>
    </Box>
  );
}

export default Masthead;
