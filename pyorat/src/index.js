import React from 'react'
import ReactDOM from 'react-dom'
import {Options} from "./Options"

import './index.css'

const App = () => {
  return (
      <>
        <h1>PK-seudun polkupyöräasemat</h1>
          <Options />
        </>
  )
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
)