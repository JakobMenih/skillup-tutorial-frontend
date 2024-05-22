import { FC } from 'react'
import DashboardLayout from '../../../../components/ui/DashboardLayout'
import CreateUpdateRoleForm from '../../../../components/role/CreateUpdateRoleForm/CreateUpdateRoleForm'

const DashboardRolesAdd: FC = () => {
  return (
    <DashboardLayout>
      <h1 className="mb-4 text-center">Create new role</h1>
      <CreateUpdateRoleForm />
    </DashboardLayout>
  )
}

export default DashboardRolesAdd
