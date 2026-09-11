"use client";

import { useState } from "react";

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [altText, setAltText] = useState<string>("");

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    const res = await fetch("/api/generate-alt", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setAltText(data.altText || data.error);
  };

  return (
    <main style={{ padding: 20 }}>
      {/* <h1>이미지 업로드 → 대체 텍스트 생성</h1> */}

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
      />

      <button onClick={handleUpload} style={{ marginLeft: 10 }}>
        업로드
      </button>

      {altText && <div className="blind">{altText}</div>}

      {/* <style jsx>{`
        .blind {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }
      `}</style> */}
    </main>
  );
}
