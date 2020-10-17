import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import styles from './HomePage.module.scss'

import connect from 'react-redux/es/connect/connect'

import AppealsList from '../../components/AppealsList/AppealsList'
import AppealsForm from '../../components/AppealsForm/AppealsForm'
class HomePage extends React.Component {
  static propTypes = {
    formShown: PropTypes.bool.isRequired,
  }
  render() {
    return (
      <div className={classNames(styles.container)}>
        <AppealsList />
        {this.props.formShown && <AppealsForm />}
      </div>
    )
  }
}

const mapStateToProps = ({ uiReducer }) => ({
  formShown: uiReducer.formShown,
})

export default connect(mapStateToProps)(HomePage)
