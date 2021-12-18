import React from 'react';
import { Alert, AlertIcon, AlertDescription } from '@chakra-ui/react';

export default function ErrorCustom() {
  return (
    <Alert status="error" mb={4}>
      <AlertIcon />
      <AlertDescription>Please input all fields</AlertDescription>
    </Alert>
  );
}
