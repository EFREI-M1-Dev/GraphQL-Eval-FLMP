import { ChangeEvent } from 'react'
import styles from './styles.module.scss'
import { AnimatePresence } from 'framer-motion'

/* components */
import Modal from '../../../components/molecules/Modal'
import InputSelect from '../../../components/molecules/InputSelect'

/* types */
import { filterProps } from '..'
import { User, useGetUsersQuery } from '../../../generated/graphql'

type FilterProps = {
  isModalOpen: boolean
  closeModal: () => void
  filter: filterProps
  handleChangeOrder: (event: ChangeEvent<HTMLSelectElement>) => void
}

const Filter = ({
  isModalOpen,
  closeModal,
  filter,
  handleChangeOrder,
}: FilterProps) => {
  const { data } = useGetUsersQuery({})

  return (
    <AnimatePresence>
      {isModalOpen && (
        <Modal className={styles.filter} closeModal={closeModal}>
          <InputSelect
            label="Date"
            name="date-order"
            value={filter['date-order']}
            onChange={handleChangeOrder}
          />
          <InputSelect
            label="Likes"
            name="like-order"
            value={filter['like-order']}
            onChange={handleChangeOrder}
          />
          <InputSelect
            label="Author"
            name="author"
            value={filter['author'] || ''}
            onChange={handleChangeOrder}
            options={(data?.users as User[]) ?? []}
          />
        </Modal>
      )}
    </AnimatePresence>
  )
}

export default Filter
