import PageTitle from '../../components/PageTitle'
import { ReactNode } from 'react'
import TodoList from '../TodoList'
import FilterBlock from '../FilterBlock'
import { Flex, Stack } from '@chakra-ui/react'
import Counter from '../../components/Counter'
import InputTodo from '../InputTodo'

import classes from './todoModule.module.css'

const TodoModule = (): ReactNode => {
  return (
    <main className={classes.main}>
      <article className={classes.root}>
        <Stack spacing={5} w={'100%'}>
          <PageTitle title={'Todo List'} />
          <InputTodo />
          <Flex justify={'space-between'} className={classes.toolbar}>
            <FilterBlock />
            <Counter />
          </Flex>
          <TodoList />
        </Stack>
      </article>
    </main>
  )
}

export default TodoModule
