import { DELETE_LIST_DATA, SUBMIT_FORM } from "./BookingListActionType";
import { initializeState } from "./initializeState";

//Reducer Booking Add List
const ReducerBookingAddList = (state = initializeState, { type, payload }) => {
  switch (type) {
    case SUBMIT_FORM:
      return (state = [...state, payload]);
    case DELETE_LIST_DATA:
      return (state = payload);
    default:
      return state;
  }
};

//export
export default ReducerBookingAddList;
