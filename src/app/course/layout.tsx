import styles from "./layout.module.scss";

const CourseLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.course}>{children}</div>;
};

export default CourseLayout;
