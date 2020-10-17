import {
  FORM_SHOW,
  FORM_HIDE,
  LIST_CENTER,
  LIST_SLIDE,
  REMOVE_ITEM,
  ITEM_REMOVED,
} from '../types'

const initialState = {
  listSlided: false,
  formShown: false,
  itemToRemove: null,
  animationDuration: 700,
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
    case ITEM_REMOVED:
    case REMOVE_ITEM: {
      return {
        ...state,
        itemToRemove: action.payload,
      }
    }
    default:
      return state
  }
}
