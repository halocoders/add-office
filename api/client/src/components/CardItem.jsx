import {
  Heading,
  Stack,
  Box,
  Text,
  Button,
  Flex,
  Spacer,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BiTrashAlt } from 'react-icons/bi';
import { useState } from 'react';
import ModalComponent from '../atoms/ModalComponent';

export default function CardItem({ isOffice, data, dataOffice }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <Box
      maxW={isOffice ? '' : 'sm'}
      borderWidth="1px"
      borderRadius="lg"
      padding={5}
      minW={isOffice ? '255px' : ''}
    >
      <Flex>
        {data ? (
          <>
            <Link to={`/office/${data?.name}`}>
              <Heading as="h4" size="lg" isTruncated mb={3}>
                {data ? data.name : dataOffice.name}
              </Heading>
            </Link>
            <Spacer />
            <button onClick={() => setShowModal(!showModal)}>
              <BiTrashAlt className="text-2xl" />
            </button>
          </>
        ) : (
          <Heading as="h4" size="lg" isTruncated mb={3}>
            {data ? data.name : dataOffice.name}
          </Heading>
        )}
        <ModalComponent
          isOpen={showModal}
          onClose={() => setShowModal(!showModal)}
          data={data ? data : null}
        />
      </Flex>
      <hr />

      <Stack id="information" mt={3}>
        <Heading as="h6" size="sm">
          Address
        </Heading>
        <Text pb={3}>{data ? data.address : dataOffice.address}</Text>
        <Heading as="h6" size="sm">
          Revenue
        </Heading>
        <Text pb={3}>$ {data ? data.revenue : dataOffice.revenue}</Text>
        <Heading as="h6" size="sm">
          Phone No.
        </Heading>
        <Text pb={3}>{data ? data.phoneNumber : dataOffice.phoneNumber}</Text>
        {isOffice && (
          <Link to="/">
            <Button width="max-content">Back to Overview</Button>
          </Link>
        )}
      </Stack>
    </Box>
  );
}
