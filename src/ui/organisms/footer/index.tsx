import styles from "./styles.module.scss";
import AvocadoLogo from "@assets/images/avocado_programming.svg";
import PoweredBy from "@assets/images/powered_by.svg";
import { Tab } from "@ui/atoms/tab";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.logo_navigation}>
        <div className={styles.logo}>
          <img src={AvocadoLogo.src} width={336} height={33} />
          <img src={PoweredBy.src} width={225} height={39} />
        </div>
        <div className={styles.navigation}>
          <Tab label="ホーム" />
          <Tab label="コース" />
          <Tab label="記事" />
          <Tab label="お問い合わせ" />
        </div>
      </div>
      <div className={styles.copyright}>©2025 アボカドプログラミング</div>
    </div>
  );
};
