"use client";

import styles from "./styles.module.scss";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import MdFile from "@md/01_flutter_01.md";
import { ArticleType } from "@api/article";
import { Divider } from "@ui/atoms/divider";
import { PaginationNext, PaginationPrevious } from "@ui/molecules/pagination";
import { Footer } from "@ui/organisms/footer";

const Article = () => {
  const data: ArticleType = {
    course: "Flutter入門",
    chapter: 5,
    heading: "Flutterの基本「Widget」を理解しよう",
    goal: "FlutterのUI構築の核となるWidgetの概念を理解する",
    content: new URL("http://dummy.com/dummy"),
  };
  return (
    <div className={styles.article}>
      <Divider />
      <div className={styles.content_area}>
        <Pagenations />
        <div className={styles.course_chapter_heading_goal}>
          <div className={styles.course_chapter}>
            <div className={styles.course}>{data.course}</div>
            <div className={styles.chapter}>第 {data.chapter} 章</div>
          </div>
          <div className={styles.heading}>{data.heading}</div>
          <div className={styles.goal}>
            <div className={styles.mokuhyou}>目標</div>
            <div className={styles.goal_content}>{data.goal}</div>
          </div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.content}>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
          >
            {MdFile}
          </ReactMarkdown>
        </div>
        <Pagenations />
        <Footer />
      </div>
    </div>
  );
};

export default Article;

const Pagenations = () => {
  const previousChapter = {
    index: 4,
    heading: "Dart言語の基本（Flutterで使う部分だけ！）",
  };
  const nextChapter = {
    index: 6,
    heading: "レイアウトを組んでみよう",
  };
  return (
    <div className={styles.pagination}>
      <PaginationPrevious
        index={previousChapter.index}
        heading={previousChapter.heading}
      />
      <PaginationNext index={nextChapter.index} heading={nextChapter.heading} />
    </div>
  );
};
