import { FC } from 'react'
import DashboardLayout from '../../../../components/ui/DashboardLayout'
import { useLocation } from 'react-router-dom'
import CreateUpdateRoleForm from '../../../../components/role/CreateUpdateRoleForm/CreateUpdateRoleForm'

const DashboardProductsEdit: FC = () => {
  const location = useLocation()
  return (
    <DashboardLayout>
      <h1 className="mb-4 text-center">Edit product</h1>
      <CreateUpdateRoleForm defaultValues={location.state} />
    </DashboardLayout>
  )
}

export default DashboardProductsEdit
