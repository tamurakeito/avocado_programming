import { Chapter } from "@ui/atoms/chapter";
import { ChevronLeft, ChevronRight } from "react-feather";
import styles from "./styles.module.scss";

type PaginationProps = {
  index: number;
  heading: string;
  href: string;
};

export const PaginationPrevious = ({
  index,
  heading,
  href,
}: PaginationProps) => {
  return (
    <a href={`/article/${href}`} className={styles.pagination}>
      <div className={styles.chevron}>
        <ChevronLeft size={20} />
      </div>
      <div className={styles.chapter}>
        <Chapter index={index} />　{heading}
      </div>
    </a>
  );
};

export const PaginationNext = ({ index, heading, href }: PaginationProps) => {
  return (
    <a href={`/article/${href}`} className={styles.pagination}>
      <div className={styles.chapter}>
        <Chapter index={index} />　{heading}
      </div>
      <div className={styles.chevron}>
        <ChevronRight size={20} />
      </div>
    </a>
  );
};

export const Paginations = ({
  previous,
  next,
}: {
  previous?: PaginationProps;
  next?: PaginationProps;
}) => {
  return (
    <div className={styles.paginations}>
      {previous?.heading ? (
        <PaginationPrevious
          index={previous.index}
          heading={previous.heading}
          href={previous.href}
        />
      ) : (
        <div className={styles.pagination}></div>
      )}
      {next?.heading ? (
        <PaginationNext
          index={next.index}
          heading={next.heading}
          href={next.href}
        />
      ) : (
        <div className={styles.pagination}></div>
      )}
    </div>
  );
};
