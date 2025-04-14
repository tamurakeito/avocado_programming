"use client";

import styles from "./styles.module.scss";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import MdFile from "@md/01_flutter_01.md";
import { ArticleType } from "@api/article";
import { Divider } from "@ui/atoms/divider";

const Article = () => {
  const data: ArticleType = {
    course: "Flutter入門",
    chapter: 5,
    heading: "Flutterの基本「Widget」を理解しよう",
    goal: "FlutterのUI構築の核となるWidgetの概念を理解する",
    content: new URL("http://kjkjsndjk.com/asdfj"),
  };
  return (
    <div className={styles.article}>
      <Divider />
      <div>{data.course}</div>
      <div>第 {data.course} 章</div>
      <div>{data.heading}</div>
      <div>
        <div>目標</div>
        <div>{data.goal}</div>
      </div>
      {/* <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
        {MdFile}
      </ReactMarkdown> */}
    </div>
  );
};

export default Article;
