import React from 'react'
import ReactDOM from 'react-dom'
import {Options} from "./Options"
import './index.css'

const App = () => {
  return (
      <>
        <h1>Polkupyöräasemat</h1>
        <select>
          <Options />
        </select>
        </>
  )
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
)