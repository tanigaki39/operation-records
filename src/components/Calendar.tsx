import * as React from 'react'
import { format, isWeekend } from 'date-fns'
import holidayJp from '@holiday-jp/holiday_jp'
import { TextField, makeStyles } from '@material-ui/core'
//_______________________________________
//
type Props = {
  date: Date
  onChange: (index: number, value: number) => void
  index: number
  label?: boolean
}
//_______________________________________
//
const useStyles = makeStyles({
  root: {
    width: 56,
    height: 56,
  },
  input: {
    textAlign: 'center',
  },
})
//_______________________________________
//
const Component: React.FC<Props> = ({ date, onChange, index, label }) => {
  const classes = useStyles()
  const isHolidayOrWeekend = React.useMemo(() => {
    return holidayJp.isHoliday(date) || isWeekend(date)
  }, [date])

  return (
    <div style={{ textAlign: 'center' }}>
      {label && (
        <div style={{ color: isHolidayOrWeekend ? 'red' : 'black' }}>
          {format(date, 'MM/dd')}
        </div>
      )}
      <div>
        <TextField
          onChange={(event): void =>
            onChange(index, parseInt(event.target.value, 10))
          }
          variant="outlined"
          InputProps={{
            classes: {
              root: classes.root,
              input: classes.input,
            },
          }}
        />
      </div>
    </div>
  )
}
//_______________________________________
//
export default Component
