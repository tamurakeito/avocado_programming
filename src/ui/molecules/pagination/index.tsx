import { Chapter } from "@ui/atoms/chapter";
import { ChevronLeft, ChevronRight } from "react-feather";
import styles from "styles.module.scss";

type PaginationProps = {
  chapter: number;
  heading: string;
};

export const PaginationPrevious = ({ chapter, heading }: PaginationProps) => {
  return (
    <div className={styles.pagination}>
      <div className={styles.chevron}>
        <ChevronLeft size={20} />
      </div>
      <Chapter className={styles.chapter} index={chapter} />
      <div className={styles.heading}>{heading}</div>
    </div>
  );
};

export const PaginationNext = ({ chapter, heading }: PaginationProps) => {
  return (
    <div className={styles.pagination}>
      <div className={styles.heading}>{heading}</div>
      <Chapter className={styles.chapter} index={chapter} />
      <div className={styles.chevron}>
        <ChevronRight size={20} />
      </div>
    </div>
  );
};
