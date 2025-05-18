import styles from "./styles.module.scss";
import { Header } from "@ui/organisms/header";
import { Footer } from "@ui/organisms/footer";

export const GeneralTemplate = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className={styles.general}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
