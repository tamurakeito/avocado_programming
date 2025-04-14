# Flutter のキホン、「Widget」を理解しよう

さて、Dart 言語の基本を少し学んだところで、いよいよ Flutter の中心的な概念である**Widget（ウィジェット）**について学んでいきましょう！ Flutter アプリ開発では、この Widget を理解することが非常に重要です。

Flutter では「すべてが Widget」！？
Flutter の最も特徴的な考え方の一つが、**「UI（ユーザーインターフェース：画面の見た目や操作部分）を構成するほとんどすべての要素が Widget である」**という点です。

画面に表示する文字 (テキスト)
ボタン
画像
アイコン
画面全体のレイアウト（配置）
画面の見えない部分（余白など）
これらすべてが Widget として扱われます。まるでレゴブロックのように、様々な種類の Widget を組み合わせてアプリの画面を作り上げていくイメージです。

この Widget を組み合わせた構造のことを Widget ツリーと呼びます。大きな Widget の中に小さな Widget が入子（ネスト）になって、画面全体が構成されます。

// Widget ツリーのイメージ（あくまで概念図）
MaterialApp( // アプリ全体
home: Scaffold( // 画面の基本骨格
appBar: AppBar( // 上部のバー
title: Text('タイトル'), // バーの中のテキスト
),
body: Center( // 画面中央に配置
child: Text('こんにちは、Flutter！'), // 中央に表示するテキスト
),
),
)
Widget には２つの基本タイプがある：StatelessWidget と StatefulWidget
Widget にはたくさんの種類がありますが、大きく分けて 2 つの基本的なタイプをまず覚えましょう。

StatelessWidget (ステートレスウィジェット)

意味: 「State（状態）を持たない」Widget。
特徴: 一度表示されたら、それ自体が内部の情報で見た目が変化することはありません。設定された情報に基づいて常に同じように表示されます。
例: アイコン、ただ表示するだけのテキスト、一度表示したら変わらない画像など。
イメージ: 一度印刷したら内容が変わらない「ポスター」や「看板」のようなもの。
コードの基本形:
Dart

import 'package:flutter/material.dart';

// StatelessWidget を継承してクラスを作る
class MyStaticWidget extends StatelessWidget {
// この build メソッドが Widget の見た目を作る
@override
Widget build(BuildContext context) {
// ここに表示したい Widget を記述して返す
return Container( // 例えば色付きの四角い箱を返す
color: Colors.blue,
width: 100,
height: 50,
);
}
}
extends StatelessWidget で StatelessWidget であることを示します。
build メソッドが、この Widget が画面にどう表示されるかを定義する場所です。
StatefulWidget (ステートフルウィジェット)

意味: 「State（状態）を持つ」Widget。
特徴: ユーザーの操作やデータの更新などによって、見た目が動的に変化する可能性のある Widget です。
例: チェックボックス（チェックの ON/OFF で見た目が変わる）、カウンター（ボタンを押すと数字が増える）、アニメーションなど。
イメージ: 試合中に得点が変わる「スコアボード」や、押すたびに ON/OFF が切り替わる「電灯のスイッチ」のようなもの。
コードの基本形: (StatelessWidget より少し複雑です)
Dart

import 'package:flutter/material.dart';

// ① StatefulWidget 自体 (状態を持つことを宣言)
class MyDynamicWidget extends StatefulWidget {
@override
\_MyDynamicWidgetState createState() => \_MyDynamicWidgetState();
}

// ② State オブジェクト (実際の状態と見た目を作る)
class \_MyDynamicWidgetState extends State<MyDynamicWidget> {
// ここに変化するデータ（状態）を持つことができる (例: int count = 0;)

@override
Widget build(BuildContext context) {
// 現在の状態に基づいて Widget の見た目を作る
return Container( // 例: 状態によって色が変わる箱など
// color: (状態によって変化する色),
width: 100,
height: 50,
child: Text('変化する Widget'),
);
}
}
StatefulWidget は、StatefulWidget を継承したクラスと、State を継承したクラスの 2 つで 1 セットになります。
変化する可能性のあるデータ（状態）は State クラス側で持ちます。
見た目を作る build メソッドは State クラス側にあります。
重要: 「どうやって見た目を変化させるか（setState の使い方など）」の詳細は、後の「状態管理」の章で詳しく学びますので、今は「見た目が変わる可能性がある Widget なんだな」という理解で OK です！
今はまず、見た目が変わらないものは StatelessWidget、変わる可能性があるものは StatefulWidget を使う、と覚えておきましょう。

まずは StatelessWidget で簡単な UI を作ってみよう
最初は StatelessWidget を使って、画面に部品を表示する練習をしてみましょう。

例えば、青い背景色を持ち、中央に「Hello Widget!」と表示する簡単な Widget を作ってみます。

Dart

import 'package:flutter/material.dart';

class HelloWidgetBox extends StatelessWidget {
@override
Widget build(BuildContext context) {
// Container: 色やサイズ、余白などを指定できる便利な箱 Widget
return Container(
color: Colors.blue[100], // 背景色 (薄い青)
width: 200, // 幅を 200 に指定
height: 100, // 高さを 100 に指定
// Center: 中に入れた Widget (child) を中央に配置する Widget
child: Center(
// Text: 文字を表示する Widget
child: Text(
'Hello Widget!',
// TextStyle: 文字の見た目(サイズ、色など)を指定
style: TextStyle(
fontSize: 20.0, // 文字サイズ
color: Colors.black, // 文字色
fontWeight: FontWeight.bold, // 太字
),
),
),
);
}
}

// --- 実際に画面に表示するためのコード (main.dart などに書く) ---
void main() {
runApp(
MaterialApp(
home: Scaffold(
appBar: AppBar(title: Text('Widget 入門')),
body: Center( // 作った Widget を画面中央に表示
child: HelloWidgetBox(), // 上で作った Widget クラスを使う
),
),
)
);
}
この例では、Container、Center、Text という 3 つの Widget を組み合わせています。Container の中に Center が入り、Center の中に Text が入るという「入れ子構造（Widget ツリー）」になっているのが分かりますね。

よく使う基本的な Widget たち
Flutter には、あらかじめ用意された便利な Widget がたくさんあります（これらを Material Components Widgets などと呼びます）。ここでは、特によく使う基本的なものをいくつか紹介します。

Container:

最も基本的な「箱」のような Widget。
色 (color)、幅 (width)、高さ (height)、内側の余白 (padding)、外側の余白 (margin) などを指定できます。
中に別の Widget (child) を入れることができます。
Container(color: Colors.red, width: 50, height: 50) -> 赤い 50x50 の四角形
Text:

文字列を表示するための Widget。
style プロパティで TextStyle を指定し、フォントサイズ (fontSize)、色 (color)、太さ (fontWeight) などを変更できます。
Text('こんにちは', style: TextStyle(fontSize: 24, color: Colors.blue))
Icon:

アイコンを表示するための Widget。
Icons. に続けて使いたいアイコン名を指定します（例: Icons.favorite -> ハートマーク）。
color や size も指定できます。
Icon(Icons.star, color: Colors.yellow, size: 30) -> 黄色い星アイコン
Image:

画像を表示するための Widget。
アプリ内に画像ファイルを含めて表示 (Image.asset('画像ファイルのパス'))
インターネット上の画像を表示 (Image.network('画像の URL')) などの方法があります。
Image.asset を使う場合:
プロジェクトのルート（pubspec.yaml と同じ階層）に assets フォルダなど（名前は任意）を作成し、そこに画像ファイルを置きます。
pubspec.yaml ファイルに使用するアセットフォルダを宣言します。
YAML

flutter:
uses-material-design: true
assets: - assets/ # assets フォルダ全体を対象にする場合 # - assets/images/ # images フォルダだけを対象にする場合 # - assets/my_icon.png # 特定のファイルだけを対象にする場合
コード内で Image.asset('assets/画像ファイル名') のように指定します。
Center:

中に配置された child Widget を、利用可能なスペースの中央に配置します。
Center(child: Text('中央寄せ'))
これらの Widget を組み合わせることで、様々なレイアウトや表現が可能になります。次の章では、これらの Widget をうまく配置するための「レイアウト用 Widget」について学んでいきましょう。

まとめ
Flutter では UI のほとんどが Widget で構成される。
Widget を組み合わせて Widget ツリー を作る。
Widget には基本タイプとして、見た目が変わらない StatelessWidget と、変わる可能性のある StatefulWidget がある。
Container, Text, Icon, Image, Center など、便利な基本 Widget がたくさん用意されている。
まずはこれらの基本をしっかり押さえて、Widget を組み合わせていく感覚に慣れていきましょう！
