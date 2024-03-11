import { format, add } from "date-fns";

import style from "./ticket-direction.module.scss";

export default function TicketDirection({ segments }) {
  const { date, destination, duration, origin, stops } = segments;

  const convertDate = (oldDate) => {
    const plusNull = (time) => {
      const newItem = time.split(":").map((item) => (item.length === 1 ? `0${item}` : item));
      return newItem.join(":");
    };
    const startTime = `${format(new Date(oldDate), "k:m")}`;
    const endTime = `${format(add(new Date(oldDate), { hours: Math.floor(duration / 60), minutes: duration % 60 }), "k:m")}`;
    return `${plusNull(startTime)} - ${plusNull(endTime)}`;
  };

  const convertTime = `${Math.floor(duration / 60)}ч ${duration % 60}м`;

  const stopsLength = stops.length ? `${stops.length} ПЕРЕСАДКИ` : "ПРЯМОЙ РЕЙС";

  return (
    <div className={style.route}>
      <div className={style.date}>
        <p className={style.parametr}>
          {origin} - {destination}
        </p>
        <p className={style.value}>{convertDate(date)}</p>
      </div>
      <div className={style.time}>
        <p className={style.parametr}>В ПУТИ</p>
        <p className={style.value}>{convertTime}</p>
      </div>
      <div className={style.stops}>
        <p className={style.parametr}>{stopsLength}</p>
        <p className={style.value}>{stops.join(", ")}</p>
      </div>
    </div>
  );
}
