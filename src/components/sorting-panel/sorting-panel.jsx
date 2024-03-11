import { useSelector } from "react-redux";

import { SortValues, handleSort } from "../../store/app-slice";
import sortingTickets from "../../hooks/sorting-tickets";

import style from "./sorting-panel.module.scss";

export default function SortingPanel() {
  const sortState = useSelector((state) => state.AppSlice.buttons.sort);

  return (
    <div className={style.panel}>
      <div className={`${style.item} ${sortState === SortValues.CHEAP ? style.checked : null}`}>
        <input
          className={style.button}
          onClick={() => sortingTickets(handleSort, SortValues.CHEAP)}
          type="radio"
          id="cheap"
          name="sorting"
          value="low"
        />
        <label className={style.text} htmlFor="cheap">
          самый дешевый
        </label>
      </div>
      <div className={`${style.item} ${sortState === SortValues.FAST ? style.checked : null}`}>
        <input
          className={style.button}
          onClick={() => sortingTickets(handleSort, SortValues.FAST)}
          type="radio"
          id="fast"
          name="sorting"
          value="fast"
        />
        <label className={style.text} htmlFor="fast">
          самый быстрый
        </label>
      </div>
      <div className={`${style.item} ${sortState === SortValues.OPTIMAL ? style.checked : null}`}>
        <input
          className={style.button}
          onClick={() => sortingTickets(handleSort, SortValues.OPTIMAL)}
          type="radio"
          id="optimal"
          name="sorting"
          value="optimal"
        />
        <label className={style.text} htmlFor="optimal">
          оптимальный
        </label>
      </div>
    </div>
  );
}
