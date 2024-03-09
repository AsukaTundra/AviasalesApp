import style from "./error-alert.module.scss";

export default function ErrorAlert() {
  return (
    <div className={style.divError}>
      <p className={style.errorText}>Error, try again later.</p>
    </div>
  );
}
