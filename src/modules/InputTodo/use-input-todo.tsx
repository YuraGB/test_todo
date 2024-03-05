import { useAppDispatch } from '../../store/hooks'
import { todoAdd } from '../../store/reducers/todo-reducer.ts'
import React, {
  ChangeEvent,
  FormEventHandler,
  useCallback,
  useRef,
  useState,
} from 'react'
import createTodo from './utils/create-todo.ts'
import { formatText } from './utils/format-text.ts'
import validation from './utils/validation.ts'

type TUseInputTodo = {
  inputRef: React.RefObject<HTMLInputElement>
  isError: boolean
  onSubmit: FormEventHandler<HTMLFormElement>
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const useInputTodo = (): TUseInputTodo => {
  const dispatch = useAppDispatch()
  const inputRef = useRef<HTMLInputElement>(null)
  const [isError, setIsError] = useState(false)

  const onSubmit: FormEventHandler<HTMLFormElement> =
      useCallback((event): void => {
        event.preventDefault()

        if (inputRef.current) {
          const text = formatText(inputRef.current.value)

          const isValid = validation(text)

          if (isValid) {
            const newTodo = createTodo(text)
            dispatch(todoAdd(newTodo))

            // Clear input
            inputRef.current.value = ''
          } else {
            setIsError(true)
          }
        }
      }, [dispatch])

  // Clear error message when user starts typing
  const onChange = (): void => {
    setIsError(false)
  }

  return {
    inputRef,
    isError,
    onSubmit,
    onChange,
  }
}
