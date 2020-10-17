import {
  FORM_SHOW,
  FORM_HIDE,
  LIST_CENTER,
  LIST_SLIDE,
  REMOVE_ITEM,
  ITEM_REMOVED,
} from '../types'

export const showForm = () => ({
  type: FORM_SHOW,
  payload: true,
})

export const hideForm = () => ({
  type: FORM_HIDE,
  payload: false,
})

export const slideList = () => ({
  type: LIST_SLIDE,
  payload: true,
})

export const centerList = () => ({
  type: LIST_CENTER,
  payload: false,
})

export const removeItem = (id) => ({
  type: REMOVE_ITEM,
  payload: id,
})

export const itemRemoved = () => ({
  type: ITEM_REMOVED,
  payload: null,
})
