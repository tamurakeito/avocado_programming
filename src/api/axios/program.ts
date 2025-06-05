import { IProgramApi } from "@/api/interface/program";
import { client } from "@/api/client";
import { Lecture, Chapter, ChapterDetail } from "@/types/program";
import { AxiosError } from "axios";

export class ProgramError extends Error {
  constructor(
    message: string,
    public statusCode?: number,
    public originalError?: unknown
  ) {
    super(message);
    this.name = "ProgramError";
  }
}

export class AxiosProgramApi implements IProgramApi {
  async fetchLectureList(): Promise<Array<Lecture>> {
    try {
      const url = "/lecture-list";
      const response = await client.get<Array<Lecture>>(url);
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        switch (error.response?.status) {
          case 400:
            throw new ProgramError(`無効なリクエストです`, 400, error);
          case 404:
            throw new ProgramError(`記事が見つかりませんでした`, 404, error);
          case 500:
            throw new ProgramError(`サーバーエラーが発生しました`, 500, error);
          default:
            throw new ProgramError(
              `予期せぬエラーが発生しました: ${error.message}`,
              error.response?.status,
              error
            );
        }
      }
      throw new ProgramError(
        `予期せぬエラーが発生しました: ${
          error instanceof Error ? error.message : "不明なエラー"
        }`,
        undefined,
        error
      );
    }
  }
  async fetchLecture(lecture_id: string): Promise<Lecture> {
    try {
      const url = `/lecture/${lecture_id}`;
      const response = await client.get<Lecture>(url);
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        switch (error.response?.status) {
          case 400:
            throw new ProgramError(`無効なリクエストです`, 400, error);
          case 404:
            throw new ProgramError(`記事が見つかりませんでした`, 404, error);
          case 500:
            throw new ProgramError(`サーバーエラーが発生しました`, 500, error);
          default:
            throw new ProgramError(
              `予期せぬエラーが発生しました: ${error.message}`,
              error.response?.status,
              error
            );
        }
      }
      throw new ProgramError(
        `予期せぬエラーが発生しました: ${
          error instanceof Error ? error.message : "不明なエラー"
        }`,
        undefined,
        error
      );
    }
  }
  async fetchChapterList(lecture_id: string): Promise<{
    lecture: Lecture;
    chapter: Array<Chapter>;
  }> {
    try {
      const url = `/chapter-list/${lecture_id}`;
      const response = await client.get<{
        lecture: Lecture;
        chapter: Array<Chapter>;
      }>(url);
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        switch (error.response?.status) {
          case 400:
            throw new ProgramError(`無効なリクエストです`, 400, error);
          case 404:
            throw new ProgramError(`記事が見つかりませんでした`, 404, error);
          case 500:
            throw new ProgramError(`サーバーエラーが発生しました`, 500, error);
          default:
            throw new ProgramError(
              `予期せぬエラーが発生しました: ${error.message}`,
              error.response?.status,
              error
            );
        }
      }
      throw new ProgramError(
        `予期せぬエラーが発生しました: ${
          error instanceof Error ? error.message : "不明なエラー"
        }`,
        undefined,
        error
      );
    }
  }
  async fetchChapter(chapter_id: string): Promise<ChapterDetail> {
    try {
      const url = `/chapter/${chapter_id}`;
      const response = await client.get<ChapterDetail>(url);
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        switch (error.response?.status) {
          case 400:
            throw new ProgramError(`無効なリクエストです`, 400, error);
          case 404:
            throw new ProgramError(`記事が見つかりませんでした`, 404, error);
          case 500:
            throw new ProgramError(`サーバーエラーが発生しました`, 500, error);
          default:
            throw new ProgramError(
              `予期せぬエラーが発生しました: ${error.message}`,
              error.response?.status,
              error
            );
        }
      }
      throw new ProgramError(
        `予期せぬエラーが発生しました: ${
          error instanceof Error ? error.message : "不明なエラー"
        }`,
        undefined,
        error
      );
    }
  }
}
