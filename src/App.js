import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './App.css';
import Counter from './counterClick.component';
import Text from './text.component';
import  {CounterContextProvider}  from './counterContext';


function App() {
  return (
        <CounterContextProvider>
          <Counter />
        <h2>
          <Text />
        </h2>
        </CounterContextProvider>
  )
}


export default App;
