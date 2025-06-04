import styles from "./styles.module.scss";
import { Button } from "@/ui/atoms/button";
const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.about_heading}>
        「アボカドプログラミング」へようこそ
      </div>
      <div className={styles.about_content}>
        <div className={styles.about_content_text_container}>
          <div className={styles.about_content_text}>
            ここは、プログラミング経験が全くない方でも、「アプリ作ってみたいな！」というシンプルな好奇心から、気軽にアプリ開発の楽しさに触れられるサイトです。
          </div>
          <div className={styles.about_content_text}>
            気軽にブログを読むように、わかりやすい記事を通して、あなたの「やってみたい！」という気持ちを応援し、アプリ開発に必要な基礎知識やフレームワークの使い方をお届けします。アボカドの豊かな栄養が、あなたの創造力を育み、新しいスキルを習得する助けになることを願っています🥑
          </div>
          <div className={styles.about_content_text}>
            いずれは、皆さんのアイデアを本格的に形にするための学習プログラムやサポートも提供していきたいと考えています。まずは気軽に、ここからアプリ開発の世界を覗いてみてください。あなたの「作ってみたい！」が、きっとここから始まります。
          </div>
        </div>
        <Button label="トップへ戻る" href={"/"} />
      </div>
    </div>
  );
};

export default About;
