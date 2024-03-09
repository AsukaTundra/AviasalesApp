import { useDispatch, useSelector } from "react-redux";

import { handleViewTickets } from "../../store/tickets-slice";
import Ticket from "../ticket";

import style from "./tickets-list.module.scss";

export default function TicketsList() {
  const dispatch = useDispatch();
  const ticketsState = useSelector((state) => state.TicketsSlice);

  const elements = ticketsState.tickets
    .slice(0, ticketsState.viewTickets)
    .map((item) => <Ticket key={1} item={item} />);

  return (
    <div className={style.list}>
      {elements}
      <button className={style.button} onClick={() => dispatch(handleViewTickets())} type="button">
        показать еще 5 билетов!
      </button>
    </div>
  );
}
