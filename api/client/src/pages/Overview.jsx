/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Heading, Flex, Stack, Grid, Text } from '@chakra-ui/react';
import Form from '../components/Form';
import CardItem from '../components/CardItem';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCompany } from '../redux/apiCall';

const Overview = () => {
  const company = useSelector((state) => state.company);
  const dispatch = useDispatch();

  useEffect(() => {
    getAllCompany(dispatch);
  }, [dispatch]);

  return (
    <section id="overview">
      <Heading mt={4}>ProSpace</Heading>
      <Flex flexWrap="wrap">
        <Form />
        <Form isOffice />
      </Flex>
      <Stack mt={10}>
        <Heading mb={5}>Companies</Heading>
        <Grid
          templateColumns="repeat(auto-fill, minmax(255px, 355px))"
          gap={6}
          gridGap={6}
          justifyContent={['center', 'left']}
        >
          {company.companies?.length !== 0 ? (
            company.companies?.map((item, i) => (
              <CardItem key={i} data={item} />
            ))
          ) : (
            <Text as="h2">There is no companies created yet</Text>
          )}
        </Grid>
      </Stack>
    </section>
  );
};

export default Overview;
