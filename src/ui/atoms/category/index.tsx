import styles from "./styles.module.scss";

export const Category = ({ label }: { label: string }) => {
  return <div className={styles.category}>{label}</div>;
};
