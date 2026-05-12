'use client';

import { Users, UserCheck, ShieldCheck, Clock } from 'lucide-react';

interface StatCard {
  label: string;
  value: string | number;
  icon: React.ReactNode;
}

const stats: StatCard[] = [
  {
    label: 'Total Accounts',
    value: 284,
    icon: <Users size={18} className="text-[#1A73E8]" />,
  },
  {
    label: 'Active Accounts',
    value: 268,
    icon: <UserCheck size={18} className="text-[#16A34A]" />,
  },
  {
    label: 'Roles Count',
    value: 4,
    icon: <ShieldCheck size={18} className="text-purple-600" />,
  },
  {
    label: 'Last Login',
    value: '2 min ago',
    icon: <Clock size={18} className="text-amber-600" />,
  },
];

export default function StatsRow() {
  return (
    <div className="grid grid-cols-4 gap-4 mb-8">
      {stats.map((stat, idx) => (
        <div key={idx} className="card p-4">
          <div className="flex items-center justify-between mb-3">
            <p className="text-xs font-medium text-[#6B7280]">{stat.label}</p>
            {stat.icon}
          </div>
          <p className="text-2xl font-bold text-[#1C1C1E]">{stat.value}</p>
        </div>
      ))}
    </div>
  );
}
