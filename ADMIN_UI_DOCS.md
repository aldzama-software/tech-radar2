# Admin UI - Tech Radar Dashboard

Complete Admin Dashboard built with Next.js 14, TypeScript, and Tailwind CSS.

## 📁 Project Structure

```
frontend/
├── app/
│   ├── layout.tsx                 # Root layout with global styles
│   ├── page.tsx                   # Redirect to admin dashboard
│   ├── globals.css                # Global styles & Tailwind setup
│   └── dashboard/
│       ├── page.tsx               # Dashboard home
│       ├── admin/
│       │   ├── page.tsx           # User Management (default)
│       │   └── login-history/
│       │       └── page.tsx       # Login History view
│       ├── access-control/
│       │   └── page.tsx           # Access Control placeholder
│       └── settings/
│           └── page.tsx           # Settings placeholder
├── components/
│   └── admin/
│       ├── Sidebar.tsx            # Left navigation sidebar
│       ├── AdminLayout.tsx        # Layout wrapper with header
│       ├── StatsRow.tsx           # 4-column stats metrics
│       ├── UserTable.tsx          # User list table with search/filter
│       ├── UserModal.tsx          # Create/Edit account modal
│       └── DeleteModal.tsx        # Delete confirmation modal
├── types/
│   └── admin.ts                   # TypeScript interfaces & constants
├── lib/
│   └── admin-data.ts              # Dummy data for development
├── tailwind.config.ts             # Tailwind configuration
├── next.config.js                 # Next.js configuration
└── tsconfig.json                  # TypeScript configuration
```

## 🎨 Design System

### Colors
- **Background**: `#F8F9FA` (page), `#FFFFFF` (cards)
- **Primary**: `#1A73E8` (Google Blue)
- **Text Primary**: `#1C1C1E`
- **Text Secondary**: `#6B7280`
- **Border**: `#E5E7EB`
- **Success**: `#16A34A`
- **Danger**: `#DC2626`

### Typography
- **Body**: Inter (Google Fonts)
- **Headings**: Plus Jakarta Sans (Google Fonts)

### Components
- Border radius: 10px (cards), 8px (inputs/buttons), 6px (badges)
- Subtle shadow: `0 1px 3px rgba(0,0,0,0.06)`
- No gradients, minimal design

## 📄 Pages

### `/dashboard/admin` - User Management
**Main admin interface with:**
- 4 stats cards (Total, Active, Roles, Last Login)
- User table with:
  - Avatar initials circles
  - Search by name/email
  - Role filter dropdown
  - Color-coded role badges
  - Status badges (Active/Inactive)
  - Edit & Delete action buttons

**Modals:**
- **Create/Edit Modal**: Full Name, Email, Password (with toggle), Role (dropdown), Status (toggle), Permissions (checkboxes)
- **Delete Modal**: Confirmation with warning icon

### `/dashboard/admin/login-history` - Login History
Simple table view with:
- User name & email
- Login/Logout timestamps
- IP Address
- Status (Success/Failed)

### Navigation Pages (Placeholders)
- `/dashboard` - Dashboard home
- `/dashboard/access-control` - Access Control
- `/dashboard/settings` - Settings

## 🧩 Components

### `Sidebar.tsx`
- Fixed left sidebar (240px)
- Navigation links with active state
- User profile footer

### `AdminLayout.tsx`
- Page title & breadcrumbs
- Header action slot
- Main content area

### `StatsRow.tsx`
- 4 metric cards in responsive grid
- Icons from lucide-react

### `UserTable.tsx`
- Search input with icon
- Role filter dropdown
- Hover effects
- Avatar circles with initials
- Edit/Delete icon buttons

### `UserModal.tsx`
- Form fields with labels
- Password visibility toggle
- Status toggle switch
- Permission checkboxes
- Modal overlay with smooth animation

### `DeleteModal.tsx`
- Warning icon
- User name confirmation text
- Cancel/Delete buttons

## 🔧 Features

- ✅ Fully typed with TypeScript
- ✅ Responsive design (1280px minimum)
- ✅ Dummy data for all components
- ✅ Search & filter functionality
- ✅ Modal state management
- ✅ Role-based badge colors
- ✅ Lucide React icons
- ✅ Tailwind CSS only (no UI libraries)

## 🚀 Usage

### Start Development
```bash
npm install
npm run dev:frontend
```

Visit `http://localhost:3001` - redirects to `/dashboard/admin`

### Dummy Data
All data is static and defined in `lib/admin-data.ts`:
- 5 sample users with different roles
- 8 login history entries
- Color-coded role system

### TypeScript Types
See `types/admin.ts` for all interfaces:
- `User` - User account data
- `UserRole` - Role types (Admin, Executive, Project Manager, Tech)
- `UserStatus` - Active/Inactive
- `LoginHistory` - Login tracking
- `PermissionType` - Permission flags

## 📝 Next Steps

To connect to the backend API:
1. Update `lib/admin-data.ts` with API calls instead of dummy data
2. Replace modals' `onSave` handlers with API mutations
3. Add error handling and loading states
4. Integrate with NestJS backend endpoints

## 📱 Responsive Behavior

The layout maintains functionality down to 1280px. For smaller screens, consider:
- Collapsible sidebar
- Stack stats in 2x2 grid
- Horizontal scroll on table
- Full-width modals
