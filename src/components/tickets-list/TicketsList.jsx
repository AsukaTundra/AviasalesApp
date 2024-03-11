import { useSelector } from "react-redux";
import { handleViewTickets } from "../../store/app-slice";
import sortingTickets from "../../hooks/sorting-tickets";
import Ticket from "../ticket";
import ErrorAlert from "../error-alert";
import NoResultAlert from "../no-result-alert";
import style from "./tickets-list.module.scss";

export default function TicketsList() {
  const { tickets: ticketsState } = useSelector((state) => state.AppSlice);

  const error =
    ticketsState.error === null && ticketsState.serverErrors.length < 10 && ticketsState.sortingTickets.length === 0 ? (
      <NoResultAlert />
    ) : (
      ticketsState.sortingTickets.map((item, index) => {
        const key = index + item.carrier;
        return <Ticket key={key} item={item} />;
      })
    );
  let content;
  if (
    ticketsState.error === null &&
    ticketsState.serverErrors.length < 10 &&
    ticketsState.sortingTickets.length === 0
  ) {
    content = <NoResultAlert />;
  } else if (!(ticketsState.error === null && ticketsState.serverErrors.length < 10)) {
    content = <ErrorAlert />;
  } else {
    content = ticketsState.sortingTickets.map((item, index) => {
      const key = index + item.carrier;
      return <Ticket key={key} item={item} />;
    });
  }

  return (
    <div className={style.list}>
      {content}
      <button className={style.button} onClick={() => sortingTickets(handleViewTickets)} type="button">
        показать еще 5 билетов!
      </button>
    </div>
  );
}
