import { GET_APPEALS, SELECT_APPEAL, SUBMIT_APPEAL } from '../types'

export const getAppeals = (appeals) => ({
  type: GET_APPEALS,
  payload: appeals,
})

export const selectAppeal = (id) => ({
  type: SELECT_APPEAL,
  payload: id,
})

export const submitAppeal = (id) => ({
  type: SUBMIT_APPEAL,
  payload: id,
})
