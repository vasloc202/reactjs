import React from 'react'
import { Outlet } from "react-router-dom";
import AdminNav from '../../components/AdminNav';
type Props = {}

const AdminLayout = (props: Props) => {
  return (
    <div>
      <header>
        <AdminNav />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default AdminLayout;