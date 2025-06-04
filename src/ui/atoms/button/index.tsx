import styles from "./styles.module.scss";

export const Button = ({
  label,
  onClick,
  href,
}: {
  label: string;
  onClick?: () => void;
  href?: string;
}) => {
  return href ? (
    <a className={styles.button} href={href}>
      {label}
    </a>
  ) : (
    <button className={styles.button} onClick={onClick}>
      {label}
    </button>
  );
};
