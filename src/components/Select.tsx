import * as React from 'react'
import ReactSelect from 'react-select'
import { useField, useFormikContext } from 'formik'
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
    setFieldValue(field.name, (option as OptionType).value)
  }, [])

  return <ReactSelect name={field.name} options={options} onChange={onChange} />
}
//_______________________________________
//
export default Component
