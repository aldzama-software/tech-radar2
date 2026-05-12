'use client';

import AdminLayout from '@/components/admin/AdminLayout';
import { Settings as SettingsIcon, Bell, Moon, Eye } from 'lucide-react';

export default function SettingsPage() {
  return (
    <AdminLayout
      title="Settings"
      breadcrumbs={[{ label: 'Settings' }]}
    >
      <div className="max-w-2xl space-y-6">
        {/* General Settings */}
        <div className="card p-6">
          <h2 className="font-bold text-lg text-[#1C1C1E] mb-4 flex items-center gap-2">
            <SettingsIcon size={20} />
            General Settings
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[#1C1C1E] mb-1">
                Application Name
              </label>
              <input type="text" defaultValue="Tech Radar" />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1C1C1E] mb-1">
                Default Timezone
              </label>
              <select>
                <option>UTC</option>
                <option>EST</option>
                <option>PST</option>
              </select>
            </div>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="card p-6">
          <h2 className="font-bold text-lg text-[#1C1C1E] mb-4 flex items-center gap-2">
            <Bell size={20} />
            Notifications
          </h2>
          <div className="space-y-3">
            <label className="flex items-center gap-3">
              <input type="checkbox" defaultChecked className="w-4 h-4" />
              <span className="text-sm text-[#1C1C1E]">Email notifications</span>
            </label>
            <label className="flex items-center gap-3">
              <input type="checkbox" defaultChecked className="w-4 h-4" />
              <span className="text-sm text-[#1C1C1E]">Security alerts</span>
            </label>
            <label className="flex items-center gap-3">
              <input type="checkbox" className="w-4 h-4" />
              <span className="text-sm text-[#1C1C1E]">Weekly summary</span>
            </label>
          </div>
        </div>

        {/* Display Settings */}
        <div className="card p-6">
          <h2 className="font-bold text-lg text-[#1C1C1E] mb-4 flex items-center gap-2">
            <Eye size={20} />
            Display
          </h2>
          <div className="space-y-4">
            <label className="flex items-center gap-3">
              <input type="radio" name="theme" defaultChecked className="w-4 h-4" />
              <span className="text-sm text-[#1C1C1E]">Light Mode</span>
            </label>
            <label className="flex items-center gap-3">
              <input type="radio" name="theme" className="w-4 h-4" />
              <span className="text-sm text-[#1C1C1E]">Dark Mode</span>
            </label>
          </div>
        </div>

        <button className="btn btn-primary">
          Save Settings
        </button>
      </div>
    </AdminLayout>
  );
}
