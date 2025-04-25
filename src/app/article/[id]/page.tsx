import styles from "./styles.module.scss";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ArticleType, getArticle } from "@api/article";
import { Header } from "@ui/organisms/header";
import { Paginations } from "@ui/molecules/pagination";
import { Footer } from "@ui/organisms/footer";
import fs from "fs/promises";
import path from "path";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface PageProps {
  params: Promise<{ id: string }>;
}

const components = {
  pre: ({ children }: { children: any }) => {
    const child = children as React.ReactElement;
    const code = child.props.children;
    const language = child.props.className?.replace("language-", "");

    return (
      <SyntaxHighlighter
        language={language || "text"}
        style={vscDarkPlus}
        PreTag="div"
        className={styles.codeBlock}
      >
        {code}
      </SyntaxHighlighter>
    );
  },
  SyntaxHighlighter: ({
    children,
    language,
    className,
  }: {
    children: string;
    language?: string;
    className?: string;
  }) => (
    <SyntaxHighlighter
      language={language || "text"}
      style={vscDarkPlus}
      PreTag="div"
      className={`${styles.codeBlock} ${className || ""}`}
    >
      {children}
    </SyntaxHighlighter>
  ),
};

const Article = async ({ params }: PageProps) => {
  const { id } = await params;
  const articleId = parseInt(id);
  let data: ArticleType | Error;
  let mdxContent: string;

  try {
    data = await getArticle(articleId);
  } catch (error) {
    console.error("記事の取得に失敗しました:", error);
    return <div>記事の取得に失敗しました</div>;
  }

  if (data instanceof Error) {
    console.error("記事の取得が見つかりませんでした:", data);
    return <div>記事が見つかりませんでした</div>;
  }

  try {
    const filePath = path.join(process.cwd(), "public", "mdx", data.content);
    mdxContent = await fs.readFile(filePath, "utf-8");
  } catch (error) {
    console.error("MDXファイルの読み込みに失敗しました:", error);
    return <div>コンテンツの読み込みに失敗しました</div>;
  }

  return (
    <div className={styles.article}>
      <Header />
      <div className={styles.content_area}>
        <Paginations
          chapter={data.chapter}
          previous={data.previous}
          next={data.next}
        />
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
          <MDXRemote source={mdxContent} components={components} />
        </div>
        <Paginations
          chapter={data.chapter}
          previous={data.previous}
          next={data.next}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Article;
