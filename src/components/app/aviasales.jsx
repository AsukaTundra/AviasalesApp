import { useDispatch } from "react-redux";

import FilterPanel from "../filter-panel";
import { thunkAsyncRequest } from "../../store/app-slice";
import SortingPanel from "../sorting-panel";
import TicketsList from "../tickets-list";

import style from "./aviasales.module.scss";
import logo from "./logo.png";

export default function Aviasales() {
  const dispatch = useDispatch();
  dispatch(thunkAsyncRequest(1));

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
