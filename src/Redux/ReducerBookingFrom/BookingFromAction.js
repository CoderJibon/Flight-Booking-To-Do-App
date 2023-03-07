import {
  CLASS_NAME,
  DESTINATION_FROM,
  DESTINATION_TO,
  GUESTS,
  JOURNEY_DATE,
} from "./BookingFromActionType";

//Destination From
export const Destination_From = (value) => {
  return { type: DESTINATION_FROM, payload: value };
};
//Destination To
export const Destination_To = (value) => {
  return { type: DESTINATION_TO, payload: value };
};
//Journey Date
export const Journey_Date = (value) => {
  return { type: JOURNEY_DATE, payload: value };
};
//Guests
export const Guests = (value) => {
  return { type: GUESTS, payload: value };
};
//className
export const ChooseClassName = (value) => {
  return { type: CLASS_NAME, payload: value };
};
