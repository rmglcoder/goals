import React from 'react';

const DeleteConfirmationModal = ({ isOpen, onClose, onConfirm }) => {
  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <p>Are you sure you want to delete this goal?</p>
        <button onClick={onConfirm} style={{color: "white"}}>Yes, delete</button>
        <button onClick={onClose} style={{color: "black"}}>Cancel</button>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
