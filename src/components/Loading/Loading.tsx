import { FC } from "react";
import styles from "./Loading.module.css";

const LoadingIndicator: FC = () => {
  return (
    <div className={`${styles.sk_chase}`}>
      <div className={`${styles.sk_chase_dot}`}></div>
      <div className={`${styles.sk_chase_dot}`}></div>
      <div className={`${styles.sk_chase_dot}`}></div>
      <div className={`${styles.sk_chase_dot}`}></div>
      <div className={`${styles.sk_chase_dot}`}></div>
      <div className={`${styles.sk_chase_dot}`}></div>
    </div>
  );
};

export default LoadingIndicator;
