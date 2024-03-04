const validateTodo = (todo: string): boolean => {
  if(typeof todo !== 'string') {
    return false
  }

  if (todo.length < Number(import.meta.env.VITE_MIN_LENTH)) {
    return false
  }

  return todo.length <= Number(import.meta.env.VITE_MAX_LENTH)
}

export default validateTodo
