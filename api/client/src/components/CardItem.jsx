import { Heading, Stack, Box, Text, Button, Flex, Spacer } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BiTrashAlt } from 'react-icons/bi';
import { useEffect, useState } from 'react';
import ModalComponent from '../atoms/ModalComponent';
import { SkeletonComponent } from '../atoms/SkeletonComponent';

export default function CardItem({ isOffice, data, dataOffice }) {
  const [showModal, setShowModal] = useState(false);
  const [load, setLoad] = useState(false)

  useEffect(() => {
    if (dataOffice) {
      const objEmpty = Object.keys(dataOffice).length === 0;
      if (objEmpty) {
        setLoad(true)
      } else {
        setLoad(false)
      }
    }
  }, [dataOffice])

  return (
    <Box maxW={isOffice ? '' : 'sm'} borderWidth="1px" borderRadius="lg" padding={5} minW={isOffice ? '255px' : ''} >
      <Flex>
        {!isOffice ? (
          <>
            <Link to={`/office/${data?.name}`}>
              <Heading as="h4" size="lg" isTruncated mb={3}>
                {data ? data.name : dataOffice.name}
              </Heading>
            </Link>
            <Spacer />
            <button onClick={() => setShowModal(!showModal)}>
              <BiTrashAlt className="text-2xl hover:text-red-500 transition-all" />
            </button>
          </>
        ) : (
          load ? <SkeletonComponent isOffice hOffice="35px" hasMb /> :
            <Heading as="h4" size="lg" isTruncated mb={3}>
              {!isOffice ? data.name : dataOffice.name}
            </Heading>
        )}
        <ModalComponent isOpen={showModal} onClose={() => setShowModal(!showModal)} data={data ? data : null} />
      </Flex>
      <hr />
      <Stack id="information" mt={3}>
        <Heading as="h6" size="sm">
          Address
        </Heading>
        {load ? <SkeletonComponent isOffice hOffice="30px" /> :
          <Text pb={3}>{!isOffice ? data.address : dataOffice.address}</Text>
        }
        <Heading as="h6" size="sm">
          Revenue
        </Heading>
        {load ? <SkeletonComponent isOffice hOffice="30px" /> :
          <Text pb={3}>$ {!isOffice ? data.revenue : dataOffice.revenue}</Text>
        }
        <Heading as="h6" size="sm">
          Phone No.
        </Heading>
        {load ? <SkeletonComponent isOffice hOffice="30px" /> :
          <Text pb={3}>{!isOffice ? data.phoneNumber : dataOffice.phoneNumber}</Text>
        }
        {isOffice && (
          <Link to="/">
            <Button width="max-content">Back to Overview</Button>
          </Link>
        )}
      </Stack>
    </Box>
  );
}
