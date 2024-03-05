import { FC } from 'react'
import { FormErrorMessage, FormHelperText } from '@chakra-ui/react'

const InputHelperText: FC<{isError: boolean}> = ({ isError }) => {
  if (isError) {
    return (
      <FormErrorMessage>
                Title of todo is required.
      </FormErrorMessage>
    )
  }

  return (
    <FormHelperText>
        Enter the title of todo.
    </FormHelperText>)
}

export default InputHelperText
