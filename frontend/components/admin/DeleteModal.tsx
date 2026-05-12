'use client';

import { AlertTriangle } from 'lucide-react';

interface DeleteModalProps {
  isOpen: boolean;
  userName: string;
  onConfirm: () => void;
  onCancel: () => void;
  isLoading?: boolean;
}

export default function DeleteModal({
  isOpen,
  userName,
  onConfirm,
  onCancel,
  isLoading = false,
}: DeleteModalProps) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onCancel}>
      <div className="modal-content p-6" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
            <AlertTriangle size={24} className="text-[#DC2626]" />
          </div>
        </div>

        <h2 className="text-lg font-bold text-[#1C1C1E] text-center mb-2">
          Delete Account?
        </h2>
        <p className="text-sm text-[#6B7280] text-center mb-6">
          This action cannot be undone. You're about to delete the account for{' '}
          <strong>{userName}</strong>.
        </p>

        <div className="flex gap-3 justify-end">
          <button
            onClick={onCancel}
            className="btn btn-ghost"
            disabled={isLoading}
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="btn btn-danger"
            disabled={isLoading}
          >
            {isLoading ? 'Deleting...' : 'Delete'}
          </button>
        </div>
      </div>
    </div>
  );
}
