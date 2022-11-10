export const ModalAddsPet = ({ toggleModal }) => {
  return (
    <>
      <div>ADD YOUR PET</div>
      <button type="button" onClick={() => toggleModal()}>
        CLOSE MODAL
      </button>
    </>
  );
};
