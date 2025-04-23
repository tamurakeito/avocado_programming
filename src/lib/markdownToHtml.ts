import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

export default async function markdownToHtml(markdown: string) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeStringify)
    .process(markdown);

  const processedHtml = result
    .toString()
    .replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g, (match, code) => {
      const filename =
        code.match(/\/\/ filename: (.*?)\n/)?.[1] || "example.dart";
      return `<CodeBlock filename="${filename}"><pre><code>${code}</code></pre></CodeBlock>`;
    });

  return processedHtml;
}
