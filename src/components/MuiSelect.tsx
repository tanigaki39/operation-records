import * as React from 'react'
import { useField, useFormikContext } from 'formik'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
//_______________________________________
//
type OptionType = {
  label: string
  value: string
}

type Props = {
  name: string
  options: OptionType[]
}
//_______________________________________
//
const Component: React.FC<Props> = ({ name, options }) => {
  const [field] = useField(name)
  const { setFieldValue } = useFormikContext()

  const onChange = React.useCallback(option => {
    if (option) {
      setFieldValue(field.name, (option as OptionType).value)
      return
    }

    setFieldValue(field.name, '')
  }, [])

  return (
    <Autocomplete
      options={options}
      getOptionLabel={(option): string => option.label}
      renderInput={(params): React.ReactNode => (
        <TextField {...params} name={name} variant="outlined" />
      )}
      onChange={(event: any, newValue: OptionType | null): void => {
        onChange(newValue)
      }}
    />
  )
}
//_______________________________________
//
export default Component
