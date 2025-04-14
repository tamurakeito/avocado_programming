import { client } from "@api/axios";

export type ArticleType = {
  course: string;
  chapter: number;
  heading: string;
  goal: string;
  content: URL;
};

export async function apiArticle(id: number): Promise<ArticleType | undefined> {
  try {
    const url = `/article/${id}`;
    const response = await client.get<ArticleType>(url);

    return response.data;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}
