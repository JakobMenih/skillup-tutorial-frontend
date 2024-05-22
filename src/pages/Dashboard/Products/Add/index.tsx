import { FC } from 'react'
import DashboardLayout from '../../../../components/ui/DashboardLayout'
import CreateUpdateRoleForm from '../../../../components/role/CreateUpdateRoleForm/CreateUpdateRoleForm'

const DashboardProductsAdd: FC = () => {
  return (
    <DashboardLayout>
      <h1 className="mb-4 text-center">Create new product</h1>
      <CreateUpdateRoleForm />
    </DashboardLayout>
  )
}

export default DashboardProductsAdd
