import React, { useState, useEffect } from "react";
const printStatement = () => {
  return "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
};
const Home = () => {
  const getUniqueColor = () => {
    let a = (Math.random() * 0xfffff * 1000000).toString(16);
    return "#" + a.slice(0, 6);
  };
  const letters = printStatement();
  let words = letters.split(" ");
  const [colors, setColors] = useState(words.map(() => getUniqueColor()));
  useEffect(() => {
    const interval = setInterval(() => {
      setColors(words.map(() => getUniqueColor()));
    }, 1000);
    return () => clearInterval(interval);
  }, [words]);
  return (
    <div>
      {" "}
      <h1 className="js_paragraph">
        {" "}
        {words.map((word, i) => (
          <span className="js_word" key={i} style={{ color: colors[i] }}>
            {word}{" "}
          </span>
        ))}
      </h1>{" "}
    </div>
  );
};
export default Home;
