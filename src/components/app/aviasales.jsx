import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { searchIdFetch, ticketsFetch } from "../../store/ticketsSlice";
import Transfers from "../transfers-panel";
import Prioority from "../priority-panel";
import TicketsList from "../tickets-list";

import style from "./aviasales.module.scss";
import logo from "./logo.png";

export default function Aviasales() {
  const dispatch = useDispatch();
  const thr = useSelector((state) => state.ticketsSlice);

  useEffect(() => {
    dispatch(searchIdFetch())
  }, [])

  useEffect(() => {
    if (thr.searchId) {
      dispatch(ticketsFetch(thr.searchId))
    }
  }, [thr.searchId, thr.tickets])

  console.log(thr);
  return (
    <div className={style.app}>
      <header className={style.header}>
        <img className={style.logo} src={logo} alt="logo" />
      </header>
      <main className={style.main}>
        <section>
          <Transfers />
        </section>
        <section>
          <Prioority />
          <TicketsList />
          <button className={style.button} onClick={() => console.log(thr.tickets)} type="button">
            показать еще 5 билетов!
          </button>
        </section>
      </main>
    </div>
  );
}
