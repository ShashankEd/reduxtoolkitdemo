/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { DataComponent } from './DataComponent';
import { Provider } from 'react-redux';
import {store} from './store'
export function App() { 
  return (
    <Provider store={store}>
      <DataComponent/>
    </Provider>
  )
}
export default App;
