import { GET_APPEALS, SUBMIT_APPEAL } from '../types'

export const getAppeals = (appeals) => ({
  type: GET_APPEALS,
  payload: appeals,
})

export const submitAppeal = (id) => ({
  type: SUBMIT_APPEAL,
  payload: id,
})
