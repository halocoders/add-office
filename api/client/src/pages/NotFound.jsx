import { Heading } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  console.log('not found');
  return (
    <div>
      <Heading>Not Found!</Heading>
      <Link to="/">Back to Overview Page</Link>
    </div>
  );
};

export default NotFound;
