import * as React from 'react'
import { Formik, Form } from 'formik'
import clients from '../data/clients.json'
import estimates from '../data/estimates.json'
import Select from './MuiSelect'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
//_______________________________________
//
const taskCategories = [
  { value: 'planned', label: '計画' },
  { value: 'unexpected', label: '突発' },
  { value: 'planned_remote', label: '在宅・計画' },
  { value: 'unexpected_remote', label: '在宅・突発' },
]
//_______________________________________
//
type Estimates = {
  estimateNumber: string
  price: number
  label: string
}

type Props = {
  label?: boolean
}
//_______________________________________
//
const Component: React.FC<Props> = ({ label }) => {
  const [filteredEstimates, setFilteredEstimates] = React.useState<Estimates[]>(
    []
  )
  const [estimatePrice, setEstimatePrice] = React.useState('')

  const handleSelectClient = React.useCallback(
    option => {
      if (option) {
        const estimate = estimates.filter(
          result => result.clientCode === option.value
        )
        estimate.length
          ? setFilteredEstimates(estimate[0].items)
          : setFilteredEstimates([])
      }
      setEstimatePrice('')
    },
    [filteredEstimates]
  )

  const handleSelectEstimate = React.useCallback(
    option => {
      option ? setEstimatePrice(option.price) : setEstimatePrice('')
    },
    [estimatePrice]
  )

  return (
    <div>
      <Formik
        initialValues={{
          taskCategory: '',
        }}
        onSubmit={(values): void => {
          console.log(values)
        }}
      >
        <Form style={{ display: 'flex', width: '100%', alignItems: 'center' }}>
          <div style={{ flex: 1 }}>
            {label && <label>タスク属性</label>}
            <Select name="taskCategory" options={taskCategories} />
          </div>
          <div style={{ flex: 1, marginLeft: '8px' }}>
            {label && <label>顧客名</label>}
            <Autocomplete
              options={clients}
              getOptionLabel={(option): string => option.label}
              renderInput={(params): React.ReactNode => (
                <TextField {...params} variant="outlined" />
              )}
              onChange={(event: any, newValue: any | null): void => {
                handleSelectClient(newValue)
              }}
            />
          </div>
          <div style={{ flex: 1, marginLeft: '8px' }}>
            {label && <label>プロジェクト名</label>}
            <TextField variant="outlined" />
          </div>
          <div style={{ flex: 1, marginLeft: '8px' }}>
            {label && <label>見積り</label>}
            <Autocomplete
              options={filteredEstimates}
              getOptionLabel={(option): string => option.label}
              renderInput={(params): React.ReactNode => (
                <TextField {...params} variant="outlined" />
              )}
              onChange={(event: any, newValue: any | null): void => {
                handleSelectEstimate(newValue)
              }}
            />
          </div>
          <div style={{ flex: 1, marginLeft: '8px' }}>
            {label && <label>金額</label>}
            <TextField value={estimatePrice} variant="outlined" disabled />
          </div>
          <div style={{ flex: 1, marginLeft: '8px' }}>
            {label && <label>タスク詳細</label>}
            <TextField variant="outlined" />
          </div>
          {/* <button type="submit">Submit</button> */}
        </Form>
      </Formik>
    </div>
  )
}
//_______________________________________
//
export default Component
