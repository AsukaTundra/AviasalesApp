import { useDispatch, useSelector } from "react-redux";

import { FilterValues, handleFilter } from "../../store/app-slice";

import style from "./filter-panel.module.scss";

export default function FilterPanel() {
  const dispatch = useDispatch();
  const filterState = useSelector((state) => state.AppSlice.buttons.filter);

  return (
    <div className={style.panel}>
      <p className={style.title}>количество пересадок</p>
      <ul className={style.list}>
        <li className={style.item}>
          <input
            className={style.checkbox}
            onClick={() => dispatch(handleFilter(FilterValues.ALL))}
            checked={filterState.all}
            readOnly
            type="checkbox"
            id="all"
          />
          <label className={style.text} htmlFor="all">
            Все
          </label>
        </li>
        <li className={style.item}>
          <input
            className={style.checkbox}
            onClick={() => dispatch(handleFilter(FilterValues.NOT))}
            checked={filterState.not}
            readOnly
            type="checkbox"
            id="not"
          />
          <label className={style.text} htmlFor="not">
            Без пересадок
          </label>
        </li>
        <li className={style.item}>
          <input
            className={style.checkbox}
            onClick={() => dispatch(handleFilter(FilterValues.ONE))}
            checked={filterState.one}
            readOnly
            type="checkbox"
            id="one"
          />
          <label className={style.text} htmlFor="one">
            1 пересадка
          </label>
        </li>
        <li className={style.item}>
          <input
            className={style.checkbox}
            onClick={() => dispatch(handleFilter(FilterValues.TWO))}
            checked={filterState.two}
            readOnly
            type="checkbox"
            id="two"
          />
          <label className={style.text} htmlFor="two">
            2 пересадки
          </label>
        </li>
        <li className={style.item}>
          <input
            className={style.checkbox}
            onClick={() => dispatch(handleFilter(FilterValues.THREE))}
            checked={filterState.three}
            readOnly
            type="checkbox"
            id="three"
          />
          <label className={style.text} htmlFor="three">
            3 пересадки
          </label>
        </li>
      </ul>
    </div>
  );
}
