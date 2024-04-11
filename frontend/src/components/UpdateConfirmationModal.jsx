import React from 'react';

const UpdateConfirmationModal = ({ isOpen, onClose, onConfirm }) => {
  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <p>Are you sure you want to update this goal?</p>
        <button onClick={onConfirm} style={{color: "white"}}>Confirm</button>
        <button onClick={onClose} style={{color: "black"}}>Cancel</button>
      </div>
    </div>
  );
};

export default UpdateConfirmationModal;
