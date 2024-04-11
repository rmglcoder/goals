import React, { useState } from "react";
import { TrashIcon, PencilSquareIcon } from '@heroicons/react/24/solid';
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import UpdateConfirmationModal from "./UpdateConfirmationModal"; // Import the new update confirmation modal

const AssetCard = ({ asset }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [updatedAsset, setUpdatedAsset] = useState({ ...asset });
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [completed, setCompleted] = useState(asset.completed);
    const [showToggleModal, setShowToggleModal] = useState(false);

    const handleDelete = async () => {
        const response = await fetch('/api/assets/' + asset._id, {
            method: 'DELETE'
        });
        const json = await response.json();

        if (response.ok) {
            // Remove asset from UI
            setIsDeleteModalOpen(false);
        }
    };

    const openDeleteModal = () => {
        setIsDeleteModalOpen(true);
    };

    const closeDeleteModal = () => {
        setIsDeleteModalOpen(false);
    };

    const toggleCompleted = () => {
        setShowToggleModal(true);
    };

    const handleToggleModalConfirmation = (confirmed) => {
        setShowToggleModal(false);
        if (confirmed) {
            // Toggle completion status
            const updatedAssetData = { ...asset, completed: !completed };
            fetch(`/api/assets/${asset._id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedAssetData),
            }).then(response => {
                if (response.ok) {
                    // Update completion status locally
                    setCompleted(!completed);
                } else {
                    console.error('Failed to update completion status');
                }
            }).catch(error => {
                console.error('Error updating completion status:', error);
            });
        }
    };

    if (isEditing) {
        return (
            <div className="asset-card editing">
                {/* Editing view */}
            </div>
        );
    }

    return (
        <div className="asset-card">
            {/* Display view */}
        </div>
    );
};

export default AssetCard;
