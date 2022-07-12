import React from 'react';
import { useTypingText } from "../components/script/rewrite";

function Test() {
  const { word} = useTypingText(
    ["Protected", "Protected", "Protected"],
    130,
    20
  );
  return (
    <div className="container">
      <h1>Our product is {word}</h1>
    </div>
  )
}

export default Test