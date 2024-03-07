import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { searchIdFetch, ticketsFetch } from "../../store/ticketsSlice";
import Transfers from "../transfers-panel";
import Prioority from "../priority-panel";
import TicketsList from "../tickets-list";
import ErrorAlert from "../error-alert";

import style from "./aviasales.module.scss";
import logo from "./logo.png";

export default function Aviasales() {
  const dispatch = useDispatch();
  const thr = useSelector((state) => state.ticketsSlice);

  useEffect(() => {
    dispatch(searchIdFetch())
  }, [])

  useEffect(() => {
    if (thr.searchId && thr.serverErrors.length < 10 && !thr.error) {
      dispatch(ticketsFetch(thr.searchId))
    }
  }, [thr.searchId, thr.tickets, thr.serverErrors])

  const content = thr.error ? <ErrorAlert /> : (
    <>
      <header className={style.header}>
        <img className={style.logo} src={logo} alt="logo" />
      </header><main className={style.main}>
        <section>
          <Transfers />
        </section>
        <section>
          <Prioority />
          <TicketsList />
          <button className={style.button} type="button">
            показать еще 5 билетов!
          </button>
        </section>
      </main>
    </>)

  return (
    <div className={style.app}>
      {content}
    </div>
  );
}
