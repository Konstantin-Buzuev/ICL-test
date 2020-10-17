import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import styles from './HomePage.module.scss'

import connect from 'react-redux/es/connect/connect'

import AppealsList from '../../components/AppealsList/AppealsList'
class HomePage extends React.Component {
  static propTypes = {
    selectedAppeal: PropTypes.string,
  }
  render() {
    return (
      <div className={classNames(styles.container)}>
        <AppealsList />
        {/* TODO: remove after AppealsForm created */}
        {this.props.selectedAppeal && (
          <div className={classNames(styles.form)}>Form be there!</div>
        )}
      </div>
    )
  }
}

const mapStateToProps = ({ appealsReducer }) => ({
  selectedAppeal: appealsReducer.selectedAppeal,
})

export default connect(mapStateToProps)(HomePage)
