import React, { FC } from 'react'
import he from 'he'
import { Flex, Grid, IconButton, GridItem, Tooltip } from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'

import { TTodo } from '../../store/reducers/types.ts'
import classes from './todoItem.module.css'

type TodoActions = {
  onClick: (id: string) => void
  onRemove: (id: string) => void
}

type TodoItemProps = TTodo & TodoActions

const TodoItem: FC<TodoItemProps> = React.memo(({
  id,
  title,
  completed,
  onClick,
  onRemove,
}) => {
  const tooltipLabel =
      completed ? 'Click to make as active' : 'Click to make as complete'

  return (
    <Grid
      templateColumns={'minmax(0, 1fr) 48px'}
      gap={6}
      className={classes.root}>
      <GridItem border={'1px 10px 5px black'}>
        <Tooltip label={tooltipLabel} >
          <p
            className={`${classes.title}
             ${completed ? classes.completed : classes.active}`}
            onClick={() => onClick(id)}
          >
            {he.unescape(title)}
          </p>
        </Tooltip>
      </GridItem>
      <GridItem>
        <Flex>
          <IconButton
            aria-label={'remove button'}
            icon={<DeleteIcon />}
            onClick={() => onRemove(id)}
          />
        </Flex>
      </GridItem>
    </Grid>
  )
})

export default TodoItem
