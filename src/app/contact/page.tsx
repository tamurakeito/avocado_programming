import styles from "./styles.module.scss";
import { Button } from "@ui/atoms/button";

const ContactPage = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.contact_heading}>お問い合わせ</div>
      <div className={styles.contact_content}>
        <div className={styles.contact_content_text}>
          お問い合わせは下記メールアドレスよりお願いいたします。
        </div>
        <div className={styles.contact_content_email}>
          info@avocadoprogramming.com
        </div>
        <Button label="トップへ戻る" href={"/"} />
      </div>
    </div>
  );
};

export default ContactPage;
