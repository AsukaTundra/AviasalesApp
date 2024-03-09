/* eslint-disable jsx-a11y/label-has-associated-control */
import { useDispatch, useSelector } from "react-redux";

import { SortValues, handleSort } from "../../store/interface-slice";

import style from "./sorting-panel.module.scss";

export default function SortingPanel() {
  const sortState = useSelector((state) => state.InterfaceSlice);
  const dispatch = useDispatch();
  return (
    <div className={style.panel}>
      <div className={`${style.item} ${sortState.sort === SortValues.CHEAP ? style.checked : null}`}>
        <input
          className={style.button}
          onClick={() => dispatch(handleSort(SortValues.CHEAP))}
          type="radio"
          id="sorting-cheap"
          name="sorting-low"
          value="low"
        />
        <label className={style.text} htmlFor="sorting-cheap">
          самый дешевый
        </label>
      </div>
      <div className={`${style.item} ${sortState.sort === SortValues.FAST ? style.checked : null}`}>
        <input
          className={style.button}
          onClick={() => dispatch(handleSort(SortValues.FAST))}
          type="radio"
          id="sorting-fast"
          name="sorting"
          value="fast"
        />
        <label className={style.text} htmlFor="sorting-fast">
          самый быстрый
        </label>
      </div>
      <div className={`${style.item} ${sortState.sort === SortValues.OPTIMAL ? style.checked : null}`}>
        <input
          className={style.button}
          onClick={() => dispatch(handleSort(SortValues.OPTIMAL))}
          type="radio"
          id="sorting-optimal"
          name="sorting"
          value="optimal"
        />
        <label className={style.text} htmlFor="sorting-optimal">
          оптимальный
        </label>
      </div>
    </div>
  );
}
