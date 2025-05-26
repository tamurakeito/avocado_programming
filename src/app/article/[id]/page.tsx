import styles from "./styles.module.scss";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ArticleType, getArticle } from "@api/article";
import { Paginations } from "@ui/molecules/pagination";
import fs from "fs/promises";
import path from "path";
import CodeBlock from "@/ui/organisms/code-block";

const Article = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const articleId = id;
  let data: ArticleType | Error;
  let source: string;
  const components = {
    CodeBlock: ({
      children,
      language,
      className,
    }: {
      children: string;
      language?: string;
      className?: string;
    }) => (
      <CodeBlock
        language={language || "text"}
        className={`${styles.codeBlock} ${className || ""}`}
      >
        {children}
      </CodeBlock>
    ),
  };

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
    source = await fs.readFile(filePath, "utf-8");
  } catch (error) {
    console.error("MDXファイルの読み込みに失敗しました:", error);
    return <div>コンテンツの読み込みに失敗しました</div>;
  }

  return (
    <div className={styles.article}>
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
        <MDXRemote source={source} components={components} />
      </div>
      <Paginations
        chapter={data.chapter}
        previous={data.previous}
        next={data.next}
      />
    </div>
  );
};

export default Article;
