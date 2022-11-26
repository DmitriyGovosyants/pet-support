import { useEffect } from 'react';


export const ModalOurFriend = ({ children, toggleModal }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
        toggleModal();
    }
  };

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
        toggleModal();
    }
  };

  return (
    <div onClick={handleBackdropClick}>
        {children}
    </div>
   
  );
}




