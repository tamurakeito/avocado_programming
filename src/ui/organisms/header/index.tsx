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
        <Image src={AvocadoLogo} alt="アボカドプログラミング" width={180} />
        <div className={styles.navigation}>
          <Tab label="ホーム" />
          <Tab label="コース" />
          <Tab label="記事" />
          <Tab label="お問い合わせ" />
        </div>
      </div>
    </div>
  );
};
