import React from 'react'
import classNames from 'classnames'
import styles from './HomePage.module.scss'

import AppealsList from '../../components/AppealsList/AppealsList'
import AppealsForm from '../../components/AppealsForm/AppealsForm'
export default class HomePage extends React.Component {
  render() {
    return (
      <div className={classNames(styles.container)}>
        <AppealsList />
        <AppealsForm />
      </div>
    )
  }
}
