/* eslint-disable jsx-a11y/label-has-associated-control */
import { useDispatch, useSelector } from "react-redux";

import { ChangeTransfers, TransfersCheckbox } from "../../store/transfersReducer";

import scss from "./transfers.module.scss";

function Transfers() {
  const transfers = useSelector((state) => state.transfersPanel);
  const dispatch = useDispatch();

  const { all, not, one, two, three } = transfers;
  return (
    <div className={scss.transfers}>
      <p className={scss.title}>количество пересадок</p>
      <ul className={scss.list}>
        <li className={scss.item}>
          <input
            className={scss.checkbox}
            onClick={() => dispatch(ChangeTransfers(TransfersCheckbox.ALL))}
            checked={all}
            readOnly
            type="checkbox"
            id="transfer-all"
          />
          <label className={scss.text} htmlFor="transfer-all">
            Все
          </label>
        </li>
        <li className={scss.item}>
          <input
            className={scss.checkbox}
            onClick={() => dispatch(ChangeTransfers(TransfersCheckbox.NOT))}
            checked={not}
            readOnly
            type="checkbox"
            id="transfer-not"
          />
          <label className={scss.text} htmlFor="transfer-not">
            Без пересадок
          </label>
        </li>
        <li className={scss.item}>
          <input
            className={scss.checkbox}
            onClick={() => dispatch(ChangeTransfers(TransfersCheckbox.ONE))}
            checked={one}
            readOnly
            type="checkbox"
            id="transfer-one"
          />
          <label className={scss.text} htmlFor="transfer-one">
            1 пересадка
          </label>
        </li>
        <li className={scss.item}>
          <input
            className={scss.checkbox}
            onClick={() => dispatch(ChangeTransfers(TransfersCheckbox.TWO))}
            checked={two}
            readOnly
            type="checkbox"
            id="transfer-two"
          />
          <label className={scss.text} htmlFor="transfer-two">
            2 пересадки
          </label>
        </li>
        <li className={scss.item}>
          <input
            className={scss.checkbox}
            onClick={() => dispatch(ChangeTransfers(TransfersCheckbox.THREE))}
            checked={three}
            readOnly
            type="checkbox"
            id="transfer-three"
          />
          <label className={scss.text} htmlFor="transfer-three">
            3 пересадки
          </label>
        </li>
      </ul>
    </div>
  );
}

export default Transfers;
