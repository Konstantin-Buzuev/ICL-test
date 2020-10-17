import { FORM_SHOW, FORM_HIDE, LIST_CENTER, LIST_SLIDE } from '../types'

const initialState = {
  listSlided: false,
  formShown: false,
  itemToKill: null,
}

export default function uiReducer(state = initialState, action) {
  switch (action.type) {
    case FORM_SHOW:
    case FORM_HIDE: {
      return {
        ...state,
        formShown: action.payload,
      }
    }
    case LIST_SLIDE:
    case LIST_CENTER: {
      return {
        ...state,
        listSlided: action.payload,
      }
    }

    default:
      return state
  }
}
