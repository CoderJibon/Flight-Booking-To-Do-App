import { DELETE_LIST_DATA, SUBMIT_FORM } from "./BookingListActionType";

//Booking List Action
export const Form_Submit = (value) => {
  return {
    type: SUBMIT_FORM,
    payload: { ...value, id: Math.floor(Math.random() * 1000 + 1000) },
  };
};

export const DeleteListData = (value) => {
  return {
    type: DELETE_LIST_DATA,
    payload: value,
  };
};
