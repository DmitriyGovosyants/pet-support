export const NoticeModal = ({ toggleModal }) => {
  return (
    <>
      <div>NoticeModal MODAL OPEN</div>
      <button type="button" onClick={() => toggleModal()}>
        CLOSE MODAL
      </button>
    </>
  );
};
