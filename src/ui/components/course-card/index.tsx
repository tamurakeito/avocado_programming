import styles from "./styles.module.scss";
import { Folder } from "react-feather";
import Image from "next/image";
import { Lecture } from "@/types/program";
import classNames from "classnames";

export const CourseCard = ({
  title,
  icon,
  discription,
  lesson,
  href,
}: Lecture & { href?: string }) => {
  return href ? (
    <a
      href={href}
      className={classNames([styles.course_card, styles.clickable])}
    >
      <div className={styles.icon}>
        <div className={styles.icon_circle}>
          <Image src={icon} alt={title} width={24} height={24} />
        </div>
      </div>
      <div className={styles.heading}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{discription}</div>
        <div className={styles.lesson}>
          <Folder size={16} color={"#212121"} />
          <div className={styles.lesson_text}>全{lesson}レッスン</div>
        </div>
      </div>
    </a>
  ) : (
    <div className={styles.course_card}>
      <div className={styles.icon}>
        <div className={styles.icon_circle}>
          <Image src={icon} alt={title} width={24} height={24} />
        </div>
      </div>
      <div className={styles.heading}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{discription}</div>
        <div className={styles.lesson}>
          <Folder size={16} color={"#212121"} />
          <div className={styles.lesson_text}>全{lesson}レッスン</div>
        </div>
      </div>
    </div>
  );
};

export const CourseCardList = ({ list }: { list: Array<Lecture> }) => {
  return (
    <div className={styles.course_card_list}>
      {list.map((item, index) => (
        <CourseCard key={index} {...item} href={`/course/${item.id}`} />
      ))}
    </div>
  );
};
