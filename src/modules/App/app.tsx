import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { ChakraProvider } from '@chakra-ui/react'

import TodoModule from '../TodoModule'
import { setupStore } from '../../store'

function App(): ReactNode {
  const store = setupStore()
  return (
    <ChakraProvider>
      <Provider store={store}>
        <TodoModule />
      </Provider>
    </ChakraProvider>
  )
}

export default App
