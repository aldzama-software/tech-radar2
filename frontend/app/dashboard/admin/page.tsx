'use client';

import { useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Lock, Key, Shield, Activity } from 'lucide-react';

interface AuthMethod {
  id: string;
  name: string;
  enabled: boolean;
  icon: React.ReactNode;
}

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<'auth' | 'access' | 'sessions'>('auth');
  const [authMethods, setAuthMethods] = useState<AuthMethod[]>([
    { id: 'password', name: 'Password Login', enabled: true, icon: <Lock size={18} /> },
  ]);

  const handleToggleAuth = (id: string) => {
    setAuthMethods(prev =>
      prev.map(method =>
        method.id === id ? { ...method, enabled: !method.enabled } : method
      )
    );
  };

  const tabs = [
    { id: 'auth' as const, label: 'Authentication', icon: <Lock size={18} /> },
    { id: 'access' as const, label: 'Access Control', icon: <Shield size={18} /> },
    { id: 'sessions' as const, label: 'Active Sessions', icon: <Activity size={18} /> },
  ];

  return (
    <AdminLayout
      title="Admin Panel"
      breadcrumbs={[{ label: 'Admin' }]}
    >
      {/* Tabs */}
      <div className="mb-6">
        <div className="flex gap-4 border-b border-[#E5E7EB]">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-3 border-b-2 font-medium text-sm transition-all ${
                activeTab === tab.id
                  ? 'border-[#1A73E8] text-[#1A73E8]'
                  : 'border-transparent text-[#6B7280] hover:text-[#1C1C1E]'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Authentication Tab */}
      {activeTab === 'auth' && (
        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-bold text-[#1C1C1E] mb-4">Authentication Methods</h2>
            <div className="space-y-3">
              {authMethods.map((method) => (
                <div key={method.id} className="card p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-[#1A73E8]">{method.icon}</div>
                    <div>
                      <p className="font-medium text-[#1C1C1E]">{method.name}</p>
                      <p className="text-xs text-[#6B7280]">
                        {method.enabled ? 'Enabled' : 'Disabled'}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleToggleAuth(method.id)}
                    className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
                      method.enabled ? 'bg-[#16A34A]' : 'bg-[#E5E7EB]'
                    }`}
                  >
                    <span
                      className={`inline-block h-6 w-6 transform rounded-full bg-white shadow-sm transition-transform ${
                        method.enabled ? 'translate-x-7' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="card p-6">
            <h3 className="font-bold text-[#1C1C1E] mb-4 flex items-center gap-2">
              <Key size={18} />
              Password Policy
            </h3>
            <div className="space-y-4">
              <div>
                <label className="flex items-center gap-2 mb-2">
                  <input type="checkbox" defaultChecked className="w-4 h-4" />
                  <span className="text-sm text-[#1C1C1E]">Minimum 8 characters</span>
                </label>
              </div>
              <div>
                <label className="flex items-center gap-2 mb-2">
                  <input type="checkbox" defaultChecked className="w-4 h-4" />
                  <span className="text-sm text-[#1C1C1E]">Require uppercase letters</span>
                </label>
              </div>
              <div>
                <label className="flex items-center gap-2 mb-2">
                  <input type="checkbox" defaultChecked className="w-4 h-4" />
                  <span className="text-sm text-[#1C1C1E]">Require numbers & special characters</span>
                </label>
              </div>
              <div>
                <label className="text-sm text-[#1C1C1E] block mb-1">
                  Password expiry (days)
                </label>
                <input type="number" defaultValue="90" className="w-24" />
              </div>
              <button className="btn btn-primary mt-4">Save Settings</button>
            </div>
          </div>
        </div>
      )}

      {/* Access Control Tab */}
      {activeTab === 'access' && (
        <div className="space-y-6">
          <div className="card p-6">
            <h2 className="text-lg font-bold text-[#1C1C1E] mb-4 flex items-center gap-2">
              <Shield size={20} />
              Role Permissions
            </h2>
            <div className="overflow-x-auto">
              <table>
                <thead>
                  <tr>
                    <th>Role</th>
                    <th>Users</th>
                    <th>Permissions</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="font-medium">Admin</td>
                    <td className="text-[#6B7280]">5</td>
                    <td><span className="badge badge-blue">Full Access</span></td>
                    <td>
                      <button className="text-[#1A73E8] hover:underline text-sm">Edit</button>
                    </td>
                  </tr>
                  <tr>
                    <td className="font-medium">Executive</td>
                    <td className="text-[#6B7280]">12</td>
                    <td><span className="badge badge-purple">Custom</span></td>
                    <td>
                      <button className="text-[#1A73E8] hover:underline text-sm">Edit</button>
                    </td>
                  </tr>
                  <tr>
                    <td className="font-medium">Project Manager</td>
                    <td className="text-[#6B7280]">8</td>
                    <td><span className="badge badge-amber">Limited</span></td>
                    <td>
                      <button className="text-[#1A73E8] hover:underline text-sm">Edit</button>
                    </td>
                  </tr>
                  <tr>
                    <td className="font-medium">Tech</td>
                    <td className="text-[#6B7280]">25</td>
                    <td><span className="badge badge-teal">View Only</span></td>
                    <td>
                      <button className="text-[#1A73E8] hover:underline text-sm">Edit</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Active Sessions Tab */}
      {activeTab === 'sessions' && (
        <div className="card p-6">
          <h2 className="text-lg font-bold text-[#1C1C1E] mb-4 flex items-center gap-2">
            <Activity size={20} />
            Active User Sessions
          </h2>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>User</th>
                  <th>IP Address</th>
                  <th>Device</th>
                  <th>Login Time</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-medium">Alice Johnson</td>
                  <td className="text-[#6B7280]">192.168.1.100</td>
                  <td className="text-[#6B7280]">Chrome / Windows</td>
                  <td className="text-[#6B7280]">10:30 AM</td>
                  <td><span className="badge badge-green">Active</span></td>
                  <td>
                    <button className="text-[#DC2626] hover:underline text-sm">Revoke</button>
                  </td>
                </tr>
                <tr>
                  <td className="font-medium">Bob Williams</td>
                  <td className="text-[#6B7280]">192.168.1.101</td>
                  <td className="text-[#6B7280]">Safari / macOS</td>
                  <td className="text-[#6B7280]">09:15 AM</td>
                  <td><span className="badge badge-green">Active</span></td>
                  <td>
                    <button className="text-[#DC2626] hover:underline text-sm">Revoke</button>
                  </td>
                </tr>
                <tr>
                  <td className="font-medium">Carol Davis</td>
                  <td className="text-[#6B7280]">192.168.1.102</td>
                  <td className="text-[#6B7280]">Firefox / Linux</td>
                  <td className="text-[#6B7280]">08:45 AM</td>
                  <td><span className="badge badge-green">Active</span></td>
                  <td>
                    <button className="text-[#DC2626] hover:underline text-sm">Revoke</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}
