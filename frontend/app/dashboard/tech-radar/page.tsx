'use client';

import AdminLayout from '@/components/admin/AdminLayout';
import { Radar } from 'lucide-react';

export default function TechRadarPage() {
  return (
    <AdminLayout
      title="Tech Radar Map"
      breadcrumbs={[{ label: 'Tech Radar Map' }]}
    >
      <div className="card p-8 text-center">
        <div className="flex justify-center mb-4">
          <div className="p-3 bg-teal-100 rounded-lg">
            <Radar size={32} className="text-teal-600" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-[#1C1C1E] mb-2">
          Tech Radar Map
        </h2>
        <p className="text-[#6B7280] mb-6">
          Technology assessment, trends, and quadrant view coming soon.
        </p>
        <div className="grid grid-cols-4 gap-4 max-w-3xl mx-auto mt-8">
          <div className="card p-4">
            <p className="text-2xl font-bold text-green-600">28</p>
            <p className="text-xs text-[#6B7280] mt-1">Adopt</p>
          </div>
          <div className="card p-4">
            <p className="text-2xl font-bold text-blue-600">15</p>
            <p className="text-xs text-[#6B7280] mt-1">Trial</p>
          </div>
          <div className="card p-4">
            <p className="text-2xl font-bold text-yellow-600">9</p>
            <p className="text-xs text-[#6B7280] mt-1">Assess</p>
          </div>
          <div className="card p-4">
            <p className="text-2xl font-bold text-red-600">5</p>
            <p className="text-xs text-[#6B7280] mt-1">Hold</p>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
