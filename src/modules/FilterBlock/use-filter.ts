import { useAppDispatch } from '../../store/hooks'
import { changeFilter } from '../../store/reducers/filter-reducer.ts'

const filterOptions = ['all', 'active', 'completed'] as const

type TUseFilter = {
  filterOptions: typeof filterOptions
  onFilterChange: (filter: string) => void
}

export const useFilter = (): TUseFilter => {
  const dispatch = useAppDispatch()

  const onFilterChange = (filter: string):void => {
    dispatch(changeFilter(filter))
  }

  return {
    filterOptions,
    onFilterChange,
  }
}
