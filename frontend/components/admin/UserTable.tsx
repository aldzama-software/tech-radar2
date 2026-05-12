'use client';

import { useState } from 'react';
import { Search, Edit2, Trash2 } from 'lucide-react';
import { User, ROLE_BADGE_COLOR } from '@/types/admin';

interface UserTableProps {
  users: User[];
  onEdit: (user: User) => void;
  onDelete: (user: User) => void;
}

export default function UserTable({ users, onEdit, onDelete }: UserTableProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState<string>('');

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = !roleFilter || user.role === roleFilter;
    return matchesSearch && matchesRole;
  });

  return (
    <div className="card">
      {/* Table Header */}
      <div className="p-6 border-b border-[#E5E7EB] flex items-center justify-between gap-4">
        <div className="flex-1 relative">
          <Search size={18} className="absolute left-3 top-2.5 text-[#6B7280]" />
          <input
            type="text"
            placeholder="Search by name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 w-full max-w-xs"
          />
        </div>

        <select
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
          className="max-w-xs"
        >
          <option value="">All Roles</option>
          <option value="Admin">Admin</option>
          <option value="Executive">Executive</option>
          <option value="Project Manager">Project Manager</option>
          <option value="Tech">Tech</option>
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Last Login</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#1A73E8] flex items-center justify-center text-white text-xs font-semibold">
                      {getInitials(user.fullName)}
                    </div>
                    <span className="font-medium">{user.fullName}</span>
                  </div>
                </td>
                <td className="text-[#6B7280]">{user.email}</td>
                <td>
                  <span className={`badge ${ROLE_BADGE_COLOR[user.role]}`}>
                    {user.role}
                  </span>
                </td>
                <td>
                  <span
                    className={`badge ${
                      user.status === 'Active' ? 'badge-green' : 'badge-red'
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="text-[#6B7280]">{user.lastLogin}</td>
                <td>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onEdit(user)}
                      className="p-1.5 hover:bg-[#F9FAFB] rounded transition-all text-[#6B7280] hover:text-[#1A73E8]"
                      title="Edit user"
                    >
                      <Edit2 size={16} />
                    </button>
                    <button
                      onClick={() => onDelete(user)}
                      className="p-1.5 hover:bg-red-50 rounded transition-all text-[#6B7280] hover:text-[#DC2626]"
                      title="Delete user"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Empty State */}
      {filteredUsers.length === 0 && (
        <div className="p-8 text-center">
          <p className="text-[#6B7280]">No users found matching your criteria.</p>
        </div>
      )}
    </div>
  );
}
