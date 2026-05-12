export type UserRole = 'Admin' | 'Executive' | 'Project Manager' | 'Tech';
export type UserStatus = 'Active' | 'Inactive';
export type PermissionType = 
  | 'view_executive_summary' 
  | 'view_project_management' 
  | 'view_tech_radar' 
  | 'view_financial_data' 
  | 'view_kpi_data' 
  | 'edit_data';

export interface User {
  id: string;
  fullName: string;
  email: string;
  role: UserRole;
  status: UserStatus;
  lastLogin: string;
  password?: string;
  permissions: PermissionType[];
  createdAt: string;
  avatarColor?: string;
}

export interface LoginHistory {
  id: string;
  user: {
    fullName: string;
    email: string;
  };
  loginTime: string;
  logoutTime: string | null;
  ipAddress: string;
  status: 'Success' | 'Failed';
}

export interface Permission {
  id: PermissionType;
  label: string;
}

export const ROLE_BADGE_COLOR: Record<UserRole, string> = {
  'Admin': 'badge-blue',
  'Executive': 'badge-purple',
  'Project Manager': 'badge-amber',
  'Tech': 'badge-teal',
};

export const PERMISSIONS: Permission[] = [
  { id: 'view_executive_summary', label: 'View Executive Summary Page' },
  { id: 'view_project_management', label: 'View Project Management Page' },
  { id: 'view_tech_radar', label: 'View Tech Radar Page' },
  { id: 'view_financial_data', label: 'View Financial Data' },
  { id: 'view_kpi_data', label: 'View KPI Data' },
  { id: 'edit_data', label: 'Edit Data' },
];
