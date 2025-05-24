import styles from "./styles.module.scss";
import HeroImage from "@assets/images/hero.png";
import { ArrowRight } from "react-feather";
import { CourseCard } from "@/ui/organisms/course-card";
import FlutterIcon from "@assets/images/icon_flutter.svg";
import Image from "next/image";

export default function Home() {
  const Heading = ({ title }: { title: string }) => {
    return <div className={styles.heading}>{title}</div>;
  };
  return (
    <div className={styles.home}>
      <div className={styles.hero}>
        <div className={styles.phrases_discription}>
          <div className={styles.phrases}>
            <div className={styles.phrase}>未経験からアプリ開発者へ！</div>
            <div className={styles.phrase}>あなたのアイデアを形に。</div>
          </div>
          <div className={styles.discription}>
            「アプリを作ってみたい！」その純粋な気持ちがスタートライン。
            <br />
            専門知識は後からで大丈夫。まずはアボカドプログラミングの記事で、
            <br />
            気軽にアプリ開発の楽しさに触れてみてください。
          </div>
        </div>
        <Image src={HeroImage} alt="アボカドプログラミング" />
      </div>
      <div className={styles.about}>
        <Heading title={"「アボカドプログラミング」へようこそ！"} />
        <div className={styles.content}>
          <div className={styles.p}>
            ここは、プログラミング経験が全くない方でも、「アプリ作ってみたいな！」というシンプルな好奇心から、気軽にアプリ開発の楽しさに触れられるサイトです。
          </div>
          <div className={styles.p}>
            気軽にブログを読むように、わかりやすい記事を通して、あなたの「やってみたい！」という気持ちを応援し、アプリ開発に必要な基礎知識やフレームワークの使い方をお届けします。
            アボカドの豊かな栄養が、あなたの想像力を育み、新しいスキルの習得する助けになることを願っています🥑
          </div>
          <div className={styles.p}>
            いずれは、皆さんのアイデアを本格的に形にするための学習プログラムやサポートも提供していきたいと考えています。
            まずは気軽に、ここからアプリ開発の世界をのぞいてみてください。
            あなたの「作ってみたい！」が、きっとここから始まります。
          </div>
        </div>
      </div>
      <div className={styles.courses}>
        <Heading title={"コース一覧"} />
        <div className={styles.content}>
          <div className={styles.note}>プログラミング初心者向け</div>
          <CourseCard
            icon={FlutterIcon.src}
            title={"初心者のためのアプリ開発教室- Flutter入門"}
            discription={
              "プログラミング経験がない方でも、話題のフレームワークFlutterを使いこなし、iOSとAndroidの両方で動くオリジナルアプリを実際に開発できるようになることを目指します。"
            }
            lesson={12}
          />
        </div>
      </div>
      <div className={styles.error_handling}>
        <Heading title={"エラーでつまづいたら..."} />
        <div className={styles.button}>
          <ArrowRight size={48} color="white" />
        </div>
      </div>
      <div className={styles.contact}>
        <Heading title={"お問い合わせ"} />
        <div className={styles.content}>
          <div className={styles.p}>
            お問い合わせは下記メールアドレスよりお願いいたします。
          </div>
          <div className={styles.email}>info@avocadoprogramming.tech</div>
        </div>
      </div>
    </div>
  );
}
