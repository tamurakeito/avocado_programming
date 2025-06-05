import styles from "./styles.module.scss";
import { CourseCardList } from "@ui/components/course-card";
import { Category } from "@ui/atoms/category";
import { Button } from "@ui/atoms/button";
import { MockProgramApi } from "@/api/mock/program";

const CoursesPage = async () => {
  const api = new MockProgramApi();
  const list = await api.fetchLectureList();

  return (
    <div className={styles.courses}>
      <div className={styles.courses_heading}>コースを選択する</div>
      <div className={styles.courses_list}>
        <div className={styles.courses_list_item}>
          <Category label="プログラミング初心者向け" />
          <CourseCardList list={list} />
        </div>
        <Button label="トップへ戻る" href={"/"} />
      </div>
    </div>
  );
};

export default CoursesPage;
