import React from "react";

export default function Button(props) {
  const { onClick, text, active } = props;
  return (
    <button
      onClick={onClick}
      className={`rounded-xl hover:bg-sharkBlue text-black font-bold active:bg-sharkBlue transition-all duration-150 p-2 ${
        active
          ? "bg-sharkBlueGray scale-125"
          : "bg-sharkTeal"
      }`}
    >
      {text}
    </button>
  );
}
