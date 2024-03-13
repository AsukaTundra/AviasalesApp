import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { thunkAsyncRequest, thunkAsyncSorting } from "../../store/app-slice";
import FilterPanel from "../filter-panel";
import SortingPanel from "../sorting-panel";
import TicketsList from "../tickets-list";

import style from "./aviasales.module.scss";
import logo from "./logo.png";

export default function Aviasales() {
  const dispatch = useDispatch();
  const { buttons: buttonsState, tickets: ticketsState } = useSelector((state) => state.AppSlice);
  const { serverErrors, error, searchId, tickets, viewTickets } = ticketsState;
  const { filter, sort } = buttonsState;

  useEffect(() => {
    dispatch(thunkAsyncSorting());
  }, [tickets, filter, sort, viewTickets]);

  useEffect(() => {
    dispatch(thunkAsyncRequest());
  }, [serverErrors, error, searchId, tickets]);

  return (
    <div className={style.app}>
      <header className={style.header}>
        <img className={style.logo} src={logo} alt="logo" />
      </header>
      <main className={style.main}>
        <section>
          <FilterPanel />
        </section>
        <section>
          <SortingPanel />
          <TicketsList />
        </section>
      </main>
    </div>
  );
}
