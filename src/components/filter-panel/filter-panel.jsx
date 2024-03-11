/* eslint-disable jsx-a11y/label-has-associated-control */
import { useSelector } from "react-redux";

import { FilterValues, handleFilter } from "../../store/app-slice";
import sortingTickets from "../../hooks/sorting-tickets";

import style from "./filter-panel.module.scss";

export default function FilterPanel() {
  const filterState = useSelector((state) => state.AppSlice.buttons.filter);

  return (
    <div className={style.panel}>
      <p className={style.title}>количество пересадок</p>
      <ul className={style.list}>
        <li className={style.item}>
          <input
            className={style.checkbox}
            onClick={() => sortingTickets(handleFilter, FilterValues.ALL)}
            checked={filterState.all}
            readOnly
            type="checkbox"
            id="transfer-all"
          />
          <label className={style.text} htmlFor="transfer-all">
            Все
          </label>
        </li>
        <li className={style.item}>
          <input
            className={style.checkbox}
            onClick={() => sortingTickets(handleFilter, FilterValues.NOT)}
            checked={filterState.not}
            readOnly
            type="checkbox"
            id="transfer-not"
          />
          <label className={style.text} htmlFor="transfer-not">
            Без пересадок
          </label>
        </li>
        <li className={style.item}>
          <input
            className={style.checkbox}
            onClick={() => sortingTickets(handleFilter, FilterValues.ONE)}
            checked={filterState.one}
            readOnly
            type="checkbox"
            id="transfer-one"
          />
          <label className={style.text} htmlFor="transfer-one">
            1 пересадка
          </label>
        </li>
        <li className={style.item}>
          <input
            className={style.checkbox}
            onClick={() => sortingTickets(handleFilter, FilterValues.TWO)}
            checked={filterState.two}
            readOnly
            type="checkbox"
            id="transfer-two"
          />
          <label className={style.text} htmlFor="transfer-two">
            2 пересадки
          </label>
        </li>
        <li className={style.item}>
          <input
            className={style.checkbox}
            onClick={() => sortingTickets(handleFilter, FilterValues.THREE)}
            checked={filterState.three}
            readOnly
            type="checkbox"
            id="transfer-three"
          />
          <label className={style.text} htmlFor="transfer-three">
            3 пересадки
          </label>
        </li>
      </ul>
    </div>
  );
}
