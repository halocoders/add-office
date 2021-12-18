import { useState } from 'react';
import {
  Stack,
  Flex,
  Input,
  FormLabel,
  FormControl,
  Container,
  Select,
  Heading,
  Button,
  useToast,
} from '@chakra-ui/react';
import PhoneInput from 'react-phone-number-input';
import DatePicker from 'react-datepicker';
import ErrorCustom from '../atoms/ErrorCustom';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';
import 'react-phone-number-input/style.css';
import { useDispatch, useSelector } from 'react-redux';
import { addNewCompany } from '../redux/apiCall';
import { addNewOffice } from '../redux/apiOfficeCall';

// initial value
const initialCompany = {
  address: '',
  name: '',
  revenue: '',
};
const initialOffice = {
  name: '',
  locationLat: '',
  locationLong: '',
  officeStart: '',
  company: '',
};

export default function FormC({ isOffice }) {
  const [valCompany, setValCompany] = useState(initialCompany);
  const [valOffice, setValOffice] = useState(initialOffice);
  const [errorComp, setErrorComp] = useState(false);
  const [errorOffice, setErrorOffice] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [pickDate, setPickDate] = useState();
  const [inNumberPhone, setInNumberPhone] = useState('');

  const toast = useToast();
  const dispatch = useDispatch();
  const company = useSelector((state) => state.company);
  const office = useSelector((state) => state.office);

  // handle on input change
  const handleInput = (e) => {
    const { name, value } = e.target;
    setErrorComp(false);
    setErrorOffice(false);

    if (isOffice) {
      setValOffice({
        ...valOffice,
        officeStart: pickDate,
        [name]: value,
      });
    } else {
      setValCompany({
        ...valCompany,
        [name]: value,
      });
    }
  };

  // create company
  const handleCreateCompany = () => {
    setErrorComp(false);
    if (valCompany && inNumberPhone) {
      const company = { ...valCompany, phoneNumber: inNumberPhone };
      addNewCompany(toast, company, dispatch);
      setValCompany(initialCompany);
      setInNumberPhone('');
    } else {
      toast({
        position: 'top',
        title: `Please fill in all input`,
        status: 'error',
        isClosable: true,
      });
    }
  };

  // create office
  const handleCreateOffice = () => {
    setErrorOffice(false);
    if (valOffice) {
      const office = { ...valOffice };
      addNewOffice(toast, office, dispatch);
      setValOffice(initialOffice);
      setStartDate(new Date());
    } else {
      setErrorOffice(true);
    }
  };

  // handle for input number must positive
  const handleIsNumber = (e) => {
    e.target.value < 0 ? (e.target.value = '') : handleInput(e);
  };
  // handle office start date to human readible
  const handleDate = async (value) => {
    setStartDate(value);
    const changeDateFormat = await moment(value).format('DD/MM/YYYY');
    setPickDate(changeDateFormat);
  };

  return (
    <Container mt={10} minW={275} maxW={{ md: '52ch', lg: '60ch' }}>
      <Heading mb={4}>{isOffice ? 'Create Office' : 'Create Company'}</Heading>
      {errorComp ? <ErrorCustom /> : null}
      {errorOffice ? <ErrorCustom /> : null}
      <FormControl>
        <FormLabel>Name:</FormLabel>
        <Input
          name="name"
          value={isOffice ? valOffice.name : valCompany.name}
          placeholder="Name"
          onChange={handleInput}
        />
        <FormLabel>{isOffice ? 'Location:' : 'Address:'}</FormLabel>
        {isOffice ? (
          <Flex>
            <Input
              type="number"
              value={valOffice.locationLat}
              name="locationLat"
              placeholder="latitude"
              onChange={(e) => handleIsNumber(e)}
            />
            <Input
              type="number"
              value={valOffice.locationLong}
              name="locationLong"
              placeholder="longitude"
              onChange={(e) => handleIsNumber(e)}
            />
          </Flex>
        ) : (
          <Input
            name="address"
            value={valCompany.address}
            placeholder="Address"
            onChange={handleInput}
          />
        )}
        <FormLabel>{isOffice ? 'Office Start Date:' : 'Revenue:'}</FormLabel>
        {isOffice ? (
          <DatePicker
            selected={startDate}
            showMonthDropdown
            showYearDropdown
            onChange={(value) => handleDate(value)}
          />
        ) : (
          <Input
            name="revenue"
            value={valCompany.revenue}
            placeholder="Revenue"
            type="number"
            onChange={(e) => handleIsNumber(e)}
          />
        )}
        <Stack>
          <FormLabel>{isOffice ? 'Company:' : 'Phone No:'}</FormLabel>
          {isOffice ? (
            <Select
              name="company"
              onChange={handleInput}
              value={valOffice.company}
            >
              <option value="" disabled="disabled">
                Select Company
              </option>
              {company.companies?.map((item, i) => (
                <option value={item.name} key={i}>
                  {item.name}
                </option>
              ))}
            </Select>
          ) : (
            <Flex>
              <PhoneInput
                placeholder="Enter phone number"
                name="numberPhone"
                value={inNumberPhone}
                onChange={setInNumberPhone}
              />
            </Flex>
          )}
        </Stack>
        <Button
          width="100%"
          mt={4}
          type="submit"
          isLoading={company.loading || office.loading}
          onClick={isOffice ? handleCreateOffice : handleCreateCompany}
        >
          Create
        </Button>
      </FormControl>
    </Container>
  );
}
