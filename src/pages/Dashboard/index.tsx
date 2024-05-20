import { FC } from 'react'
import DashboardLayout from '../../components/ui/DashboardLayout'

const Dashboard: FC = () => {
  return (
    <DashboardLayout>
      <h1 className="mb-4">Daily Sales</h1>

      <div id="chart"></div>
    </DashboardLayout>
  )
}
export default Dashboard
