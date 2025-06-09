import { IProgramApi } from "@/api/interface/program";
import {
  Lecture,
  Chapter,
  LectureDetail,
  ChapterDetail,
} from "@/types/program";

export class MockProgramApi implements IProgramApi {
  mockLecture: Lecture = {
    id: "flutter_01",
    title: "初心者のためのアプリ開発教室- Flutter入門",
    icon: "/assets/images/icon_flutter.svg",
    discription:
      "プログラミング経験がない方でも、話題のフレームワークFlutterを使いこなし、iOSとAndroidの両方で動くオリジナルアプリを実際に開発できるようになることを目指します。",
    lesson: 10,
  };
  mockChapters: Array<Chapter> = [
    {
      number: 0,
      heading: "はじめに - プログラミングの世界へようこそ！",
      goal: "講座の全体像と Flutter でアプリを作る魅力を知る",
    },
    {
      number: 1,
      heading: "Flutterって何だろう？ - アプリの見た目に触れてみる",
      goal: "Flutter のコードが画面の見た目になる雰囲気を掴む",
    },
    {
      number: 2,
      heading: "Dart言語の基本",
      goal: "アプリ作成に必要なDart言語の基本文法を理解する",
    },
    {
      number: 3,
      heading: "アプリの部品 - Widgetを知ろう",
      goal: "Flutterアプリの画面を構成する基本Widgetを知る",
    },
    {
      number: 4,
      heading: "開発環境を整えよう - Flutterを動かす準備",
      goal: "自分のPCでFlutterアプリ開発の準備ができるようになる",
    },
    {
      number: 5,
      heading: "カウンターアプリをモダン化！ Riverpod と Hooks で動かす",
      goal: "RiverpodとHooksを使った状態管理の基本を実践する",
    },
    {
      number: 6,
      heading: "TODOアプリの画面を作ろう - レイアウト編",
      goal: "FlutterのWidgetを組み合わせてTODOアプリの静的な画面を作る",
    },
    {
      number: 7,
      heading: "TODOを追加・表示しよう - Riverpod/Hooks実践",
      goal: "Riverpod/Hooksを使ってTODOの追加と表示を実装する",
    },
    {
      number: 8,
      heading: "TODOを管理しやすくしよう - チェックと削除",
      goal: "Riverpod/HooksでTODOのチェック・削除機能を実装する",
    },
    {
      number: 9,
      heading: "データを保存しよう - shared_preferences と Riverpod",
      goal: "アプリのデータを保存し、閉じても消えないようにする",
    },
    {
      number: 10,
      heading: "完成！そして次のステップへ",
      goal: "TODOアプリの完成を確認し、次の学習ステップを知る",
    },
  ];
  mockChapterContents: Array<string> = [
    "01_flutter_00.mdx",
    "01_flutter_01.mdx",
    "01_flutter_02.mdx",
    "01_flutter_03.mdx",
    "01_flutter_04.mdx",
    "01_flutter_05.mdx",
    "01_flutter_06.mdx",
    "01_flutter_07.mdx",
    "01_flutter_08.mdx",
    "01_flutter_09.mdx",
    "01_flutter_10.mdx",
  ];
  shouldFail: boolean = false;

  async fetchLectureList(): Promise<Array<Lecture>> {
    console.log("Fetching lecture list with MOCK API...");
    if (this.shouldFail) {
      throw new Error("Mock API Error");
    }
    return [this.mockLecture];
  }

  async fetchLecture(_lecture_id: string): Promise<LectureDetail> {
    console.log("Fetching lecture with MOCK API...");
    if (this.shouldFail) {
      throw new Error("Mock API Error");
    }
    return {
      ...this.mockLecture,
      chapter: this.mockChapters,
    };
  }

  async fetchChapter(chapter_id: string): Promise<ChapterDetail> {
    const chapterId = parseInt(chapter_id.split("_")[2]);
    console.log("Fetching chapter with MOCK API...");
    if (this.shouldFail) {
      throw new Error("Mock API Error");
    }
    const chapter = this.mockChapters[chapterId];
    console.log(chapter);
    if (!chapter) {
      throw new Error("Chapter not found");
    }
    return {
      ...chapter,
      course: this.mockLecture.title,
      content: this.mockChapterContents[chapterId],
      previous:
        chapterId > 0
          ? {
              heading: this.mockChapters[chapterId - 1].heading,
              href: `/${this.mockLecture.id}/${chapterId - 1}`,
            }
          : undefined,
      next:
        chapterId < this.mockChapters.length - 1
          ? {
              heading: this.mockChapters[chapterId + 1].heading,
              href: `/${this.mockLecture.id}/${chapterId + 1}`,
            }
          : undefined,
    };
  }
}
