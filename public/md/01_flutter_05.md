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

さて、Dart 言語の基本を少し学んだところで、いよいよ Flutter の中心的な概念である **Widget（ウィジェット）** について学んでいきましょう！ Flutter アプリ開発では、この Widget を理解することが非常に重要です。

## Flutter では「すべてが Widget」！？

Flutter の最も特徴的な考え方の一つが、 **「UI（ユーザーインターフェース：画面の見た目や操作部分）を構成するほとんどすべての要素が Widget である」** という点です。

- 画面に表示する文字 (テキスト)
- ボタン
- 画像
- アイコン
- 画面全体のレイアウト（配置）
- 画面の見えない部分（余白など）

これらすべてが Widget として扱われます。まるでレゴブロックのように、様々な種類の Widget を組み合わせてアプリの画面を作り上げていくイメージです。

この Widget を組み合わせた構造のことを Widget ツリーと呼びます。大きな Widget の中に小さな Widget が入子（ネスト）になって、画面全体が構成されます。

<pre>
<code><span class="gray">// Widget ツリーのイメージ（あくまで概念図）</span>
<span class="green">MaterialApp</span><span class="blue">(</span>  <span class="gray">// アプリ全体</span>
  <span class="skyblue">home</span>: <span class="green">Scaffold</span><span class="yellow">(</span>  <span class="gray">// 画面の基本骨格</span>
    <span class="skyblue">appBar</span>: <span class="green">AppBar</span><span class="pink">(</span>  <span class="gray">// 上部のバー</span>
      <span class="skyblue">title</span>: <span class="green">Text</span><span class="blue">(</span><span class="orange">'タイトル'</span><span class="blue">)</span>,  <span class="gray">// バーの中のテキスト</span>
    <span class="pink">)</span>,
    <span class="skyblue">body</span>: <span class="green">Center</span><span class="pink">(</span>  <span class="gray">// 画面中央に配置</span>
      <span class="skyblue">child</span>: <span class="green">Text</span><span class="blue">(</span><span class="orange">'こんにちは、Flutter！'</span><span class="blue">)</span>,  <span class="gray">// 中央に表示するテキスト</span>
    <span class="pink">)</span>,
  <span class="yellow">)</span>,
<span class="blue">)</span></code>
</pre>

## Widget には２つの基本タイプがある：StatelessWidget と StatefulWidget

Widget にはたくさんの種類がありますが、大きく分けて 2 つの基本的なタイプをまず覚えましょう。

### 1. StatelessWidget (ステートレスウィジェット)

- **意味**: 「State（状態）を持たない」Widget。
- **特徴**: 一度表示されたら、それ自体が内部の情報で見た目が変化することはありません。設定された情報に基づいて常に同じように表示されます。
- **例**: アイコン、ただ表示するだけのテキスト、一度表示したら変わらない画像など。
- **イメージ**: 一度印刷したら内容が変わらない「ポスター」や「看板」のようなもの。
- **コードの基本形**:
  Dart

<pre><code><span class="blue">import</span> <span class="orange">'<span class="skyblue">package</span>:flutter/material.dart'</span>;

<span class="gray">// <span class="green">StatelessWidget</span>を継承してクラスを作る</span>
<span class="blue">class</span> <span class="green">MyStaticWidget</span> <span class="blue">extends</span> <span class="green">StatelessWidget</span> <span class="yellow">{</span>
  <span class="gray">// この <span class="yellow">build</span> メソッドが<span class="green">Widget</span>の見た目を作る</span>
  <span class="skyblue">@override</span>
  <span class="green">Widget</span> <span class="yellow">build</span><span class="blue">(</span><span class="green">BuildContext</span> <span class="skyblue">context</span><span class="blue">)</span> <span class="purple">{</span>
    <span class="gray">// ここに表示したい<span class="green">Widget</span>を記述して返す</span>
    <span class="purple">return</span> <span class="blue">(</span> <span class="gray">// 例えば色付きの四角い箱を返す</span>
      <span class="skyblue">color</span>: <span class="green">Colors</span>.<span class="skyblue">blue</span>,
      <span class="skyblue">width</span>: <span class="yellowgreen">100</span>,
      <span class="skyblue">height</span>: <span class="yellowgreen">50</span>,
    <span class="blue">)</span>;
  <span class="purple">}</span>
<span class="yellow">}</span>
</code></pre>

`extends StatelessWidget` で StatelessWidget であることを示します。
build メソッドが、この Widget が画面にどう表示されるかを定義する場所です。

### 2. **StatefulWidget** (ステートフルウィジェット)

- 意味: 「State（状態）を持つ」Widget。
- 特徴: ユーザーの操作やデータの更新などによって、見た目が動的に変化する可能性のある Widget です。
- 例: チェックボックス（チェックの ON/OFF で見た目が変わる）、カウンター（ボタンを押すと数字が増える）、アニメーションなど。
- イメージ: 試合中に得点が変わる「スコアボード」や、押すたびに ON/OFF が切り替わる「電灯のスイッチ」のようなもの。
- コードの基本形: (StatelessWidget より少し複雑です)
  Dart

<pre><code><span class="blue">import</span> <span class="orange">'<span class="skyblue">package</span>:flutter/material.dart'</span>;

<span class="gray">// ① <span class="green">StatefulWidget</span> 自体 <span class="blue">(</span>状態を持つことを宣言<span class="blue">)</span></span>
<span class="blue">class</span> <span class="green">MyDynamicWidget</span> <span class="blue">extends</span> <span class="green">StatefulWidget</span> <span class="yellow">{</span>
  <span class="skyblue">@override</span>
  <span class="green">_MyDynamicWidgetState</span> <span class="yellow">createState</span><span class="blue">(</span><span class="blue">)</span> => <span class="green">_MyDynamicWidgetState</span><span class="blue">(</span><span class="blue">)</span>;
<span class="yellow">}</span>

<span class="gray">// ② <span class="green">State</span> オブジェクト <span class="blue">(</span>実際の状態と見た目を作る<span class="blue">)</span></span>
<span class="blue">class</span> <span class="green">_MyDynamicWidgetState</span> <span class="blue">extends</span> <span class="green">State</span><<span class="green">MyDynamicWidget</span>> <span class="yellow">{</span>
  <span class="gray">// ここに変化するデータ（状態）を持つことができる <span class="blue">(</span>例: int count = 0;<span class="blue">)</span></span>

  <span class="skyblue">@override</span>
  <span class="green">Widget</span> <span class="yellow">build</span><span class="blue">(</span><span class="green">BuildContext</span> <span class="skyblue">context</span><span class="blue">)</span> <span class="purple">{</span>
    <span class="gray">// 現在の状態に基づいて <span class="green">Widget</span> の見た目を作る</span>
    <span class="purple">return</span> <span class="green">Container</span><span class="blue">(</span> <span class="gray">// 例: 状態によって色が変わる箱など</span>
      <span class="gray">// <span class="skyblue">color</span>: <span class="yellow">(</span>状態によって変化する色<span class="yellow">)</span>,</span>
      <span class="skyblue">width</span>: <span class="yellowgreen">100</span>,
      <span class="skyblue">height</span>: <span class="yellowgreen">50</span>,
      <span class="skyblue">child</span>: <span class="green">Text</span><span class="yellow">(</span><span class="orange">'変化する <span class="green">Widget</span>'</span><span class="yellow">)</span>,
    <span class="blue">)</span>;
  <span class="purple">}</span>
<span class="yellow">}</span></code></pre>

StatefulWidget は、StatefulWidget を継承したクラスと、State を継承したクラスの 2 つで 1 セットになります。
変化する可能性のあるデータ（状態）は State クラス側で持ちます。
見た目を作る build メソッドは State クラス側にあります。
重要: 「どうやって見た目を変化させるか（setState の使い方など）」の詳細は、後の「状態管理」の章で詳しく学びますので、今は「見た目が変わる可能性がある Widget なんだな」という理解で OK です！
今はまず、見た目が変わらないものは StatelessWidget、変わる可能性があるものは StatefulWidget を使う、と覚えておきましょう。

まずは StatelessWidget で簡単な UI を作ってみよう
最初は StatelessWidget を使って、画面に部品を表示する練習をしてみましょう。

例えば、青い背景色を持ち、中央に「Hello Widget!」と表示する簡単な Widget を作ってみます。

Dart

<pre><code><span class="blue">import</span> <span class="orange">'<span class="skyblue">package</span>:flutter/material.dart'</span>;

<span class="blue">class</span> <span class="green">HelloWidgetBox</span> <span class="blue">extends</span> <span class="green">StatelessWidget</span> <span class="yellow">{</span>
  <span class="skyblue">@override</span>
  <span class="green">Widget</span> <span class="yellow">build</span><span class="blue">(</span><span class="green">BuildContext</span> <span class="skyblue">context</span><span class="blue">)</span> <span class="purple">{</span>
    <span class="gray">// Container: 色やサイズ、余白などを指定できる便利な箱Widget</span>
    <span class="purple">return</span> <span class="green">Container</span><span class="blue">(</span>
      <span class="skyblue">color</span>: <span class="green">Colors</span>.<span class="skyblue">blue</span>[<span class="yellowgreen">100</span>], <span class="gray">// 背景色 (薄い青)</span></span>
      <span class="skyblue">width</span>: 200, <span class="gray">// 幅を 200 に指定</span>
      <span class="skyblue">height</span>: <span class="yellowgreen">100</span>, <span class="gray">// 高さを <span class="yellowgreen">100</span> に指定</span>
      <span class="gray">// Center: 中に入れたWidget(child)を中央に配置するWidget</span></span>
      <span class="skyblue">child</span>: <span class="green">Center</span><span class="yellow">(</span>
        <span class="gray">// Text: 文字を表示するWidget</span>
        <span class="skyblue">child</span>: <span class="green">Text</span><span class="pink">(</span>
          <span class="orange">'<span class="green">Hello</span> <span class="green">Widget</span>!'</span>,
          <span class="gray">// TextStyle: 文字の見た目(サイズ、色など)を指定</span>
          <span class="skyblue">style</span>: <span class="green">TextStyle</span><span class="blue">(</span>
            <span class="skyblue">fontSize</span>: 20.0, <span class="gray">// 文字サイズ</span>
            <span class="skyblue">color</span>: <span class="green">Colors</span>.black, <span class="gray">// 文字色</span>
            <span class="skyblue">fontWeight</span>: <span class="green">FontWeight</span>.bold, <span class="gray">// 太字</span>
          <span class="blue">)</span>,
        <span class="pink">)</span>,  
      <span class="yellow">)</span>,
    <span class="blue">)</span>;
  <span class="purple">}</span>
<span class="yellow">}</span></code></pre>

<pre><code><span class="gray">// --- 実際に画面に表示するためのコード <span class="blue">(</span>main.dart などに書く<span class="blue">)</span> ---</span>
<span class="blue">void</span> <span class="yellow">main</span><span class="blue">(</span><span class="blue">)</span> <span class="yellow">{</span>
  <span class="yellow">runApp</span><span class="blue">(</span>
    <span class="green">MaterialApp</span><span class="yellow">(</span>
      <span class="skyblue">home</span>: <span class="green">Scaffold</span><span class="pink">(</span>
        <span class="skyblue">appBar</span>: <span class="green">AppBar</span><span class="blue">(<span class="skyblue"></span>title</span>: <span class="green">Text</span><span class="yellow">(</span><span class="orange">'<span class="green">Widget</span> 入門'</span><span class="yellow">)</span><span class="blue">)</span>,
        <span class="skyblue">body</span>: <span class="green">Center</span><span class="blue">(</span> <span class="gray">// 作った <span class="green">Widget</span> を画面中央に表示</span>
          <span class="skyblue">child</span>: <span class="green">HelloWidgetBox</span><span class="yellow">()</span>, <span class="gray">// 上で作った <span class="green">Widget</span> クラスを使う</span>
        <span class="blue">)</span>,
      <span class="pink">)</span>,  
    <span class="yellow">)</span>
  <span class="blue">)</span>;
<span class="yellow">}</span></code></pre>

この例では、`Container`、`Center`、`Text`という 3 つの Widget を組み合わせています。`Container`の中に`Center`が入り、`Center`の中に`Text`が入るという「入れ子構造（Widget ツリー）」になっているのが分かりますね。

## よく使う基本的な Widget たち

Flutter には、あらかじめ用意された便利な Widget がたくさんあります（これらを **Material Components Widgets** などと呼びます）。ここでは、特によく使う基本的なものをいくつか紹介します。

### Container:

- 最も基本的な「箱」のような Widget。
- 色 (`color`)、幅 (`width`)、高さ (`height`)、内側の余白 (`padding`)、外側の余白 (`margin`) などを指定できます。
- 中に別の Widget (`child`) を入れることができます。
- `Container(color: Colors.red, width: 50, height: 50)` -> 赤い 50x50 の四角形

### Text:

- 文字列を表示するための Widget。
- `style` プロパティで `TextStyle` を指定し、フォントサイズ (`fontSize`)、色 (`color`)、太さ (`fontWeight`) などを変更できます。
- `Text('こんにちは', style: TextStyle(fontSize: 24, color: Colors.blue))`

### Icon:

- アイコンを表示するための Widget。
- `Icons`. に続けて使いたいアイコン名を指定します（例: `Icons.favorite` -> ハートマーク）。
- `color` や `size` も指定できます。
- `Icon(Icons.star, color: Colors.yellow, size: 30)` -> 黄色い星アイコン

### Image:

- 画像を表示するための Widget。
- アプリ内に画像ファイルを含めて表示 (`Image.asset('画像ファイルのパス')`), インターネット上の画像を表示 (`Image.network('画像の URL')`) などの方法があります。
- `Image.asset` を使う場合:

  1. プロジェクトのルート（`pubspec.yaml` と同じ階層）に `assets` フォルダなど（名前は任意）を作成し、そこに画像ファイルを置きます。
  2. `pubspec.yaml` ファイルに使用するアセットフォルダを宣言します。
     YAML

    <pre><code><span class="blue">flutter</span>:
      <span class="blue">uses-material-design</span>: <span class="blue">true</span>
      <span class="blue">assets</span>: <span class="blue">- assets/</span> <span class="gray"># assets フォルダ全体を対象にする場合</span>
      <span class="gray"># - assets/images/ # images フォルダだけを対象にする場合</span>
      <span class="gray"># - assets/my_icon.png # 特定のファイルだけを対象にする場合</span></code></pre>

コード内で `Image.asset('assets/画像ファイル名')` のように指定します。

### Center:

- 中に配置された `child` Widget を、利用可能なスペースの中央に配置します。
- `Center(child: Text('中央寄せ'))`

これらの Widget を組み合わせることで、様々なレイアウトや表現が可能になります。次の章では、これらの Widget をうまく配置するための「レイアウト用 Widget」について学んでいきましょう。

## まとめ

- Flutter では UI のほとんどが Widget で構成される。
- Widget を組み合わせて Widget ツリー を作る。
- Widget には基本タイプとして、見た目が変わらない StatelessWidget と、変わる可能性のある StatefulWidget がある。
- `Container`, `Text`, `Icon`, `Image`, `Center` など、便利な基本 Widget がたくさん用意されている。

まずはこれらの基本をしっかり押さえて、Widget を組み合わせていく感覚に慣れていきましょう！
