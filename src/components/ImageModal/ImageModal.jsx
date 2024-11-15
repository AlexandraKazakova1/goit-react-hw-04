import React, { useEffect } from "react";
import ReactModal from "react-modal";

const ImageModal = ({ imageUrl, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <ReactModal
      isOpen
      onRequestClose={onClose}
      overlayClassName={styles.Overlay}
    >
      <img src={imageUrl} alt="Large view" />
    </ReactModal>
  );
};

export default ImageModal;
