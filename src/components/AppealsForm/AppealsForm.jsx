import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import styles from './AppealsForm.module.scss'

import { bindActionCreators } from 'redux'
import connect from 'react-redux/es/connect/connect'
import { submitAppeal } from '../../redux/appeals/actions'
import { centerList, hideForm } from '../../redux/UI/actions'

import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Button from '@material-ui/core/Button'

class AppealsList extends React.Component {
  static propTypes = {
    submitAppeal: PropTypes.func.isRequired,
    centerList: PropTypes.func.isRequired,
    hideForm: PropTypes.func.isRequired,
    selectedAppeal: PropTypes.string,
  }
  // State сделан без учета передачи данных об обращении. Правильно прокидывать все данные в пропсах.
  state = {
    customer: '',
    appealText: '',
  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  onSubmit() {
    this.props.submitAppeal(this.props.selectedAppeal)
    this.props.hideForm()
    setTimeout(this.props.centerList(), 700)
  }

  render() {
    return (
      <form
        className={classNames(
          styles.form,
          !this.props.formShown && styles.form_hidding
        )}
      >
        <TextField
          disabled
          variant="filled"
          label="Номер обращения"
          value={this.props.selectedAppeal}
        />

        <FormControl>
          <InputLabel>Потребитель</InputLabel>
          <Select
            name="customer"
            value={this.state.customer}
            onChange={this.handleChange}
          >
            <MenuItem value={'Физическое лицо'}>Физическое лицо</MenuItem>
            <MenuItem value={'Юридическое лицо'}>Юридическое лицо</MenuItem>
            <MenuItem value={'Гос. структура'}>Гос. структура</MenuItem>
          </Select>
        </FormControl>

        <TextField
          variant="outlined"
          label="Текст обращения"
          name="appealText"
          value={this.props.appealText}
          onChange={this.handleChange}
          multiline
          rows={5}
        />

        <Button
          variant="contained"
          color="primary"
          size="medium"
          onClick={() => this.onSubmit()}
        >
          Принять в работу!
        </Button>
      </form>
    )
  }
}

const mapStateToProps = ({ appealsReducer, uiReducer }) => ({
  selectedAppeal: appealsReducer.selectedAppeal,
  formShown: uiReducer.formShown,
})
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ submitAppeal, centerList, hideForm }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(AppealsList)
