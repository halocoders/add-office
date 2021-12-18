import { Box, Skeleton, SkeletonText, Stack } from '@chakra-ui/react';

export const SkeletonComponent = (props) => {
  const { isOffice, hOffice, hasMb } = props
  if (isOffice) {
    return (
      <Skeleton height={hOffice} width="100%" mb={hasMb ? 3 : 0} />
    )
  } else {
    return (
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" padding={5}>
        <Stack mb={3}>
          <Skeleton height={50} />
        </Stack>
        <hr />
        <Stack id="information" mt={3}>
          <SkeletonText height={20} />
          <SkeletonText height={10} />
        </Stack>
      </Box>
    );
  }
};
