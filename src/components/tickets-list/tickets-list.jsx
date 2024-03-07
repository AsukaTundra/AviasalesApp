// import { useSelector } from "react-redux";

import Ticket from "../ticket";

import scss from "./tickets-list.module.scss";

export default function TicketsList() {
  return (
    <div className={scss.list}>
      <Ticket />
      <Ticket />
    </div>
  );
}
