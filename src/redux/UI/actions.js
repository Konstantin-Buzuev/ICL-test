import { FORM_SHOW, FORM_HIDE, LIST_CENTER, LIST_SLIDE } from '../types'

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
