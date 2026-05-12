'use client';

import { redirect } from 'next/navigation';

export default function AccessControlPage() {
  redirect('/dashboard/admin');
}

