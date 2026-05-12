'use client';

import Sidebar from '@/components/admin/Sidebar';

interface AdminLayoutProps {
  children: React.ReactNode;
  title: string;
  breadcrumbs?: { label: string; href?: string }[];
  headerAction?: React.ReactNode;
}

export default function AdminLayout({
  children,
  title,
  breadcrumbs,
  headerAction,
}: AdminLayoutProps) {
  return (
    <div className="flex min-h-screen bg-[#F8F9FA]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 ml-60">
        {/* Header */}
        <header className="bg-white border-b border-[#E5E7EB] sticky top-0 z-40">
          <div className="px-8 py-6 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-[#1C1C1E] mb-1">{title}</h1>
              {breadcrumbs && (
                <nav className="flex items-center gap-2 text-sm text-[#6B7280]">
                  {breadcrumbs.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      {idx > 0 && <span>/</span>}
                      <span>{item.label}</span>
                    </div>
                  ))}
                </nav>
              )}
            </div>
            {headerAction && <div>{headerAction}</div>}
          </div>
        </header>

        {/* Content */}
        <main className="p-8">{children}</main>
      </div>
    </div>
  );
}
