import React from 'react';
import { store } from './redux/Store'
import {Provider} from 'react-redux';
import Sample from './Sample';

export default function App() {
  return (
    <Provider store={store}>
      <Sample/>
    </Provider>
  );
}

