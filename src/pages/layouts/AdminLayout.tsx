import React from 'react'
import { Outlet } from "react-router-dom";
type Props = {}

const AdminLayout = (props: Props) => {
  return (
    <div>
        <header>
            Header website admin
        </header>
        <main>
            <Outlet />
        </main>
        <footer>
            Footer
        </footer>
    </div>
  )
}

export default AdminLayout;