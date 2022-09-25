import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import Theme from './Theme';
import Content from './Content';

function App() {
  return (
    <ChakraProvider theme={Theme}>
      <ColorModeScript initialColorMode={Theme.config.initialColorMode} />
      <Content/>
    </ChakraProvider>
  );
}

export default App;
