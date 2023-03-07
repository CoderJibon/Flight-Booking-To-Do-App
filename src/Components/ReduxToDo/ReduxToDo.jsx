import { useDispatch, useSelector } from "react-redux";
import { Form_Submit } from "../../Redux/ReducerBookingAddList/BookingLIstAction";
import {
  ChooseClassName,
  Destination_From,
  Destination_To,
  Guests,
  Journey_Date,
} from "../../Redux/ReducerBookingFrom/BookingFromAction";

const ReduxToDo = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.BookingForm);
  return (
    <div>
      <form
        onSubmit={(e) => (e.preventDefault(), dispatch(Form_Submit(selector)))}
        className="first-hero lws-inputform"
      >
        <div className="des-from">
          <p>Destination From</p>
          <div className="flex flex-row">
            <img src="./img/icons/Frame.svg" alt="" />
            <select
              onChange={(e) => dispatch(Destination_From(e.target.value))}
              className="outline-none px-2 py-2 w-full"
              name="from"
              id="lws-from"
              required
            >
              <option value="" hidden>
                Please Select
              </option>
              <option>Dhaka</option>
              <option>Sylhet</option>
              <option>Saidpur</option>
              <option>Cox's Bazar</option>
            </select>
          </div>
        </div>

        <div className="des-from">
          <p>Destination To</p>
          <div className="flex flex-row">
            <img src="./img/icons/Frame.svg" alt="" />
            <select
              onChange={(e) => dispatch(Destination_To(e.target.value))}
              className="outline-none px-2 py-2 w-full"
              name="to"
              id="lws-to"
              required
            >
              <option value="" hidden>
                Please Select
              </option>
              <option>Dhaka</option>
              <option>Sylhet</option>
              <option>Saidpur</option>
              <option>Cox's Bazar</option>
            </select>
          </div>
        </div>

        <div className="des-from">
          <p>Journey Date</p>
          <input
            onChange={(e) => dispatch(Journey_Date(e.target.value))}
            type="date"
            className="outline-none px-2 py-2 w-full date"
            name="date"
            id="lws-date"
            required
          />
        </div>

        <div className="des-from">
          <p>Guests</p>
          <div className="flex flex-row">
            <img src="./img/icons/Vector (1).svg" alt="" />
            <select
              onChange={(e) => dispatch(Guests(e.target.value))}
              className="outline-none px-2 py-2 w-full"
              name="guests"
              id="lws-guests"
              required
            >
              <option value="" hidden>
                Please Select
              </option>
              <option value="1">1 Person</option>
              <option value="2">2 Persons</option>
              <option value="3">3 Persons</option>
              <option value="4">4 Persons</option>
            </select>
          </div>
        </div>

        <div className="des-from !border-r-0">
          <p>className</p>
          <div className="flex flex-row">
            <img src="./img/icons/Vector (3).svg" alt="" />
            <select
              onChange={(e) => dispatch(ChooseClassName(e.target.value))}
              className="outline-none px-2 py-2 w-full"
              name="ticketclassName"
              id="lws-ticketclassName"
              required
            >
              <option value="" hidden>
                Please Select
              </option>
              <option>Business</option>
              <option>Economy</option>
            </select>
          </div>
        </div>

        <button className="addCity" type="submit" id="lws-addCity">
          <svg
            width="15px"
            height="15px"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          <span className="text-sm">Book</span>
        </button>
      </form>
    </div>
  );
};

export default ReduxToDo;
