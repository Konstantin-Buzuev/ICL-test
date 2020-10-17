import { getAppeals } from './actions'

export const fetchAppeals = () => async (dispatch) => {
  try {
    const res = await fetch(
      'https://5f8a894f8453150016705fb1.mockapi.io/appeals'
    )
    if (!res.ok) {
      let errData = await res.json()
      const err = {
        ...errData,
        type: 'error',
      }
      throw err
    }
    const data = await res.json()
    dispatch(getAppeals(data))
  } catch (err) {
    // TODO Здесь прописать обработчик ошибок
  }
}
