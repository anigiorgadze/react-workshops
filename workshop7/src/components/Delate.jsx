import React, { useState } from 'react'
import Modal from './Modal'
import './Modal.css'

const Delate = ({ postId, onConfirm, onCancel }) => {
  const [isModalVisible, setIsModalVisible] = useState(true);

  // const handleDeleteClick = () => {
  //     setIsModalVisible(true);
  //   };

  const handleConfirm = () => {
    onConfirm(postId);
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    onCancel();
    setIsModalVisible(false);
  };

  return (
    <div>

      {isModalVisible && (
        <Modal>
          <div className="modal-overlay">
            <div className="modal-content"> 
              <p>Are you sure you want to delete this post?</p>
              <button onClick={handleConfirm}>Yes</button>
              <button onClick={handleCancel}>Cancel</button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  )
}

export default Delate
