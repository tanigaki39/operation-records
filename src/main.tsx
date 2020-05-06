import * as React from 'react'
import * as ReactDOM from 'react-dom'
import RecordRow from './components/RecordRow'
import Button from '@material-ui/core/Button'
import { Grid } from '@material-ui/core'
import { Typography } from '@material-ui/core'
//_______________________________________
//
const Row: React.FC = () => (
  <Grid item>
    <RecordRow />
  </Grid>
)
const App: React.FC = () => {
  const [rows, setRows] = React.useState<React.ReactNode[]>([])

  const handleClickAddRow = React.useCallback(() => {
    setRows([...rows, <Row />])
  }, [rows])

  return (
    <div>
      <Typography variant="h3" style={{ marginBottom: 24 }}>
        Operation records
      </Typography>
      <Grid container spacing={1}>
        <Grid item>
          <RecordRow label />
        </Grid>
        {rows}
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={handleClickAddRow}
          >
            Add Row
          </Button>
        </Grid>
      </Grid>
    </div>
  )
}
//_______________________________________
//
ReactDOM.render(<App />, document.querySelector('#app'))
