import { Flex, Select } from '@chakra-ui/react'
import React, { ReactNode } from 'react'
import { useFilter } from './use-filter.ts'
import classes from './filter.module.css'

const FilterBlock = React.memo((): ReactNode => {
  const { onFilterChange, filterOptions } = useFilter()

  return (
    <Flex direction={'column'} >
      <label htmlFor="filter">Filter</label>
      <Select
        name="filter"
        variant='flushed'
        className={classes.select}
        maxW={200}
        defaultValue={'all'}
        onChange={({ target }) => onFilterChange(target.value) }
      >
        {filterOptions
          .map((option) => <option
            key={option}
            value={option}
            className={classes.option}>
            {option}</option>)}
      </Select>
    </Flex>)
})

export default FilterBlock
