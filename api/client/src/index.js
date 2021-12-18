import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/index.css';
import './styles/global.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import axios from 'axios'

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: true,
  },
});

axios.defaults.baseURL = 'https://add-office.herokuapp.com/api';

ReactDOM.render(
  <Provider store={store}>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </Provider>,
  document.getElementById('root')
);
