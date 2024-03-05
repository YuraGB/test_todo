import { Center, Tooltip, Wrap, WrapItem } from '@chakra-ui/react'
import { useCounter } from './use-counter.ts'
import { CheckIcon, RepeatClockIcon } from '@chakra-ui/icons'
import { ReactNode } from 'react'

const Counter = (): ReactNode => {
  const { sumCompleted, sumActive } = useCounter()

  return (
    <Wrap>
      <WrapItem>
        <Tooltip
          label="Active todos"
          aria-label="Count of the active todos tooltip">
          <Center w='50px' h='50px' bg='yellow.200' gap={2}>
            <RepeatClockIcon />
            <p>{sumActive}</p>
          </Center>
        </Tooltip>
      </WrapItem>
      <WrapItem>
        <Tooltip
          label="Completed todos"
          aria-label="Count of the completed todos tooltip">
          <Center w='50px' h='50px' bg='green.200' gap={2}>
            <CheckIcon />
            <p>{sumCompleted}</p>
          </Center>
        </Tooltip>
      </WrapItem>
    </Wrap>
  )
}

export default Counter
