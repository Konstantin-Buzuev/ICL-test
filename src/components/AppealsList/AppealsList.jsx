import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import styles from './AppealsList.module.scss'

import { bindActionCreators } from 'redux'
import connect from 'react-redux/es/connect/connect'

import { fetchAppeals } from '../../redux/appeals/operations'
import { selectAppeal } from '../../redux/appeals/actions'
import { showForm, slideList, itemRemoved } from '../../redux/UI/actions'

import briefcase from '../../assets/icons/briefcase.svg'

class AppealsList extends React.Component {
  static propTypes = {
    fetchAppeals: PropTypes.func.isRequired,
    selectAppeal: PropTypes.func.isRequired,
    showForm: PropTypes.func.isRequired,
    slideList: PropTypes.func.isRequired,
    itemRemoved: PropTypes.func.isRequired,
    appeals: PropTypes.array.isRequired,
    selectedAppeal: PropTypes.string,
    listSlided: PropTypes.bool.isRequired,
    itemToRemove: PropTypes.string,
    animationDuration: PropTypes.number.isRequired,
  }
  onSelect(id) {
    this.props.selectAppeal(id)
    this.props.slideList()
    setTimeout(this.props.showForm, this.props.animationDuration)
  }

  mapAppealsToRender = () =>
    this.props.appeals.map((appeal) => {
      let isSelected = appeal.id === this.props.selectedAppeal
      let toRemove = appeal.id === this.props.itemToRemove
      if (toRemove)
        setTimeout(this.props.itemRemoved, this.props.animationDuration)
      return (
        <div
          className={classNames(
            styles.card,
            isSelected && styles.card_selected,
            toRemove && styles.card_removing
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
          this.props.listSlided && styles.wrapper_slide
        )}
        children={this.mapAppealsToRender()}
      ></aside>
    )
  }
}

const mapStateToProps = ({ appealsReducer, uiReducer }) => ({
  appeals: appealsReducer.appeals,
  selectedAppeal: appealsReducer.selectedAppeal,
  listSlided: uiReducer.listSlided,
  itemToRemove: uiReducer.itemToRemove,
  animationDuration: uiReducer.animationDuration,
})
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    { fetchAppeals, selectAppeal, showForm, slideList, itemRemoved },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(AppealsList)
