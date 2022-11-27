import { useEffect, useRef } from 'react';


export const ModalOurFriend = ({ children, toggleModal }) => {
    const isMounted = useRef(false);

    useEffect(() => {
        const handleKeyDown = e => {
            if (e.code === 'Escape') {
              toggleModal();
            }
          };

        isMounted.current = true;
        window.addEventListener('keydown', handleKeyDown);
        
        return () => {
        window.removeEventListener('keydown', handleKeyDown);
        };
    },[toggleModal]);

    

    const handleBackdropClick = e => {
        if (e.target === e.currentTarget) {
            toggleModal();
        }
    };

  return (
    <div 
    onClick={handleBackdropClick}
    mounted={isMounted.current.toString()}
    >
        {children}
    </div>
   
  );
}




