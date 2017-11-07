import React, { Component } from 'react'
import styles from './result.css'
import ImageDisplay from '../ImageDisplay/ImageDisplay'
import { Tab, Tabs, Button, IconButton } from 'react-toolbox'
import theme from './_theme.scss'

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

  refresh () {
    window.location.reload()
  }

  render () {
    return (
      <div className={styles.container}>
        <Tabs className={styles.tabs} index={this.state.index} onChange={this.handleTabChange.bind(this)} fixed={true}>
          <Tab
            className={styles.tab}
            label="Before">
            <ImageDisplay {...this.props.file.before} />
          </Tab>
          <Tab
            className={styles.tab}
            label="After">
            <ImageDisplay {...this.props.file.after} />
          </Tab>
          <Tab
            className={styles.tab}
            label="Diff">
            <ImageDisplay {...this.props.file.diff} />
          </Tab>
        </Tabs>
        <Button
          className={styles.close}
          icon='close'
          floating
          onClick={this.refresh}
        />
      </div>
    )
  }
}
