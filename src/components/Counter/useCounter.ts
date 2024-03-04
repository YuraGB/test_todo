import {TTodo} from "../../store/reducers/types.ts"
import {useAppSelector} from "../../store/hooks"
import { useMemo} from "react"

type TCounter = {
  sumActive: number
  sumCompleted: number
}
export const useCounter = (): TCounter => {
  const todos: TTodo[] = useAppSelector(state => state.todoReducer)

  const count = useMemo(() => {
    let sumActive = 0
    let sumCompleted = 0

    for (const {completed} of todos) {
      if (completed) {
        sumCompleted++
      } else {
        sumActive++
      }
    }

    return {
      sumActive,
      sumCompleted
    }
  }, [todos])

  return {...count}
}