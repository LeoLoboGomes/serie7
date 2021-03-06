import React from 'react'
import Calculator from './src/calculator'
import { Provider } from 'react-redux';
import store from "./src/redux/store";

export default function App() {
  return (
  <Provider store={store}>
    <Calculator />
  </Provider>
  )
}