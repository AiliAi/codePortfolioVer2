import {useState} from 'react';
import {createPortal} from 'react-dom';
import ModalContent from '../ModalContent/ModalContent';

export default function Modal() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button onClick={() => setShowModal(true)}>
        Show modal using a portal
      </button>
      {showModal &&
        createPortal(
          <ModalContent onClose={() => setShowModal(false)} />,
          document.body
        )}
    </>
  );
}
