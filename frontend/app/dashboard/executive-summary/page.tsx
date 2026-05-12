'use client';

import AdminLayout from '@/components/admin/AdminLayout';
import { BarChart3 } from 'lucide-react';

export default function ExecutiveSummaryPage() {
  return (
    <AdminLayout
      title="Executive Summary"
      breadcrumbs={[{ label: 'Executive Summary' }]}
    >
      <div className="card p-8 text-center">
        <div className="flex justify-center mb-4">
          <div className="p-3 bg-blue-100 rounded-lg">
            <BarChart3 size={32} className="text-[#1A73E8]" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-[#1C1C1E] mb-2">
          Executive Summary
        </h2>
        <p className="text-[#6B7280] mb-6">
          Dashboard with KPIs, metrics, and high-level insights coming soon.
        </p>
        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mt-8">
          <div className="card p-4">
            <p className="text-2xl font-bold text-[#1A73E8]">$2.4M</p>
            <p className="text-xs text-[#6B7280] mt-1">Revenue</p>
          </div>
          <div className="card p-4">
            <p className="text-2xl font-bold text-[#16A34A]">84%</p>
            <p className="text-xs text-[#6B7280] mt-1">Completion</p>
          </div>
          <div className="card p-4">
            <p className="text-2xl font-bold text-[#DC2626]">12</p>
            <p className="text-xs text-[#6B7280] mt-1">Open Issues</p>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
