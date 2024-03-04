import React, {FC, ReactNode} from "react"
import {Heading} from "@chakra-ui/react"

type PageTitleProps = {
  title: string
}

const PageTitle: FC<PageTitleProps> = React.memo(({title = "Todo list"}): ReactNode => {
  return (
    <Heading as={'h1'} size={'xl'}>{title}</Heading>
  )
})

export default PageTitle
