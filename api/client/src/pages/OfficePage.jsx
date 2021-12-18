import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { Grid, Heading, Text } from '@chakra-ui/react';
import CardItem from '../components/CardItem';
import CardOffice from '../components/CardOffice';
import { getOfficeByCompany } from '../redux/apiOfficeCall';
import { getOneCompany } from '../redux/apiCall';
import { SkeletonComponent } from '../atoms/SkeletonComponent';

const OfficePage = () => {
  const location = useLocation();
  const companyName = location.pathname.split('/')[2];

  const dispatch = useDispatch();
  const office = useSelector((state) => state.office);
  const companies = useSelector((state) => state.company.oneCompany);

  useEffect(() => {
    getOneCompany(companyName, dispatch);
    getOfficeByCompany(`company=${companyName}`, dispatch);
  }, [dispatch, companyName]);

  return (
    <section id="office-page" className="mt-11">
      <Heading mb={5}>Office Page</Heading>
      {companies && <CardItem isOffice dataOffice={companies} />}
      <Grid templateColumns="repeat(auto-fill, minmax(255px, 345px))" gridGap={6} mt={6} justifyContent={['center', 'left']} >
        {office.loading ? (
          <SkeletonComponent />
        ) : office.offices.length !== 0 ? (
          office.offices.map((item, i) => <CardOffice data={item} key={i} />)
        ) : (
          <Text as="h2">There is no offices created yet</Text>
        )}
      </Grid>
    </section>
  );
};

export default OfficePage;
