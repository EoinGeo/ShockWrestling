import React, { useRef, useState } from "react";
import { View, StyleSheet } from "react-native-web";
import { Slot, Link } from "expo-router";
import { useTheme } from "../contexts/ThemeContext";
import html2canvas from "html2canvas";

export default function PageFormat() {
  const { colours, isVertical, setVertical } = useTheme();
  const slotRef = useRef<HTMLDivElement>(null);

  const exportWidth = isVertical ? 1080 : 1920;
  const exportHeight = isVertical ? 1920 : 1080;

  const handleExport = async () => {
    if (!slotRef.current) return;

    try {
      const canvas = await html2canvas(slotRef.current, {
        scale: 1,
        useCORS: true,
      });

      const imgData = canvas.toDataURL("image/png");

      const link = document.createElement("a");
      link.href = imgData;
      link.download = "newsletter.png";
      link.click();
    } catch (err) {
      console.error("Export failed:", err);
    }
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colours.background,
          alignItems: "center",
        },
      ]}
    >
      {/* Controls */}
      <div
        style={{
          display: "flex",
          gap: 12,
          marginBottom: 24,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <button
          style={{
            padding: "12px 24px",
            fontSize: 16,
            cursor: "pointer",
          }}
          onClick={handleExport}
        >
          Export Newsletter
        </button>

        <button
          style={{
            padding: "12px 24px",
            fontSize: 16,
            cursor: "pointer",
            backgroundColor: isVertical === "portrait" ? "#2563eb" : "#eee",
            color: isVertical === "portrait" ? "#fff" : "#000",
            border: "none",
            borderRadius: 6,
          }}
          onClick={() => setVertical(true)}
        >
          Portrait (1080×1920)
        </button>

        <button
          style={{
            padding: "12px 24px",
            fontSize: 16,
            cursor: "pointer",
            backgroundColor: isVertical === "landscape" ? "#2563eb" : "#eee",
            color: isVertical === "landscape" ? "#fff" : "#000",
            border: "none",
            borderRadius: 6,
          }}
          onClick={() => setVertical(false)}
        >
          Landscape (1920×1080)
        </button>

        <Link
          href="/newsletters/worldcup"
          style={{
            padding: "12px 24px",
            fontSize: 16,
            cursor: "pointer",
            backgroundColor: "#eee",
            borderRadius: 6,
            textDecoration: "none",
            color: "#000",
          }}
        >
          World Cup Newsletter
        </Link>

        <Link
          href="/newsletters/gcNewsletter"
          style={{
            padding: "12px 24px",
            fontSize: 16,
            cursor: "pointer",
            backgroundColor: "#eee",
            borderRadius: 6,
            textDecoration: "none",
            color: "#000",
          }}
        >
          GC Newsletter
        </Link>

        <Link
          href="/newsletters/hgNewsletter"
          style={{
            padding: "12px 24px",
            fontSize: 16,
            cursor: "pointer",
            backgroundColor: "#eee",
            borderRadius: 6,
            textDecoration: "none",
            color: "#000",
          }}
        >
          HG Newsletter
        </Link>

        <Link
          href="/newsletters/cawNewsletter"
          style={{
            padding: "12px 24px",
            fontSize: 16,
            cursor: "pointer",
            backgroundColor: "#eee",
            borderRadius: 6,
            textDecoration: "none",
            color: "#000",
          }}
        >
          CAW Newsletter
        </Link>

        <Link
          href="/newsletters/wildNewsletter"
          style={{
            padding: "12px 24px",
            fontSize: 16,
            cursor: "pointer",
            backgroundColor: "#eee",
            borderRadius: 6,
            textDecoration: "none",
            color: "#000",
          }}
        >
          Wild Newsletter
        </Link>

        <Link
          href="/newsletters/strikeNewsletter"
          style={{
            padding: "12px 24px",
            fontSize: 16,
            cursor: "pointer",
            backgroundColor: "#eee",
            borderRadius: 6,
            textDecoration: "none",
            color: "#000",
          }}
        >
          Strike Newsletter
        </Link>
      </div>

      {/* Preview */}
      <div
        style={{
          marginBottom: 12,
          fontSize: 14,
          fontWeight: 600,
        }}
      >
        Current Format: {exportWidth} × {exportHeight}
      </div>

      {/* Export Area */}
      <div
        ref={slotRef}
        style={{
          width: exportWidth,
          height: exportHeight,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Slot />
      </div>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingTop: 16,
  },
});
