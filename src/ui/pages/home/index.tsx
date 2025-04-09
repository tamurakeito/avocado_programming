"use client";

import styles from "./styles.module.scss";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import SampleMd from "@/md/sample.md";
import rehypeRaw from "rehype-raw";

export const Home = () => {
  return (
    <div className={styles.home}>
      <h1>react-markdown</h1>
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
        {SampleMd}
      </ReactMarkdown>
    </div>
  );
};
