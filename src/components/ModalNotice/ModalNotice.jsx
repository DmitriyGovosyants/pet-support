export const ModalNotice = ({ toggleModal }) => {
  return (
    <>
      <div>ModalNotice</div>
      <button type="button" onClick={() => toggleModal()}>
        CLOSE MODAL
      </button>
    </>
  );
};
