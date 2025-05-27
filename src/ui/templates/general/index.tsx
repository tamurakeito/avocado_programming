import styles from "./styles.module.scss";
import { Header } from "@/ui/components/header";
import { Footer } from "@/ui/components/footer";

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
