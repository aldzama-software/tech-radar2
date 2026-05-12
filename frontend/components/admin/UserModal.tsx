'use client';

import { useState, useEffect } from 'react';
import { X, Eye, EyeOff } from 'lucide-react';
import { User, UserRole, PermissionType, PERMISSIONS } from '@/types/admin';

interface UserModalProps {
  isOpen: boolean;
  user?: User;
  onClose: () => void;
  onSave: (userData: Partial<User>) => void;
  isLoading?: boolean;
}

export default function UserModal({
  isOpen,
  user,
  onClose,
  onSave,
  isLoading = false,
}: UserModalProps) {
  const [formData, setFormData] = useState<Partial<User>>({
    fullName: '',
    email: '',
    role: 'Tech',
    status: 'Active',
    permissions: [],
  });
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (user) {
      setFormData(user);
    } else {
      setFormData({
        fullName: '',
        email: '',
        password: '',
        role: 'Tech',
        status: 'Active',
        permissions: [],
      });
    }
  }, [user, isOpen]);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePermissionChange = (permissionId: PermissionType) => {
    setFormData((prev) => ({
      ...prev,
      permissions: prev.permissions?.includes(permissionId)
        ? prev.permissions.filter((p) => p !== permissionId)
        : [...(prev.permissions || []), permissionId],
    }));
  };

  const handleStatusToggle = () => {
    setFormData((prev) => ({
      ...prev,
      status: prev.status === 'Active' ? 'Inactive' : 'Active',
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#E5E7EB]">
          <h2 className="text-lg font-bold text-[#1C1C1E]">
            {user ? 'Edit Account' : 'Create New Account'}
          </h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-[#F9FAFB] rounded transition-all"
          >
            <X size={20} className="text-[#6B7280]" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-[#1C1C1E] mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName || ''}
              onChange={handleChange}
              required
              placeholder="Enter full name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-[#1C1C1E] mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email || ''}
              onChange={handleChange}
              required
              placeholder="Enter email address"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-[#1C1C1E] mb-1">
              Password {user && '(Leave blank to keep current)'}
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password || ''}
                onChange={handleChange}
                placeholder="Enter password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-[#6B7280] hover:text-[#1C1C1E]"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Role */}
          <div>
            <label className="block text-sm font-medium text-[#1C1C1E] mb-1">
              Role
            </label>
            <select
              name="role"
              value={formData.role || 'Tech'}
              onChange={handleChange}
            >
              <option value="Admin">Admin</option>
              <option value="Executive">Executive</option>
              <option value="Project Manager">Project Manager</option>
              <option value="Tech">Tech</option>
            </select>
          </div>

          {/* Status Toggle */}
          <div>
            <label className="block text-sm font-medium text-[#1C1C1E] mb-2">
              Status
            </label>
            <button
              type="button"
              onClick={handleStatusToggle}
              className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
                formData.status === 'Active'
                  ? 'bg-[#16A34A]'
                  : 'bg-[#E5E7EB]'
              }`}
            >
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-white shadow-sm transition-transform ${
                  formData.status === 'Active' ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
              <span className="absolute text-xs font-medium text-white">
                {formData.status === 'Active' ? 'ON' : 'OFF'}
              </span>
            </button>
            <p className="text-xs text-[#6B7280] mt-1">
              {formData.status === 'Active' ? 'Active' : 'Inactive'}
            </p>
          </div>

          {/* Permissions */}
          <div>
            <label className="block text-sm font-medium text-[#1C1C1E] mb-3">
              Access Permissions
            </label>
            <div className="space-y-2">
              {PERMISSIONS.map((permission) => (
                <label key={permission.id} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.permissions?.includes(permission.id) || false}
                    onChange={() => handlePermissionChange(permission.id)}
                    className="w-4 h-4 rounded border-[#E5E7EB]"
                  />
                  <span className="text-sm text-[#1C1C1E]">{permission.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 justify-end pt-4 border-t border-[#E5E7EB]">
            <button
              type="button"
              onClick={onClose}
              className="btn btn-ghost"
              disabled={isLoading}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isLoading}
            >
              {isLoading ? 'Saving...' : 'Save Account'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
