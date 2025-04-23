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
  previousChapter,
  nextChapter,
}: {
  previousChapter: PaginationProps;
  nextChapter: PaginationProps;
}) => {
  return (
    <div className={styles.paginations}>
      <PaginationPrevious
        index={previousChapter.index}
        heading={previousChapter.heading}
      />
      <PaginationNext index={nextChapter.index} heading={nextChapter.heading} />
    </div>
  );
};
