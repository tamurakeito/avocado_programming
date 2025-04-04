"use client";

import styles from "./styles.module.scss";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import SampleMd from "@/md/sample.md";

export const Home = () => {
  const [markdown, setMarkdown] = useState<string>(SampleMd);
  return (
    <div className={styles.home}>
      <h1>react-markdown</h1>
      <h2>Markdown 入力</h2>
      <textarea
        placeholder="マークダウンを入力してください"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      />

      <h2>プレビュー</h2>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
    </div>
  );
};
