import styles from "./styles.module.scss";
import { Category } from "@ui/atoms/category";
import { CourseCard } from "@ui/components/course-card";
import { PankuzuList } from "@ui/components/pankuzu-list";
import { MockProgramApi } from "@/api/mock/program";
import { Button } from "@ui/atoms/button";

const CoursePage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const api = new MockProgramApi();
  const lecture = await api.fetchLecture(id);

  const pankuzuList = [
    {
      label: "TOP",
      href: "/",
    },
    {
      label: "コース一覧",
      href: "/course",
    },
    {
      label: "初心者のためのアプリ開発教室 - Flutter入門",
      href: "/course/flutter_01",
    },
  ];
  return (
    <div className={styles.course}>
      <div className={styles.course_header}>
        <PankuzuList list={pankuzuList} />
        <div className={styles.course_header_content}>
          <Category label="プログラミング初心者向け" />
          <CourseCard {...lecture} href={`/course/${lecture.id}/0`} />
        </div>
      </div>
      <div className={styles.course_content}>
        {lecture.chapter.map((item, index) => (
          <ChapterToc key={index} id={lecture.id} {...item} />
        ))}
        <Button label="開始する" href={`/course/${lecture.id}/0`} />
      </div>
    </div>
  );
};

export default CoursePage;

type ChapterTocProps = {
  id: string;
  number: number;
  heading: string;
  goal: string;
};
const ChapterToc = ({ id, number, heading, goal }: ChapterTocProps) => {
  return (
    <a href={`/course/${id}/${number}`} className={styles.chapter_toc}>
      <div className={styles.chapter_index}>
        <span>第</span>
        <span>{number}</span>
        <span>章</span>
      </div>
      <div className={styles.chapter_container}>
        <div className={styles.chapter_heading}>{heading}</div>
        <div className={styles.chapter_sub_heading}>{goal}</div>
      </div>
    </a>
  );
};
