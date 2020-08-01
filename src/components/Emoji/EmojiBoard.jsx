import React, { useState, useEffect } from "react";
import Emoji from "./Emoji";
import EmojiButton from "./EmojiButton";
import EmojiBoardWrapper from "./EmojiBoardWrapper";
import EmojiBubble from "./EmojiBubble";
import AutoExpire from "../AutoExpire";

const EmojiBoard = () => {
  const emojis = [
    { label: "UwU", symbol: "🥺" },
    { label: "clown", symbol: "🤡" },
    { label: "hot", symbol: "🥵" },
    { label: "mindBlown", symbol: "🤯" },
    { label: "eyesUp", symbol: "🙄" },
    { label: "-_-", symbol: "😑" }
  ];

  const [emojiQueue, setEmojiQueue] = useState([]);
  useEffect(() => {
    console.log(emojiQueue);
  }, [emojiQueue]);

  const handleEmojiKeyDown = (event, label, symbol) => {
    if (event.key === "Enter") {
      setEmojiQueue([
        ...emojiQueue,
        {
          symbol,
          label,
          size: getRandomInt(1, 10),
          left: getRandomInt(0, 100),
          one: getRandomIntPosOrNeg(50, 200),
          two: getRandomIntPosOrNeg(50, 200)
        }
      ]);
    }
  };

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function getRandomIntPosOrNeg(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let randomInteger = Math.floor(Math.random() * (max - min + 1)) + min;
    randomInteger = Math.random() < 0.5 ? randomInteger : randomInteger * -1;
    return randomInteger;
  }

  const handleEmojiClick = (label, symbol) => {
    console.log(label);
    setEmojiQueue([
      ...emojiQueue,
      {
        symbol,
        label,
        size: getRandomInt(2, 4),
        left: getRandomInt(0, 100),
        one: getRandomIntPosOrNeg(50, 200),
        two: getRandomIntPosOrNeg(50, 200),
        id: getRandomInt(1, 9999999)
      }
    ]);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center"
        }}
      >
        <EmojiBoardWrapper>
          {emojis.map((emoji, i) => (
            <EmojiButton
              onClick={() => handleEmojiClick(emoji.label, emoji.symbol)}
              onKeyDown={() => handleEmojiKeyDown()}
              key={i}
            >
              <Emoji label={emoji.label} symbol={emoji.symbol} size="3rem" />
            </EmojiButton>
          ))}
        </EmojiBoardWrapper>
      </div>
      {emojiQueue.map(({ id, label, symbol, size, left, one, two }) => {
        return (
          <AutoExpire>
            <EmojiBubble
              key={id}
              label={label}
              symbol={symbol}
              size={size}
              left={left}
              one={one}
              two={two}
            />
          </AutoExpire>
        );
      })}
    </div>
  );
};

export default EmojiBoard;
