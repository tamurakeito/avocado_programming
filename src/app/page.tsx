import styles from "./pages.module.scss";
import HeroImage from "@assets/images/hero.png";
import { ArrowRight } from "react-feather";
import { CourseCardList } from "@/ui/components/course-card";
import FlutterIcon from "@assets/images/icon_flutter.svg";
import Image from "next/image";
import { Category } from "@/ui/atoms/category";
import { Button } from "@/ui/atoms/button";
import { MockProgramApi } from "@/api/mock/program";

const HomePage = async () => {
  const Heading = ({ title }: { title: string }) => {
    return <div className={styles.heading}>{title}</div>;
  };
  const api = new MockProgramApi();
  const list = await api.fetchLectureList();
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
          <Category label="プログラミング初心者向け" />
          <CourseCardList list={list} />
        </div>
      </div>
      <div className={styles.error_handling}>
        <Heading title={"エラーでつまづいたら..."} />
        <Button label="エラーを解決する" href={"/error-handling"} />
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
};

export default HomePage;
