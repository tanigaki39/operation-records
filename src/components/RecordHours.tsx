import * as React from 'react'
import Calendar from './Calendar'
import { eachDayOfInterval, startOfMonth, endOfMonth } from 'date-fns'
import { TextField } from '@material-ui/core'
//_______________________________________
//
const data = eachDayOfInterval({
  start: startOfMonth(new Date(2020, 4)),
  end: endOfMonth(new Date(2020, 4)),
}).map(day => {
  return { date: day, workingHours: 0 }
})
//_______________________________________
//
type Props = {
  label?: boolean
}
//_______________________________________
//
const Component: React.FC<Props> = ({ label }) => {
  const [workingHours, setWorkingHours] = React.useState(data)

  const totalWorkingHours = React.useMemo(() => {
    const hoge = workingHours.map(item => item['workingHours'])
    return hoge.length ? hoge.reduce((acc, current) => acc + current) : 0
  }, [workingHours])

  const handleInputWorkingHours = React.useCallback(
    (index, inputValue) => {
      const targetObject = workingHours[index]
      setWorkingHours([
        ...workingHours.slice(0, index),
        { ...targetObject, workingHours: inputValue || 0 },
        ...workingHours.slice(index + 1),
      ])
    },
    [workingHours]
  )

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '100px', flex: 'none' }}>
        {label && <label>実績工数</label>}
        <TextField value={totalWorkingHours} variant="outlined" disabled />
      </div>
      <div style={{ display: 'flex' }}>
        {workingHours.map((item, index) => (
          <div style={{ marginLeft: 8 }}>
            <Calendar
              date={item.date}
              key={index}
              index={index}
              onChange={handleInputWorkingHours}
              label={label}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
//_______________________________________
//
export default Component
