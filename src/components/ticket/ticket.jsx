import scss from "./ticket.module.scss";
import S7logo from "./S7Logo.svg";

export default function Ticket() {
  return (
    <div className={scss.ticket}>
      <div className={scss.title}>
        <p className={scss.price}>13 400 Р</p>
        <img className={scss.logo} src={S7logo} alt="company" />
      </div>
      <div className={scss.discription}>
        <div className={scss.route}>
          <div>
            <p className={scss.parametr}>MOW - HKT</p>
            <p className={scss.value}>11:20 - 00:50</p>
          </div>
          <div>
            <p className={scss.parametr}>В ПУТИ</p>
            <p className={scss.value}>21ч 15м</p>
          </div>
          <div>
            <p className={scss.parametr}>2 ПЕРЕСАДКИ</p>
            <p className={scss.value}>HKG, JNB</p>
          </div>
        </div>
        <div className={scss.route}>
          <div>
            <p className={scss.parametr}>MOW - HKT</p>
            <p className={scss.value}>11:20 - 00:50</p>
          </div>
          <div>
            <p className={scss.parametr}>В ПУТИ</p>
            <p className={scss.value}>21ч 15м</p>
          </div>
          <div>
            <p className={scss.parametr}>2 ПЕРЕСАДКИ</p>
            <p className={scss.value}>HKG, JNB</p>
          </div>
        </div>
      </div>
    </div>
  );
}
