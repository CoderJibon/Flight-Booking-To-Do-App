import { combineReducers } from "redux";
import ReducerBookingAddList from "./ReducerBookingAddList/ReducerBookingAddList";
import ReducerBookingFrom from "./ReducerBookingFrom/ReducerBookingFrom";

//Root Reducer
const RootReducer = combineReducers({
  BookingForm: ReducerBookingFrom,
  BookingList: ReducerBookingAddList,
});

//export
export default RootReducer;
