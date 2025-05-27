"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import { Minimize2, X, Maximize2, Smartphone } from "react-feather";

interface DartPadEmbedProps {
  height?: number;
  width?: number;
  gist: string;
}

const DartPadEmbed: React.FC<DartPadEmbedProps> = ({
  height = 500,
  width = 100,
  gist,
}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const message = {
      sourceCode: gist,
      type: "sourceCode",
    };

    // postMessage で DartPad にコード送信
    const sendMessage = () => {
      iframe.contentWindow?.postMessage(message, "*");
    };

    iframe.addEventListener("load", sendMessage);

    return () => {
      iframe.removeEventListener("load", sendMessage);
    };
  }, [gist]);

  return (
    <iframe
      ref={iframeRef}
      title="DartPad"
      src={`https://dartpad.dev/?embed=true&id=${gist}`}
      width={width}
      height={height}
      sandbox="allow-forms allow-popups allow-same-origin allow-scripts"
    ></iframe>
  );
};

export const DartPad = ({
  toggleDartPad,
  gist,
}: {
  toggleDartPad: () => void;
  gist: string;
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // クライアントサイドでのみ window を参照
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth * 0.7,
        height: window.innerHeight * 0.9,
      });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  if (dimensions.width === 0 || dimensions.height === 0) {
    // 初期値のままなら何も表示しない
    return null;
  }

  return (
    <div className={styles.dartpad}>
      <div
        className={styles.embed_wrapper}
        style={{
          display: isOpen ? "block" : "none",
        }}
      >
        <div className={styles.dartpad_header}>
          <Minimize2 size={16} onClick={() => setIsOpen(false)} />
          <X size={16} onClick={toggleDartPad} />
        </div>
        <DartPadEmbed
          width={dimensions.width}
          height={dimensions.height}
          gist={gist}
        />
      </div>
      <div className={styles.closed_wrapper}>
        <div className={styles.wrapper_chunk}>
          <Smartphone size={16} />
          <div>DartPad</div>
        </div>
        <div className={styles.wrapper_chunk}>
          <Maximize2 size={14} onClick={() => setIsOpen(true)} />
          <X size={16} onClick={toggleDartPad} />
        </div>
      </div>
    </div>
  );
};
