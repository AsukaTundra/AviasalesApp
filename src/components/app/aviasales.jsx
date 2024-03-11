import startRequest from "../../hooks/start-get-data";
import FilterPanel from "../filter-panel";
import SortingPanel from "../sorting-panel";
import TicketsList from "../tickets-list";

import style from "./aviasales.module.scss";
import logo from "./logo.png";

export default function Aviasales() {
  startRequest();

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
