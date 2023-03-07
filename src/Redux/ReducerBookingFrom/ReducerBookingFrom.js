import { initializeState } from "./initializeState";
import {
  CLASS_NAME,
  DESTINATION_FROM,
  DESTINATION_TO,
  GUESTS,
  JOURNEY_DATE,
} from "./BookingFromActionType";

// reducer Booking From
const ReducerBookingFrom = (state = initializeState, { type, payload }) => {
  switch (type) {
    case DESTINATION_FROM:
      return (state = {
        ...state,
        DestinationFrom: payload,
      });
    case DESTINATION_TO:
      return (state = {
        ...state,
        DestinationTo: payload,
      });
    case JOURNEY_DATE:
      return (state = {
        ...state,
        JourneyDate: payload,
      });
    case GUESTS:
      return (state = {
        ...state,
        Guests: payload,
      });
    case CLASS_NAME:
      return (state = {
        ...state,
        className: payload,
      });
    default:
      return state;
  }
};

//export
export default ReducerBookingFrom;
