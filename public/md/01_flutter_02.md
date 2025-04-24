<style>
  .yellow {
    color: #DCDCAA;
  }
  .yellowgreen {
    color: #B5CEA8;
  }
  .green {
    color: #4EC9B0;
  }
  .blue {
    color: #569CD6; 
  }
  .skyblue {
    color: #9CDCFE;
  }
  .purple {
    color: #C586C0;
  }
  .pink {
    color: pink;
  }
  .orange {
    color: #CE9178;
    * {
      color: #CE9178;
    }
  }
  .gray {
    color: #757575;
    * {
      color: #757575;
    }
  }
</style>

前回は Flutter の魅力や可能性についてお話ししました。今回は、いよいよ Flutter アプリ開発を始めるための準備、 **開発環境** の構築を進めていきましょう！

プログラミングの環境構築と聞くと、「なんだか難しそう…」「設定がたくさんありそう…」と感じるかもしれません。確かに、いくつかのツールをインストールする必要がありますが、一つ一つ手順通りに進めれば大丈夫です。

今回セットアップする主なものは以下の 3 つです。

1. **Flutter SDK**： Flutter アプリを開発するための基本的な道具セット。
2. **IDE（統合開発環境）**： プログラムを書くための高機能なエディタ。
3. **動作確認環境**： 作ったアプリを実行して試すための環境（エミュレータ/シミュレータ/実機）。

## 1. Flutter SDK のインストール

**SDK** とは「Software Development Kit」の略で、Flutter アプリを開発・ビルド（アプリとして動く形にすること）・実行するために必要なコマンドやライブラリなどが一式含まれています。まずはこれをあなたのパソコンに導入しましょう。

**重要なポイント:**

- インストール手順は、お使いのパソコンの OS（Windows, macOS, Linux）によって異なります。
- Flutter は頻繁にアップデートされるため、必ず最新の公式ドキュメントを参照しながら進めるのが最も確実です。

**手順の概要:**

1.  Flutter SDK のダウンロード

    公式サイトから、お使いの OS に合った最新の安定版（Stable channel）Flutter SDK をダウンロードします。（zip ファイルなどで提供されています）

2.  SDK の展開（解凍）

    ダウンロードしたファイルを、パソコン内の任意の場所（例: C:\flutter や ~/flutter など、分かりやすい場所）に展開（解凍）します。
    **注意**: C:\Program Files\ のような管理者権限が必要な場所は避けた方が無難です。

3.  PATH を通す

    Flutter コマンド（flutter コマンド）をパソコンのどこからでも呼び出せるように、「環境変数」の Path に、先ほど展開した Flutter SDK フォルダ内の bin フォルダへのパスを追加します。この設定が非常に重要です！

**具体的な手順は、以下の公式ドキュメントで確認してください！**

- Flutter 公式サイト - インストール手順: [https://flutter.dev/docs/get-started/install](https://flutter.dev/docs/get-started/install)

  - ページ上部で自分の OS（Windows, macOS, Linux）を選択して、手順に従ってください。
  - 特に「Update your path」や「環境変数を更新する」といったセクションをよく読んで設定しましょう。
    （補足） SDK のダウンロードや設定には少し時間がかかる場合があります。焦らず進めてくださいね。

## 2. IDE（統合開発環境）のセットアップ

次に、Flutter のコードを書くためのエディタ（IDE）を準備します。IDE は、コードの色分け（シンタックスハイライト）、入力補完、エラーチェック、デバッグ（プログラムの誤りを見つけて修正すること）など、開発を助けてくれる様々な機能を持っています。

Flutter 開発では主に以下の 2 つが使われますが、この講座では **Visual Studio Code (VS Code)** を推奨します。

- **Visual Studio Code (VS Code) - (推奨)**

  - Microsoft 製の軽量で高機能なコードエディタ。
  - 起動が速く、動作も比較的軽快。
  - 豊富な拡張機能で Flutter 開発を強力にサポート。
  - 無料で利用可能。
  - ダウンロード: [https://code.visualstudio.com/](https://code.visualstudio.com/)

- **Android Studio**

  - Google 製の Android 開発用 IDE。Flutter 開発にも公式対応。
  - Android エミュレータの管理機能などが統合されている。
  - VS Code に比べると、やや動作が重い場合がある。
  - こちらも無料で利用可能。
  - ダウンロード: [https://developer.android.com/studio](https://developer.android.com/studio)

**VS Code のセットアップ (推奨):**

1. 上記のリンクから VS Code をダウンロードし、インストールします。
2. VS Code を起動し、左側のアクティビティバーにある四角いブロックのようなアイコン（拡張機能ビュー）をクリックします。
3. 検索バーに `Flutter` と入力し、表示された **Flutter** 拡張機能（Dart DevTools によって提供されているもの）をインストールします。これをインストールすると、依存関係のある **Dart** 拡張機能も自動的にインストールされるはずです。（もし Dart が自動で入らなければ、別途検索してインストールしてください）

   (画像はイメージです。実際の UI はバージョンによって異なる場合があります)

   これらの拡張機能を入れることで、Flutter/Dart のコードが見やすくなったり、エラーをすぐに見つけられたり、コマンドを簡単に実行できたりと、開発が格段に楽になります！

## 3. 動作確認環境 (Emulator/Simulator/実機)

コードを書いただけではアプリは動きません。実際にアプリを実行し、見た目や動きを確認するための環境が必要です。主に以下の 3 つの方法があります。

- **Android エミュレータ (Android Emulator):**

  - パソコン上で Android スマホを仮想的に再現するソフトウェアです。
  - **Android Studio のインストールが必要**です（VS Code をメインで使う場合でも、エミュレータ管理のために必要になります）。
  - Android Studio を起動し、「Configure」または「Tools」メニューから「AVD Manager (Android Virtual Device Manager)」を開き、仮想デバイスを作成・起動します。
  - **参考 (Flutter 公式)**: https://flutter.dev/docs/get-started/install/windows#android-setup (OS に合わせて参照) の「Set up the Android emulator」セクション

- **iOS シミュレータ (iOS Simulator):**

  - Mac パソコン上で iOS デバイスを仮想的に再現するソフトウェアです。
  - **macOS と Xcode が必要**です。Xcode は Mac App Store からインストールできます。
  - Xcode をインストール後、いくつかの初期設定（コマンドラインツールの設定など）が必要です。設定後、ターミナルで open -a Simulator と打つか、Xcode から起動できます。
  - **参考 (Flutter 公式)**: https://flutter.dev/docs/get-started/install/macos#ios-setup の「Set up the iOS simulator」セクション

- 実機 (Physical Device):

  - お手持ちの Android スマホや iPhone/iPad を直接使う方法です。エミュレータ/シミュレータよりも動作が速く、実際のデバイスでの挙動を確認できるメリットがあります。

  - Android:

    - 「開発者向けオプション」を有効にし、「USB デバッグ」を ON にする必要があります。
    - USB ケーブルで PC と接続します。（PC によってはデバイスドライバのインストールが必要な場合があります）
    - **参考 (Flutter 公式)**: https://flutter.dev/docs/get-started/install/windows#android-setup (OS に合わせて参照) の「Enable VM acceleration on Windows」の下にある「Set up an Android device」セクション

  - iOS (iPhone/iPad):

    - macOS と Xcode が必要です。
    - Apple Developer アカウントが必要になる場合があります（無料アカウントで OK）。
    - USB ケーブルで Mac と接続し、デバイス側でコンピュータを「信頼」する必要があります。
    - **参考 (Flutter 公式)**: https://flutter.dev/docs/get-started/install/macos#ios-setup の「Deploy to iOS devices」セクション

まずはどれか一つ（エミュレータ、シミュレータ、または実機）でアプリを動かせれば OK です！

## 4. `flutter doctor` で最終チェック

ここまでの設定が正しく行われたかを確認するための、非常に便利なコマンドがあります。それが `flutter doctor` です。

ターミナル（Windows ならコマンドプロンプトや PowerShell、Mac/Linux ならターミナル）を開き、以下のコマンドを実行してください。

Bash

```
flutter doctor
```

これを実行すると、Flutter SDK、連携するツール（Android toolchain, Xcode, Chrome, Android Studio, VS Code など）、接続されているデバイスなどをチェックし、結果を表示してくれます。

```
Doctor summary (to see all details, run flutter doctor -v):
[✓] Flutter (Channel stable, 3.x.x, on macOS 13.x.x ...)
[✓] Android toolchain - develop for Android devices (Android SDK version 3x.x.x)
[✓] Xcode - develop for iOS and macOS (Xcode 14.x.x)
[✓] Chrome - develop for the web
[✓] Android Studio (version 202x.x.x)
[✓] VS Code (version 1.x.x)
[✓] Connected device (2 available)
! HTTP Host Availability <-- たまにネットワーク関連で「!」が出ることがある

! Doctor found issues in 1 category. <-- 問題がある場合は「!」や「✗」が表示される
```

- `[✓] `(チェックマーク): 問題なし！
- `[!] `(ビックリマーク) / `[✗] `(バツマーク): 何か問題があります。

問題が見つかった場合は、`flutter doctor` が表示するメッセージをよく読んでください。多くの場合、**問題を解決するためのコマンドや手順**（例: Android ライセンスに同意する `flutter doctor --android-licenses` を実行するなど）が表示されます。

表示された指示に従って問題を解決し、再度 `flutter doctor` を実行して、開発に必要な項目（最低でも Flutter 本体、開発したいプラットフォーム用のツールチェーン、エディタ、接続デバイス）に `[✓]` が付くことを目指しましょう！

（補足） `flutter doctor` の結果がオールグリーンにならなくても、自分が開発したいプラットフォーム（例えば Android だけ）に関する項目が `[✓]` になっていれば、開発を進められる場合が多いです。

## まとめ

お疲れ様でした！ 環境構築は少し大変だったかもしれませんが、これで Flutter アプリ開発を始めるための準備が整いました。

**今回行ったこと：**

- **Flutter SDK** をインストールし、PATH を通しました。
- 開発エディタ **VS Code** をインストールし、Flutter/Dart 拡張機能を入れました。
- アプリ実行環境として **エミュレータ/シミュレータ/実機** の準備方法を知りました。
- `flutter doctor` で設定状況を確認し、問題を修正しました。

環境構築は、一度やってしまえば基本的には完了です。トラブルシューティングも開発者としての大事なスキルの一つなので、良い経験になったと思ってくださいね。

次回はいよいよ、**「最初の Flutter アプリとご対面！」** です。実際に Flutter アプリを作成し、動かしてみましょう！ ホットリロードの速さにもきっと驚くはずです。お楽しみに！
