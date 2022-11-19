import { toast } from 'react-toastify';
//все коменты расскоментировать, после petApi
import { useDeletePetMutation } from 'redux/petApi';
import {
  ModalContainer,
  ButtonClose,
  CloseIcon,
  TittleModal,
  ButtonDel,
  ButtonCancel,
} from './ModalDelete.styled';

export const ModalDelete = ({ id, closeModal }) => {
  const [deletePet] = useDeletePetMutation();

  const handleDelete = async () => {
    try {
      await deletePet(id).unwrap();
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
      <ButtonClose type="button" onClick={() => closeModal()}>
        <CloseIcon />
      </ButtonClose>
      <TittleModal>Are you sure you want to delete it?</TittleModal>
      <ButtonDel type="button" onClick={() => handleDelete()}>
        DELETE
      </ButtonDel>
      <ButtonCancel type="button" onClick={() => closeModal()}>
        CANCEL
      </ButtonCancel>
    </ModalContainer>
  );
};
