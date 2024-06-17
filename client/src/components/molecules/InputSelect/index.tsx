import { ChangeEvent } from 'react'
import styles from './styles.module.scss'

/* types */
import { User } from '../../../generated/graphql'

type InputSelectProps = {
  label: string
  name: string
  value: string | number
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void
  options?: User[]
}

const InputSelect = ({
  label,
  name,
  value,
  onChange,
  options,
}: InputSelectProps) => {
  return (
    <div className={styles.input_select}>
      <label>{label}</label>

      {options ? (
        <select defaultValue={value} name={name} onChange={onChange}>
          <option value="">Select an author</option>
          {options.map((option: User) => (
            <option key={option.id} value={option.id}>
              {option.username}
            </option>
          ))}
        </select>
      ) : (
        <select defaultValue={value} name={name} onChange={onChange}>
          <option value="Asc">Ascendant</option>
          <option value="Desc">Descendant</option>
        </select>
      )}
    </div>
  )
}

export default InputSelect
