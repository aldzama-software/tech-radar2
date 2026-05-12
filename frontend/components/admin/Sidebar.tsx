'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  ShieldCheck,
  BarChart3,
  Briefcase,
  Radar,
  Settings,
  LogOut,
} from 'lucide-react';

const mainNav = [
  { label: 'Admin', href: '/dashboard/admin', icon: ShieldCheck },
  { label: 'Executive Summary', href: '/dashboard/executive-summary', icon: BarChart3 },
  { label: 'Project Management', href: '/dashboard/projects', icon: Briefcase },
  { label: 'Tech Radar Map', href: '/dashboard/tech-radar', icon: Radar },
];

const secondaryNav = [
  { label: 'Settings', href: '/dashboard/settings', icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-60 bg-white border-r border-[#E5E7EB] fixed left-0 top-0 h-screen overflow-y-auto flex flex-col">
      {/* Logo */}
      <div className="px-6 py-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#1A73E8] rounded-lg flex items-center justify-center text-white font-bold text-sm">
            TR
          </div>
          <span className="font-bold text-[#1C1C1E]">Tech Radar</span>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="space-y-1 px-4 flex-1">
        <p className="text-xs font-semibold text-[#6B7280] px-4 py-2 uppercase tracking-wide">
          Main
        </p>
        {mainNav.map((item) => {
          const isActive = pathname.startsWith(item.href);
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-[8px] text-sm font-medium transition-all ${
                isActive
                  ? 'bg-blue-50 text-[#1A73E8]'
                  : 'text-[#6B7280] hover:text-[#1C1C1E] hover:bg-[#F9FAFB]'
              }`}
            >
              <Icon size={18} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Secondary Navigation */}
      <div className="border-t border-[#E5E7EB]">
        <nav className="space-y-1 px-4 py-4">
          <p className="text-xs font-semibold text-[#6B7280] px-4 py-2 uppercase tracking-wide">
            Other
          </p>
          {secondaryNav.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-[8px] text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-blue-50 text-[#1A73E8]'
                    : 'text-[#6B7280] hover:text-[#1C1C1E] hover:bg-[#F9FAFB]'
                }`}
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* User Profile & Logout */}
        <div className="p-4 border-t border-[#E5E7EB]">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3 flex-1">
              <div className="w-10 h-10 bg-[#1A73E8] rounded-full flex items-center justify-center text-white font-semibold text-sm">
                JD
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-[#1C1C1E] truncate">John Doe</p>
                <p className="text-xs text-[#6B7280] truncate">Admin</p>
              </div>
            </div>
          </div>
          <button className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-[8px] text-sm font-medium text-[#DC2626] hover:bg-red-50 transition-all">
            <LogOut size={16} />
            Logout
          </button>
        </div>
      </div>
    </aside>
  );
}
