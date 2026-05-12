'use client';

import AdminLayout from '@/components/admin/AdminLayout';
import { Briefcase } from 'lucide-react';

export default function ProjectsPage() {
  return (
    <AdminLayout
      title="Project Management"
      breadcrumbs={[{ label: 'Project Management' }]}
    >
      <div className="card p-8 text-center">
        <div className="flex justify-center mb-4">
          <div className="p-3 bg-amber-100 rounded-lg">
            <Briefcase size={32} className="text-amber-600" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-[#1C1C1E] mb-2">
          Project Management
        </h2>
        <p className="text-[#6B7280] mb-6">
          Manage projects, timelines, resources, and team assignments coming soon.
        </p>
        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mt-8">
          <div className="card p-4">
            <p className="text-2xl font-bold text-[#1A73E8]">18</p>
            <p className="text-xs text-[#6B7280] mt-1">Active Projects</p>
          </div>
          <div className="card p-4">
            <p className="text-2xl font-bold text-[#16A34A]">34</p>
            <p className="text-xs text-[#6B7280] mt-1">Team Members</p>
          </div>
          <div className="card p-4">
            <p className="text-2xl font-bold text-purple-600">7</p>
            <p className="text-xs text-[#6B7280] mt-1">Milestones</p>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
