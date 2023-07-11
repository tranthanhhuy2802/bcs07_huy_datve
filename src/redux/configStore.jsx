import { configureStore } from "@reduxjs/toolkit";
import { bookticketReducer } from "./bookTicketReducer";

export const store = configureStore({
  reducer: {
 bookTicket: bookticketReducer,
  },
  
});
