import { Chapter } from "@ui/atoms/chapter";
import { ChevronLeft, ChevronRight } from "react-feather";
import styles from "./styles.module.scss";

type PaginationProps = {
  index: number;
  heading: string;
};

export const PaginationPrevious = ({ index, heading }: PaginationProps) => {
  return (
    <div className={styles.pagination}>
      <div className={styles.chevron}>
        <ChevronLeft size={20} />
      </div>
      <div className={styles.chapter}>
        <Chapter index={index} />　{heading}
      </div>
    </div>
  );
};

export const PaginationNext = ({ index, heading }: PaginationProps) => {
  return (
    <div className={styles.pagination}>
      <div className={styles.chapter}>
        <Chapter index={index} />　{heading}
      </div>
      <div className={styles.chevron}>
        <ChevronRight size={20} />
      </div>
    </div>
  );
};

export const Paginations = ({
  chapter,
  previous,
  next,
}: {
  chapter: number;
  previous: string;
  next: string;
}) => {
  return (
    <div className={styles.paginations}>
      {previous != "" ? (
        <PaginationPrevious index={chapter - 1} heading={previous} />
      ) : (
        <div className={styles.pagination}></div>
      )}
      {next != "" ? (
        <PaginationNext index={chapter + 1} heading={next} />
      ) : (
        <div className={styles.pagination}></div>
      )}
    </div>
  );
};
