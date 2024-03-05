import { Button, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react'
import React, { ReactNode } from 'react'
import { useInputTodo } from './use-input-todo.tsx'

import classes from './inputTodo.module.css'
import InputHelperText from '../../components/InputHelperText'

const InputTodo = React.memo((): ReactNode => {
  const { isError, inputRef, onChange, onSubmit } = useInputTodo()

  return (
    <form onSubmit={onSubmit} className={classes.form}>
      <Stack spacing={3}>
        <FormControl isInvalid={isError}>
          <FormLabel>Enter a new todo title</FormLabel>
          <Input
            type='text'
            name={'todo'}
            ref={inputRef}
            minLength={Number(import.meta.env.VITE_MIN_LENTH)}
            maxLength={Number(import.meta.env.VITE_MAX_LENTH)}
            onChange={onChange}
            required={true} />
          <InputHelperText isError={isError} />
        </FormControl>
        <Button type='submit' colorScheme='teal' variant='solid' >
          Add Todo
        </Button>
      </Stack>
    </form>
  )
})

export default InputTodo
