"use client";

import styles from "./styles.module.scss";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { useState } from "react";
import { Copy, Smartphone } from "react-feather";
import { useDartPad } from "@providers/dartpad-provider";

const CodeBlock = ({
  children,
  language,
  className,
  filename,
  gist,
}: {
  children: string;
  language?: string;
  className?: string;
  filename?: string;
  gist?: string;
}) => {
  const [copied, setCopied] = useState(false);
  const { isDartPad, toggleDartPad, setGist } = useDartPad();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(children);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // 2秒でリセット
    } catch (e) {
      console.error("Copy failed", e);
    }
  };
  return (
    <div className={`${styles.code_block} ${className || ""}`}>
      {(filename || true) && (
        <div className={styles.header}>
          <div className={styles.filename}>
            {filename || language || "code"}
          </div>
          <div className={styles.buttons}>
            <button className={styles.button} onClick={handleCopy}>
              {copied ? "Copied!" : <Copy size={16} />}
            </button>
            {!isDartPad && gist && (
              <button
                className={styles.button}
                onClick={() => {
                  toggleDartPad();
                  setGist(gist);
                }}
              >
                <Smartphone size={16} />
              </button>
            )}
          </div>
        </div>
      )}
      <SyntaxHighlighter
        language={language || "text"}
        style={oneDark}
        customStyle={{
          fontSize: "14px",
          margin: 0,
          borderRadius: "0 0 6px 6px",
        }}
        className={styles.syntax_highlighter}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
