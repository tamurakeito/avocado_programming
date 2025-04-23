import { client } from "@api/axios";

export type ArticleType = {
  course: string;
  chapter: number;
  heading: string;
  goal: string;
  content: string;
  previousChapter: {
    index: number;
    heading: string;
  };
  nextChapter: {
    index: number;
    heading: string;
  };
};

export async function getArticle(id: number): Promise<ArticleType | Error> {
  try {
    const url = `/articles/${id}`;
    const response = await client.get<ArticleType>(url);

    return response.data;
  } catch (error) {
    console.error(error);
    return error as Error;
  }
}
