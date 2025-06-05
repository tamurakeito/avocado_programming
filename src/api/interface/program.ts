import { Lecture, Chapter, ChapterDetail, LectureDetail } from "@/types/program";

export interface IProgramApi {
  fetchLectureList: () => Promise<Array<Lecture>>;
  fetchLecture: (lecture_id: string) => Promise<LectureDetail>;
  fetchChapter: (chapter_id: string) => Promise<ChapterDetail>;
}
