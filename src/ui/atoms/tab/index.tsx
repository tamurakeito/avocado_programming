import styles from "./styles.module.scss";

export const Tab = ({ label }: { label: string }) => {
  return <div className={styles.tab}>{label}</div>;
};
