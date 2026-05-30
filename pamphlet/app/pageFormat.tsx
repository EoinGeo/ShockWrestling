import React, { useRef } from "react";
import { View, StyleSheet } from "react-native-web";
import { Slot, Link } from "expo-router";
import { useTheme } from "../contexts/ThemeContext";
import html2canvas from "html2canvas";

export default function PageFormat() {
  const { colours } = useTheme();
  const slotRef = useRef<HTMLDivElement>(null);

  const handleExport = async () => {
    if (!slotRef.current) return;

    try {
      const canvas = await html2canvas(slotRef.current, {
        scale: 2, // higher resolution
        useCORS: true, // if images are external
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
        { backgroundColor: colours.background, alignItems: "center" },
      ]}
    >
      {/* Buttons Row */}
      <div style={{ display: "flex", gap: 12, marginBottom: 24 }}>
        {/* Export Button */}
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

        {/* Navigation Buttons 
        <Link
          href="/newsletters/pgNewsletter"
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
          PG Newsletter
        </Link>

        <Link
          href="/newsletters/snceNewsletter"
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
          SNCE Newsletter
        </Link>*/}
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

      {/* Slot wrapped in real div */}
      <div
        ref={slotRef}
        style={{
          width: 1080,
          height: 1920,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
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
