import styles from "./styles.module.scss";
import AvocadoLogo from "@assets/images/avocado_programming.svg";
import PoweredBy from "@assets/images/powered_by.svg";
import { Tab } from "@ui/atoms/tab";
import Image from "next/image";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.logo_navigation}>
        <a className={styles.logo} href="/">
          <Image src={AvocadoLogo} alt="アボカドプログラミング" width={240} />
          <Image src={PoweredBy} alt="Powered by 慧陽社" width={180} />
        </a>
        <div className={styles.navigation}>
          <Tab label="アボカドプログラミングについて" href="/about" />
          <Tab label="コース" href="/course" />
          <Tab label="エラーでつまづいたら..." href="/error-handling" />
          <Tab label="お問い合わせ" href="/contact" />
        </div>
      </div>
      <div className={styles.copyright}>©2025 アボカドプログラミング</div>
    </div>
  );
};
