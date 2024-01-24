import { useRouter } from "next/router";
import React from "react";

function BackButton() {
  const router = useRouter();

  function goBackClickHandler() {
    router.back();
  }
  return (
    <div className="flex justify-center content-center">
      <button onClick={goBackClickHandler}>
        {" "}
        {"<--"} go back
      </button>
    </div>
  );
}

export default BackButton;
