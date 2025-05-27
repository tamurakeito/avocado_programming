"use client";

import { DartPad } from "@/ui/components/dartpad";
import styles from "./styles.module.scss";
import { useDartPad } from "@providers/dartpad-provider";
  
export const ArticleTemplate = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { isDartPad, toggleDartPad, gist } = useDartPad();
  return (
    <div className={styles.article}>
      {children}
      {isDartPad && <DartPad toggleDartPad={toggleDartPad} gist={gist} />}
    </div>
  );
};
