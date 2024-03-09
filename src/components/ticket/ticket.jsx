import TicketDirection from "../ticket-direction";

import style from "./ticket.module.scss";
import testLogo from "./test-logo.svg";

export default function Ticket({ item }) {
  const { carrier, price, segments } = item;

  const elements = segments.map((elem) => <TicketDirection key={1} segments={elem} />);

  return (
    <div className={style.ticket}>
      <div className={style.title}>
        <p className={style.price}>{price} Р</p>
        <img className={style.logo} src={testLogo} alt={carrier} />
      </div>
      <div className={style.discription}>{elements}</div>
    </div>
  );
}
