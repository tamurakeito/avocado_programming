"use client";

import styles from "./styles.module.scss";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import SampleMd from "@md/sample.md";
import { Article } from "@api/article";

const MdSample = () => {
  return (
    <div className={styles.home}>
      <h1>react-markdown</h1>
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
        {SampleMd}
      </ReactMarkdown>
    </div>
  );
};

export default MdSample;
