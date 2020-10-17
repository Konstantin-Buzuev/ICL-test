import { GET_APPEALS, SELECT_APPEAL, SUBMIT_APPEAL } from '../types'

const initialState = {
  appeals: [],
  selectedAppeal: null,
}

export default function appealsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_APPEALS: {
      return {
        ...state,
        appeals: action.payload,
      }
    }
    case SELECT_APPEAL: {
      return {
        ...state,
        selectedAppeal: action.payload,
      }
    }
    case SUBMIT_APPEAL: {
      state.appeals.splice(
        state.appeals.findIndex((appeal) => appeal.id === action.payload),
        1
      )
      return {
        ...state,
        selectedAppeal: null,
      }
    }
    default:
      return state
  }
}
