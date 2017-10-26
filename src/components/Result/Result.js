import React, { Component } from 'react'
import styles from './result.css'
import ImageDisplay from '../ImageDisplay/ImageDisplay'
import {Tab, Tabs} from 'react-toolbox'

export default class Result extends Component {
  constructor (props) {
    super(props)

    this.state = {
      index: 2,
      fixedIndex: 1,
      inverseIndex: 1
    }
  }

  handleTabChange (index) {
    this.setState({index})
  }
  render () {
    return (
      <div className={styles.container}>
        <Tabs className={styles.tabs} index={this.state.index} onChange={this.handleTabChange.bind(this)} fixed={true}>
          <Tab label="Before">
            <ImageDisplay src={this.props.file.beforeImage} />
          </Tab>
          <Tab label="After">
            <ImageDisplay src={this.props.file.afterImage} />
          </Tab>
          <Tab label="Diff">
            <ImageDisplay src={this.props.file.diffImage} />
          </Tab>
        </Tabs>
      </div>
    )
  }
}
