/* eslint-disable jsx-a11y/label-has-associated-control */
import { useDispatch, useSelector } from "react-redux";

import { PriorityValue, ChangePriority } from "../../store/prioritySlice";

import scss from "./priority.module.scss";

function Priority() {
  const priority = useSelector((state) => state.priorityPanel);
  const dispatch = useDispatch();

  return (
    <div className={scss.panel}>
      <div className={`${scss.item} ${priority.sort === "cheap" ? scss.checked : null}`}>
        <input
          className={scss.button}
          onClick={() => dispatch(ChangePriority(PriorityValue.CHEAP))}
          type="radio"
          id="s1S"
          name="sorting-low"
          value="low"
        />
        <label className={scss.text} htmlFor="s1S">
          самый дешевый
        </label>
      </div>
      <div className={`${scss.item} ${priority.sort === "fast" ? scss.checked : null}`}>
        <input
          className={scss.button}
          onClick={() => dispatch(ChangePriority(PriorityValue.FAST))}
          type="radio"
          id="sorting-fast"
          name="sorting"
          value="fast"
        />
        <label className={scss.text} htmlFor="sorting-fast">
          самый быстрый
        </label>
      </div>
      <div className={`${scss.item} ${priority.sort === "optimal" ? scss.checked : null}`}>
        <input
          className={scss.button}
          onClick={() => dispatch(ChangePriority(PriorityValue.OPTIMAL))}
          type="radio"
          id="sorting-optimal"
          name="sorting"
          value="optimal"
        />
        <label className={scss.text} htmlFor="sorting-optimal">
          оптимальный
        </label>
      </div>
    </div>
  );
}

export default Priority;
