import styles from "./styles.module.scss";
import { Folder } from "react-feather";
import Image from "next/image";

export const CourseCard = ({
  icon,
  title,
  discription,
  lesson,
}: {
  icon: string;
  title: string;
  discription: string;
  lesson: number;
}) => {
  return (
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
