/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { DataComponent } from './component/DataComponent';
import { Provider } from 'react-redux';
import {store} from './redux/store/store'
export function App() { 
  return (
    <Provider store={store}>
      <DataComponent/>
    </Provider>
  )
}
export default App;
