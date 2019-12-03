import axios from 'axios'

export const READ_EVENTS = 'READ_EVENTS'
export const CREATE_EVENT = 'CREATE_EVENT'
const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
const QUERYSTRING = '?token=token123'
export const readEvents = ()=> async dispatch => { 
  const responese = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
  console.log(responese)
    dispatch({type: READ_EVENTS ,responese})
}

export const postEvent = values => async dispatch => { 
  const responese = await axios.post(`${ROOT_URL}/events${QUERYSTRING}`,values)
  console.log(responese)
    dispatch({type: CREATE_EVENT,responese})
}

