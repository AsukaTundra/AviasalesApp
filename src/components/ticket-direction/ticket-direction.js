import style from "./ticket-direction.module.scss";

export default function TicketDirection({ segments }) {
  const { date, destanation, duration, origin, stops } = segments;

  return (
    <div className={style.route}>
      <div>
        <p className={style.parametr}>
          {origin} - {destanation}
        </p>
        <p className={style.value}>{date}</p>
      </div>
      <div>
        <p className={style.parametr}>В ПУТИ</p>
        <p className={style.value}>{duration}</p>
      </div>
      <div>
        <p className={style.parametr}>{stops.length} ПЕРЕСАДКИ</p>
        <p className={style.value}>{stops}</p>
      </div>
    </div>
  );
}
