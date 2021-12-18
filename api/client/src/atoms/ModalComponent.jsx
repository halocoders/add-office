import React from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { deleteCompany } from '../redux/apiCall';
import { deleteAllOffice, deleteOffice } from '../redux/apiOfficeCall';
import { useToast } from '@chakra-ui/react'

export default function ModalComponent({ isOpen, onClose, data, isOffice }) {
  const dispatch = useDispatch();
  const toast = useToast();

  const handleDeleteCompany = async () => {
    deleteCompany(toast, data._id, dispatch);
    deleteAllOffice(toast, data.name)
    onClose();
  };
  const handleDeleteOffice = async () => {
    deleteOffice(toast, data, dispatch);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Delete {isOffice ? 'Office' : 'Company'}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          Are you sure to delete this {isOffice ? 'Office' : 'Company'} ?<br />
          {!isOffice && 'When you delete this company, the entire office under the company will be deleted too'}
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
