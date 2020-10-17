import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import styles from './AppealsList.module.scss'

import { bindActionCreators } from 'redux'
import connect from 'react-redux/es/connect/connect'

import { fetchAppeals } from '../../redux/appeals/operations'
import { selectAppeal } from '../../redux/appeals/actions'

import briefcase from '../../assets/icons/briefcase.svg'

class AppealsList extends React.Component {
  static propTypes = {
    fetchAppeals: PropTypes.func.isRequired,
    selectAppeal: PropTypes.func.isRequired,
    appeals: PropTypes.array.isRequired,
    selectedAppeal: PropTypes.string,
  }
  onSelect(id) {
    if (this.props.selectedAppeal) id = null // TODO: remove after impement of submitAppeal method
    this.props.selectAppeal(id)
  }

  mapAppealsToRender = () =>
    this.props.appeals.map((appeal) => {
      let isSelected = appeal.id === this.props.selectedAppeal
      return (
        <div
          className={classNames(
            styles.card,
            isSelected && styles.card_selected
          )}
          key={appeal.id}
          onClick={() => this.onSelect(appeal.id)}
        >
          <div className={classNames(styles.card__icon__container)}>
            <img
              src={briefcase}
              alt=""
              className={classNames(styles.card__icon)}
            />
          </div>

          <div className={classNames(styles.card__content)}>
            <span className={classNames(styles.card__header)}>Обращение</span>
            <span className={classNames(styles.card__id)}>{appeal.id}</span>
          </div>
        </div>
      )
    })

  componentDidMount() {
    this.props.fetchAppeals()
  }
  render() {
    return (
      <aside
        className={classNames(
          styles.wrapper,
          this.props.selectedAppeal && styles.wrapper_slide
        )}
        children={this.mapAppealsToRender()}
      ></aside>
    )
  }
}

const mapStateToProps = ({ appealsReducer }) => ({
  appeals: appealsReducer.appeals,
  selectedAppeal: appealsReducer.selectedAppeal,
})
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ fetchAppeals, selectAppeal }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(AppealsList)
