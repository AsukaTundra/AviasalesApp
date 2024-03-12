import { Spin } from "antd";

import style from "./instread-tickets.module.scss";

const container = (text) => {
  return (
    <div className={style.div}>
      <p className={style.text}>{text}</p>
    </div>
  );
};

/* альтернативные контейнеры заместо тикетов */

export const noResult = container("таких билетов у нас нет :(");

export const error = container("ошибка, загляни чуть позже :)");

export const loader = (
  <div className={`${style.div} ${style.divLoading}`}>
    <Spin size="large" />
  </div>
);
