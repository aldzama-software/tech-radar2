'use client';

import Link from 'next/link';
import AdminLayout from '@/components/admin/AdminLayout';
import { ShieldCheck, BarChart3, Briefcase, Radar } from 'lucide-react';

const sections = [
  {
    title: 'Admin',
    description: 'Authentication, access control, and user management',
    icon: ShieldCheck,
    href: '/dashboard/admin',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    title: 'Executive Summary',
    description: 'KPIs, metrics, and high-level business insights',
    icon: BarChart3,
    href: '/dashboard/executive-summary',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
  },
  {
    title: 'Project Management',
    description: 'Manage projects, timelines, and team resources',
    icon: Briefcase,
    href: '/dashboard/projects',
    color: 'text-purple-600',
    bg: 'bg-purple-50',
  },
  {
    title: 'Tech Radar Map',
    description: 'Technology assessment and quadrant view',
    icon: Radar,
    href: '/dashboard/tech-radar',
    color: 'text-teal-600',
    bg: 'bg-teal-50',
  },
];

export default function DashboardPage() {
  return (
    <AdminLayout
      title="Dashboard"
      breadcrumbs={[{ label: 'Dashboard' }]}
    >
      <div className="mb-8">
        <p className="text-[#6B7280] mb-6">
          Welcome to Tech Radar Dashboard. Select a section to begin.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {sections.map((section) => {
          const Icon = section.icon;
          return (
            <Link
              key={section.href}
              href={section.href}
              className="card p-6 hover:shadow-lg transition-all cursor-pointer group"
            >
              <div className={`w-12 h-12 rounded-lg ${section.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <Icon size={24} className={section.color} />
              </div>
              <h3 className="font-bold text-lg text-[#1C1C1E] mb-2 group-hover:text-[#1A73E8] transition-colors">
                {section.title}
              </h3>
              <p className="text-[#6B7280] text-sm">
                {section.description}
              </p>
            </Link>
          );
        })}
      </div>
    </AdminLayout>
  );
}
