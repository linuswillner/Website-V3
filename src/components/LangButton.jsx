// Lang selector button
import React, { Component } from 'react'
import LangSelector from './LangSelector'
import { dispatcher } from 'utils/dispatcher'

export default class LangButton extends Component {
  constructor (props) {
    super(props)
    this.state = {
      lang: localStorage.getItem('lang') || 'gb', // Use English if nothing was set in the previous session
      active: false
    }
  }

  handleClick = (event) => {
    event.preventDefault()
    this.setState({ active: !this.state.active })
  }

  componentDidMount () {
    dispatcher.on('LANG_SELECT', lang => {
      localStorage.setItem('lang', lang) // Write to local storage and remember for next session
      this.setState({ lang: lang, active: false })
    })

    dispatcher.on('CLOSE_ANY_OPEN_DIALOG', () => this.setState({ active: false }))
  }

  render () {
    return (
      <div className={`dropdown is-up lang-button ${this.state.active ? 'is-active' : ''}`}>
        <div className='dropdown-trigger'>
          <button
            className='button inner'
            aria-haspopup='true'
            aria-controls='lang-selector'
            data-button='lang'
            onClick={this.handleClick}
          >
            <span className='icon lang-icon'>
              <span
                className={`flag-icon flag-icon-${this.state.lang}`}
                aria-hidden='true'
                data-button='lang'
                onClick={this.handleClick}
              />
            </span>
          </button>
        </div>
        <LangSelector active={this.state.active} />
      </div>
    )
  }
}
