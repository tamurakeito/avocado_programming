import { client } from "@api/axios";

export type ArticleType = {
  course: string;
  chapter: number;
  heading: string;
  goal: string;
  content: string;
  previous: { heading: string; href: string };
  next: { heading: string; href: string };
};

export async function getArticle(id: string): Promise<ArticleType | Error> {
  try {
    const url = `/articles/${id}`;
    const response = await client.get<ArticleType>(url);

    return response.data;
  } catch (error) {
    console.error(error);
    return error as Error;
  }
}
