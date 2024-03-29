import { useDispatch, useSelector } from "react-redux";

import { handleViewTickets } from "../../store/app-slice";
import { error, loader, noResult } from "../instread-tickets/instread-tickets";
import Ticket from "../ticket";

import style from "./tickets-list.module.scss";

export default function TicketsList() {
  const dispatch = useDispatch();
  const { tickets: ticketsState } = useSelector((state) => state.AppSlice);

  const tickets = ticketsState.sortingTickets.map((item, index) => {
    const key = index + item.carrier;
    return <Ticket key={key} item={{ ...item, key }} />;
  });

  const button = (
    <button className={style.button} onClick={() => dispatch(handleViewTickets())} type="button">
      показать еще 5 билетов!
    </button>
  );

  /* условный рендер */

  let content =
    ticketsState.sortingTickets.length === 0 ? (
      noResult
    ) : (
      <>
        {tickets}
        {button}
      </>
    );

  if (ticketsState.loading) {
    content = loader;
  }
  if (ticketsState.error !== null || ticketsState.serverErrors.length > 10) {
    content = error;
  }

  return <div className={style.list}>{content}</div>;
}
