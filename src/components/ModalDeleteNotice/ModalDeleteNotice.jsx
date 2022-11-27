import PropTypes from 'prop-types';
import { MainButton, ModalBtnClose, SpinnerFixed } from 'components';
import { toast } from 'react-toastify';
import { useRemovePrivateNoticeMutation } from 'redux/noticesApi';
import {
  ModalContainer,
  TittleModal,
  BtnBox,
} from './ModalDeleteNotice.styled';

export const ModalDeleteNotice = ({ id, closeModal }) => {
  const [removePrivateNotice, { isLoading }] = useRemovePrivateNoticeMutation();

  const handleDelete = async () => {
    try {
      await removePrivateNotice(id).unwrap();
      toast.success('Successfully removed');
    } catch (error) {
      if (error.status === 401) {
        toast.error(error.data.message);
      }
      if (error.originalStatus === 404) {
        toast.error('Resourses not found');
      }
      if (error.status === 500) {
        toast.error('Server not response');
      }
    } finally {
      closeModal();
    }
  };

  return (
    <ModalContainer>
      <TittleModal>Are you sure you want to delete it?</TittleModal>
      <BtnBox>
        <MainButton disabled={isLoading} onClick={() => handleDelete()}>
          DELETE
        </MainButton>
        <MainButton option={'black'} onClick={() => closeModal()}>
          CANCEL
        </MainButton>
      </BtnBox>
      <ModalBtnClose toggleModal={closeModal} />
      {isLoading && <SpinnerFixed />}
    </ModalContainer>
  );
};

ModalDeleteNotice.propTypes = {
  id: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};
