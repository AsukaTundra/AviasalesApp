import TicketDirection from "../ticket-direction";

import style from "./ticket.module.scss";

export default function Ticket({ item }) {
  const { carrier, price, segments, key: ticketKey } = item;

  const convertDiscription = segments.map((elem, index) => {
    const key = index + ticketKey;
    return <TicketDirection key={key} segments={elem} />;
  });

  const convertPrice = Array.from(String(price)).reverse();
  convertPrice.splice(3, 0, " ");
  convertPrice.reverse();

  return (
    <div className={style.ticket}>
      <div className={style.title}>
        <p className={style.price}>{convertPrice} Р</p>
        <img className={style.logo} src={`https://pics.avs.io/99/36/${carrier}.png`} alt={carrier} />
      </div>
      <div className={style.discription}>{convertDiscription}</div>
    </div>
  );
}
