import { Heading, Stack, Box, Text, Flex, Spacer } from '@chakra-ui/react';
import { BiTrashAlt } from 'react-icons/bi';
import { useState } from 'react';
import ModalComponent from '../atoms/ModalComponent';

export default function CardOffice({ data }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" padding={5}>
      <Flex>
        <Heading as="h4" size="lg" isTruncated mb={3}>
          {data?.name}
        </Heading>
        <Spacer />
        <button onClick={() => setShowModal(!showModal)}>
          <BiTrashAlt className="text-2xl hover:text-red-500 transition-all" />
        </button>
        <ModalComponent
          isOpen={showModal}
          onClose={() => setShowModal(!showModal)}
          isOffice
          data={data?._id}
        />
      </Flex>
      <hr />
      <Stack id="information" mt={3}>
        <Heading as="h6" size="sm">
          Location
        </Heading>
        <Text>
          Lat : <span>{data?.locationLat}</span>
        </Text>
        <Text pb={3}>
          Long : <span>{data?.locationLong}</span>
        </Text>
        <Heading as="h6" size="sm">
          Office Start Date
        </Heading>
        <Text pb={3}>{data?.officeStart}</Text>
      </Stack>
    </Box>
  );
}
