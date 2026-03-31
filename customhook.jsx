//debounce the input text while writing in a placeholder
import React, { useState } from "react";
import useDebounce from "./useDebounce";

function Search() {
  const [text, setText] = useState("");
  const debouncedText = useDebounce(text, 500);

  // This runs only after 500ms pause
  useEffect(() => {
    if (debouncedText) {
      console.log("API call with:", debouncedText);
    }
  }, [debouncedText]);

  return (
    <input
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder="Search..."
    />
  );
}

