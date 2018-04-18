// Main renderer
import React from 'react'
import Main from './layouts/Main'
import './assets/scss/main.scss' // Load CSS for availability in the entire application

export default class App extends React.Component {
  render () {
    return (
      <Main/>
    )
  }
}
