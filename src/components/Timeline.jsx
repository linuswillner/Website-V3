import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { VerticalTimeline } from 'react-vertical-timeline-component'

export default class Timeline extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  }

  render () {
    return (
      <VerticalTimeline
        layout='1-column'
        animate={false}
      >
        {this.props.children}
      </VerticalTimeline>
    )
  }
}
