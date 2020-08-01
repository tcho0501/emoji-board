import React from "react";
import EmojiBoard from "./components/Emoji/EmojiBoard";
export default function App() {
  return (
    <div className="App">
      <h1
        style={{
          textAlign: "center",
          fontFamily: "Roboto, sans-serif"
        }}
      >
        Tim's Emoji App
      </h1>
      <EmojiBoard />
    </div>
  );
}
