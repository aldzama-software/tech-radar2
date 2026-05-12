'use client';

import AdminLayout from '@/components/admin/AdminLayout';
import { DUMMY_LOGIN_HISTORY } from '@/lib/admin-data';
import { LoginHistory } from '@/types/admin';

export default function LoginHistoryPage() {
  return (
    <AdminLayout
      title="Login History"
      breadcrumbs={[{ label: 'Admin' }, { label: 'Login History' }]}
    >
      <div className="card">
        {/* Table */}
        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th>User Name</th>
                <th>Email</th>
                <th>Login Time</th>
                <th>Logout Time</th>
                <th>IP Address</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {DUMMY_LOGIN_HISTORY.map((entry: LoginHistory) => (
                <tr key={entry.id}>
                  <td className="font-medium">{entry.user.fullName}</td>
                  <td className="text-[#6B7280]">{entry.user.email}</td>
                  <td className="text-[#6B7280]">{entry.loginTime}</td>
                  <td className="text-[#6B7280]">
                    {entry.logoutTime || '-'}
                  </td>
                  <td className="text-[#6B7280]">{entry.ipAddress}</td>
                  <td>
                    <span
                      className={`badge ${
                        entry.status === 'Success'
                          ? 'badge-green'
                          : 'badge-red'
                      }`}
                    >
                      {entry.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
}
