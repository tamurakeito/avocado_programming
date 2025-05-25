import styles from "./styles.module.scss";
import { CourseCardList, ConstCardProps } from "@/ui/organisms/course-card";
import FlutterIcon from "@assets/images/icon_flutter.svg";
import { Category } from "@/ui/atoms/category";
const Courses = () => {
  const list: Array<ConstCardProps> = [
    {
      icon: FlutterIcon,
      title: "初心者のためのアプリ開発教室- Flutter入門",
      discription:
        "プログラミング経験がない方でも、話題のフレームワークFlutterを使いこなし、iOSとAndroidの両方で動くオリジナルアプリを実際に開発できるようになることを目指します。",
      lesson: 12,
    },
    {
      icon: FlutterIcon,
      title: "初心者のためのアプリ開発教室- Flutter入門",
      discription:
        "プログラミング経験がない方でも、話題のフレームワークFlutterを使いこなし、iOSとAndroidの両方で動くオリジナルアプリを実際に開発できるようになることを目指します。",
      lesson: 12,
    },
  ];
  return (
    <div className={styles.courses}>
      <div className={styles.courses_heading}>コースを選択する</div>
      <div className={styles.courses_list}>
        <Category label="プログラミング初心者向け" />
        <CourseCardList list={list} />
      </div>
    </div>
  );
};

export default Courses;
