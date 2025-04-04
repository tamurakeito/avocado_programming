// 例: types/markdown.d.ts （場所は任意）

declare module "*.md" {
  /**
   * .md ファイルを import した際のデフォルトエクスポートは文字列であることを示す。
   * 例: import markdownContent from './myFile.md';
   * この場合、markdownContent は string 型になる。
   */
  const content: string;
  export default content;
}
