export type Lecture = {
  id: string;
  title: string;
  icon: string;
  discription: string;
  lesson: number;
};

export type Chapter = {
  number: number;
  heading: string;
  goal: string;
};

export type LectureDetail = Lecture & {
  chapter: Array<Chapter>;
};

export type ChapterDetail = Chapter & {
  course: string;
  content: string;
  previous?: { heading: string; href: string };
  next?: { heading: string; href: string };
};
