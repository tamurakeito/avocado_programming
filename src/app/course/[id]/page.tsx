import styles from "./styles.module.scss";
import { Category } from "@ui/atoms/category";
import { CourseCard } from "@ui/components/course-card";
import FlutterIcon from "@assets/images/icon_flutter.svg";
import { PankuzuList } from "@ui/components/pankuzu-list";

const Course = () => {
  const list = [
    {
      index: 0,
      heading: "はじめに - プログラミングの世界へようこそ！",
      subHeading: "講座の全体像とFlutterでアプリを作る魅力を知る",
    },
    {
      index: 1,
      heading: "Flutterって何だろう？ - アプリの見た目に触れてみる",
      subHeading: "Flutterのコードが画面の見た目になる雰囲気を掴む",
    },
    {
      index: 2,
      heading: "Dart言語の基本",
      subHeading: "アプリ作成に必要なDart言語の基本文法を理解する",
    },
    {
      index: 3,
      heading: "アプリの部品 - Widgetを知ろう",
      subHeading: "Flutterアプリの画面を構成する基本Widgetを知る",
    },
    {
      index: 4,
      heading: "開発環境を整えよう - Flutterを動かす準備",
      subHeading: "自分のPCでFlutterアプリ開発の準備ができるようになる",
    },
    {
      index: 5,
      heading: "カウンターアプリをモダン化！ Riverpod と Hooks で動かす",
      subHeading: "RiverpodとHooksを使った状態管理の基本を実践する",
    },
    {
      index: 6,
      heading: "TODOアプリの画面を作ろう - レイアウト編",
      subHeading: "FlutterのWidgetを組み合わせてTODOアプリの静的な画面を作る",
    },
    {
      index: 7,
      heading: "TODOを追加・表示しよう - Riverpod/Hooks実践",
      subHeading: "Riverpod/Hooksを使ってTODOの追加と表示を実装する",
    },
    {
      index: 8,
      heading: "TODOを管理しやすくしよう - チェックと削除 (Riverpod/Hooks)",
      subHeading: "Riverpod/HooksでTODOのチェック・削除機能を実装する",
    },
    {
      index: 9,
      heading: "データを保存しよう - shared_preferences と Riverpod",
      subHeading: "アプリのデータを保存し、閉じても消えないようにする",
    },
    {
      index: 10,
      heading: "完成！そして次のステップへ",
      subHeading: "TODOアプリの完成を確認し、次の学習ステップを知る",
    },
  ];

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
        <Category label="プログラミング初心者向け" />
        <CourseCard
          icon={FlutterIcon}
          title={"初心者のためのアプリ開発教室 - Flutter入門"}
          discription={
            "プログラミング経験がない方でも、話題のフレームワークFlutterを使いこなし、iOSとAndroidの両方で動くオリジナルアプリを実際に開発できるようになることを目指します。"
          }
          lesson={12}
        />
      </div>
      <div className={styles.course_content}>
        {list.map((item) => (
          <ChapterToc key={item.index} id={"flutter_01"} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Course;

type ChapterTocProps = {
  id: string;
  index: number;
  heading: string;
  subHeading: string;
};
const ChapterToc = ({ id, index, heading, subHeading }: ChapterTocProps) => {
  return (
    <a href={`/course/${id}/${index}`} className={styles.chapter_toc}>
      <div className={styles.chapter_index}>
        <span>第</span>
        <span>{index}</span>
        <span>章</span>
      </div>
      <div className={styles.chapter_container}>
        <div className={styles.chapter_heading}>{heading}</div>
        <div className={styles.chapter_sub_heading}>{subHeading}</div>
      </div>
    </a>
  );
};
