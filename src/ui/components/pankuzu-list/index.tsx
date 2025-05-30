import styles from "./styles.module.scss";
import { ChevronRight } from "react-feather";

type PankuzuItemProps = {
  label: string;
  href: string;
  isLast?: boolean;
};

export const PankuzuItem = ({ label, href, isLast }: PankuzuItemProps) => {
  return (
    <div className={styles.pankuzu_item}>
      <a href={href}>{label}</a>
      {!isLast && <ChevronRight size={20} />}
    </div>
  );
};

export const PankuzuList = ({ list }: { list: Array<PankuzuItemProps> }) => {
  return (
    <div className={styles.pankuzu_list}>
      {list.map((item, index) => (
        <PankuzuItem key={item.label} {...item} isLast={index === list.length - 1} />
      ))}
    </div>
  );
};
