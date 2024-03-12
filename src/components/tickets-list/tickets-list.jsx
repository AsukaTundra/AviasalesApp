import { useSelector } from "react-redux";

import { handleViewTickets } from "../../store/app-slice";
import sortingTickets from "../../hooks/sorting-tickets";
import { error, loader, noResult } from "../instread-tickets/instread-tickets";
import Ticket from "../ticket";

import style from "./tickets-list.module.scss";

export default function TicketsList() {
  const { tickets: ticketsState } = useSelector((state) => state.AppSlice);

  const tickets = ticketsState.sortingTickets.map((item, index) => {
    const key = index + item.carrier;
    return <Ticket key={key} item={{ ...item, key }} />;
  });

  const button = (
    <button className={style.button} onClick={() => sortingTickets(handleViewTickets)} type="button">
      показать еще 5 билетов!
    </button>
  );

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
