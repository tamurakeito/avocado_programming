import styles from "./styles.module.scss";
import AvocadoLogo from "@assets/images/avocado_programming.svg";
import { Tab } from "@ui/atoms/tab";
import { Divider } from "@ui/atoms/divider";
import Image from "next/image";

export const Header = () => {
  return (
    <div className={styles.header}>
      <Divider />
      <div className={styles.header_content}>
        <a href="/" className={styles.logo}>
          <Image src={AvocadoLogo} alt="アボカドプログラミング" width={180} />
        </a>
        <div className={styles.navigation}>
          <Tab label="アボカドプログラミングについて" href="/about" />
          <Tab label="コース" href="/course" />
          <Tab label="エラーでつまづいたら..." href="/error-handling" />
          <Tab label="お問い合わせ" href="/contact" />
        </div>
      </div>
    </div>
  );
};
