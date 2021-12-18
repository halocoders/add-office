import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
// import { deleteAllByCompany, deleteOffice } from '../redux/officeRedux';
import { deleteCompany } from '../redux/apiCall';
import { deleteOffice } from '../redux/apiOfficeCall';

export default function ModalComponent({ isOpen, onClose, data, isOffice }) {
  const dispatch = useDispatch();

  const handleDeleteCompany = async () => {
    deleteCompany(data._id, dispatch);
    onClose();
  };
  const handleDeleteOffice = async () => {
    deleteOffice(data, dispatch);
    onClose();
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Delete {isOffice ? 'Office' : 'Company'}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          Are you sure to delete this {isOffice ? 'Office' : 'Company'} ?
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Cancel
          </Button>
          {isOffice ? (
            <Button variant="primary" onClick={handleDeleteOffice}>
              Delete
            </Button>
          ) : (
            <Button variant="ghost" onClick={handleDeleteCompany}>
              Delete
            </Button>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
