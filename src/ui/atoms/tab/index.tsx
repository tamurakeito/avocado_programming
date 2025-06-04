import styles from "./styles.module.scss";

export const Tab = ({ label, href }: { label: string; href: string }) => {
  return (
    <a href={href} className={styles.tab}>
      {label}
    </a>
  );
};
