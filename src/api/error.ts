export class HttpErr {
  readonly message: string;

  constructor({ message }: { message: string }) {
    this.message = message;
  }
}

// HTTPエラーの定義
export class HttpError {
  static readonly badRequest = new HttpErr({
    message: "入力内容に誤りがあります。",
  });
  static readonly unauthorized = new HttpErr({
    message: "認証に失敗しました。ログインし直してください。",
  });
  static readonly forbidden = new HttpErr({
    message: "この操作を行う権限がありません。管理者にお問い合わせください。",
  });
  static readonly notFound = new HttpErr({
    message: "お探しのデータが見つかりませんでした。",
  });
  static readonly conflict = new HttpErr({
    message:
      "リクエストが競合しています。既に存在するデータか確認してください。",
  });
  static readonly internalError = new HttpErr({
    message: "サーバーでエラーが発生しました。時間を置いて再試行してください。",
  });
  static readonly serviceUnavailable = new HttpErr({
    message: "現在サービスを利用できません。時間を置いて再試行してください。",
  });
  static readonly networkUnavailable = new HttpErr({
    message:
      "ネットワークに接続できません。インターネット接続を確認してください。",
  });
  static readonly serverUnreachable = new HttpErr({
    message: "サーバーに接続できません。時間を置いて再試行してください。",
  });
  static readonly timeout = new HttpErr({
    message: "サーバーの応答がありません。時間を置いて再試行してください。",
  });
  static readonly invalidResponseFormat = new HttpErr({
    message: "サーバーからのデータが不正です。",
  });
  static readonly unknownError = new HttpErr({
    message: "予期しないエラーが発生しました。サポートにお問い合わせください。",
  });
}
