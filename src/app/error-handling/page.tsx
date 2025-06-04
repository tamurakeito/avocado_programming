import styles from "./styles.module.scss";
import classNames from "classnames";
import { Button } from "@ui/atoms/button";
const ErrorHandling = () => {
  return (
    <div className={styles.error_handling}>
      <div className={styles.error_handling_heading}>
        エラーでつまづいたら...
      </div>
      <div className={styles.error_handling_content}>
        <div className={styles.error_handling_content_text_container}>
          <div className={styles.error_handling_content_text}>
            プログラミングの学習中にエラーメッセージが表示されると、ドキッとしたり、どうすれば良いか分からなくなったりしますよね。でも焦らなくて大丈夫です。エラーは、プログラミングを学んでいれば誰でも必ず出会うものですし、決してあなたが悪い訳ではありません。
          </div>
          <div
            className={classNames([
              styles.error_handling_content_text,
              styles.error_handling_content_text_bold,
            ])}
          >
            まずは、慌てずに深呼吸。
          </div>
          <div className={styles.error_handling_content_text}>
            エラーは、プログラムが「ここがちょっと分からないよ」「こうしてくれると助かるんだけどな」と教えてくれているサインのようなものです。解決できたときには大きな達成感が得られますし、自分のスキルが一段とアップしていることに気づくはずです。
          </div>
        </div>
        <Button label="トップへ戻る" href={"/"} />
      </div>
    </div>
  );
};

export default ErrorHandling;
