import Transfers from "../transfers-panel";
import Prioority from "../priority-panel";
import TicketsList from "../tickets-list";

import style from "./aviasales.module.scss";
import logo from "./logo.png";

export default function Aviasales() {
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
          <button className={style.button} type="button">
            показать еще 5 билетов!
          </button>
        </section>
      </main>
    </div>
  );
}
