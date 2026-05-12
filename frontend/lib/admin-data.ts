import { User, LoginHistory } from '@/types/admin';

// Real data will be fetched from backend API
// These are kept empty - no dummy data
export const DUMMY_USERS: User[] = [];

export const DUMMY_LOGIN_HISTORY: LoginHistory[] = [];

// Helper function to fetch users from backend
export async function fetchUsers(): Promise<User[]> {
  try {
    const response = await fetch('http://localhost:3000/items', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    if (!response.ok) throw new Error('Failed to fetch users');
    return await response.json();
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
}

// Helper function to fetch login history from backend
export async function fetchLoginHistory(): Promise<LoginHistory[]> {
  try {
    const response = await fetch('http://localhost:3000/login-history', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    if (!response.ok) throw new Error('Failed to fetch login history');
    return await response.json();
  } catch (error) {
    console.error('Error fetching login history:', error);
    return [];
  }
}
