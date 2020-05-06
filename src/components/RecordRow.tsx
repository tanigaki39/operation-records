import * as React from 'react'
import RecordLabel from './RecordLabel'
import RecordHours from './RecordHours'
//_______________________________________
//
type Props = {
  label?: boolean
}
//_______________________________________
//
const Component: React.FC<Props> = ({ label }) => (
  <div style={{ display: 'flex' }}>
    <div style={{ width: '1000px', flex: 'none' }}>
      <RecordLabel label={label} />
    </div>
    <div style={{ marginLeft: 24 }}>
      <RecordHours label={label} />
    </div>
  </div>
)
//_______________________________________
//
export default Component
