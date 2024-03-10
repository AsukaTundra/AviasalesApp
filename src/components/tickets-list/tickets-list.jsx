import { useDispatch, useSelector } from "react-redux";

import { handleViewTickets } from "../../store/tickets-slice";
import Ticket from "../ticket";
import ErrorAlert from "../error-alert";

import style from "./tickets-list.module.scss";

export default function TicketsList() {
  const dispatch = useDispatch();
  const ticketsState = useSelector((state) => state.TicketsSlice);

  const elements = ticketsState.tickets.slice(0, ticketsState.viewTickets).map((item, index) => {
    const key = index + item.carrier;
    return <Ticket key={key} item={item} />;
  });

  const content = ticketsState.error === null && ticketsState.serverErrors.length < 10 ? elements : <ErrorAlert />;

  return (
    <div className={style.list}>
      {content}
      <button className={style.button} onClick={() => dispatch(handleViewTickets())} type="button">
        показать еще 5 билетов!
      </button>
    </div>
  );
}
