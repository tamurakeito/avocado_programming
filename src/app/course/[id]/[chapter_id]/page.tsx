import styles from "./styles.module.scss";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Paginations } from "@ui/molecules/pagination";
import fs from "fs/promises";
import path from "path";
import CodeBlock from "@/ui/components/code-block";
import { MockProgramApi } from "@/api/mock/program";
import { ChapterDetail } from "@/types/program";
import Image from "next/image";

const ChapterPage = async ({
  params,
}: {
  params: Promise<{ id: string; chapter_id: string }>;
}) => {
  const { id, chapter_id } = await params;
  console.log(id, chapter_id);
  const chapterId = `${id}_${chapter_id}`;
  console.log(chapterId);
  let source: string;
  const components = {
    CodeBlock: ({
      children,
      language,
      className,
      gist,
    }: {
      children: string;
      language?: string;
      className?: string;
      gist?: string;
    }) => (
      <CodeBlock
        language={language || "text"}
        className={`${styles.codeBlock} ${className || ""}`}
        gist={gist}
      >
        {children}
      </CodeBlock>
    ),
    Image: ({
      src,
      comment,
      width,
      height,
    }: {
      src: string;
      comment: string;
      width: number;
      height: number;
    }) => (
      <div className={styles.image}>
        <Image src={src} alt={comment} width={width} height={height} />
        <span className={styles.image_comment}>{comment}</span>
      </div>
    ),
  };
  const api = new MockProgramApi();
  let data: ChapterDetail | Error;

  try {
    data = await api.fetchChapter(chapterId);
    console.log(data);
  } catch (error) {
    console.error("記事の取得に失敗しました:", error);
    return <div>記事の取得に失敗しました</div>;
  }

  if (data instanceof Error) {
    console.error("記事の取得が見つかりませんでした:", data);
    return <div>記事が見つかりませんでした</div>;
  }

  try {
    const filePath = path.join(
      process.cwd(),
      "public",
      "courses",
      data.content
    );
    source = await fs.readFile(filePath, "utf-8");
  } catch (error) {
    console.error("MDXファイルの読み込みに失敗しました:", error);
    return <div>コンテンツの読み込みに失敗しました</div>;
  }

  const ChapterPagenations = () => (
    <Paginations
      previous={
        data.previous
          ? {
              index: data.number - 1,
              heading: data.previous?.heading,
              href: data.previous?.href,
            }
          : undefined
      }
      next={
        data.next
          ? {
              index: data.number + 1,
              heading: data.next?.heading,
              href: data.next?.href,
            }
          : undefined
      }
    />
  );

  return (
    <div className={styles.article}>
      <ChapterPagenations />
      <div className={styles.course_chapter_heading_goal}>
        <div className={styles.course_chapter}>
          <div className={styles.course}>{data.course}</div>
          <div className={styles.chapter}>第 {data.number} 章</div>
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
      <ChapterPagenations />
    </div>
  );
};

export default ChapterPage;
