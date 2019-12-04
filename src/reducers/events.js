import _ from 'lodash'
import {
  CREATE_EVENT,
  READ_EVENTS,
  READ_EVENT,
  UPDETE_EVENT,
  DELETE_EVENT,
} from '../actions'

export default (events = {}, action) => {
  switch (action.type) {
    case CREATE_EVENT:
    case READ_EVENT:
    case UPDETE_EVENT:
      const data= action.response.data
      return{ ...events,[data.id]:data}
      //{id: 4, title: "Let's have an event 4!", body: "This is the body for event 4."}
    case READ_EVENTS:

      //[
      //{"id":1,"title":"Let's have an event 1!","body":"This is the body for event 1."},
      //{"id":2,"title":"Let's have an event 2!","body":"This is the body for event 2."}
      //]
      return _.mapKeys(action.response.data, 'id')
    case DELETE_EVENT:
      delete events[action.id]
      return {...events}
    default:
      return events
  }
}