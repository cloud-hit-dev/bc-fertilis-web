import React from 'react'
import AdminLayout from '@/layout/admin/DefaultAdminLayout'

const LayoutAdministrador = ({children}) => {
    return (
        <AdminLayout>
            {children}
        </AdminLayout>
    )
}

export default LayoutAdministrador