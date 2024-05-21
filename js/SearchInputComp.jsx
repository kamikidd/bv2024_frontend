import { useState, useEffect } from "react";
const SearchInputComp = ({ onChange, isClear, isCleared }) => {
  const [titleName, setTitleName] = useState("");
  const [hideClearBtn, setHideClearBtn] = useState(true);
  const handleKeyDown = (event) => {
    if (event.target.value.length <= 1) {
      if (event.key == "Backspace") {
        setHideClearBtn(true);
        setTitleName("");
        onChange("");
      }
    }
  };
  const handleInputChange = (event) => {
    setTitleName(event.target.value);
    onChange(event.target.value);
    if (event.target.value == "") {
      setHideClearBtn(true);
    } else {
      setHideClearBtn(false);
    }
  };
  useEffect(() => {
    if (isClear) {
      setTitleName("");
      setHideClearBtn(true);
      isCleared(false);
    }
  }, [isClear, isCleared]);
  return (
    <div>
      <label htmlFor="titleName" className="search_label">
        <div className="clear-input-container">
          <input
            type="text"
            id="titleName"
            name="searchtext"
            value={titleName}
            placeholder="Suchen nach Title . . ."
            // disabled={topics.length === 0}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <button
            id="clearSearch"
            type="reset"
            aria-label="Clear input"
            title="Clear input"
            hidden={hideClearBtn}
            onClick={() => {
              setHideClearBtn(true);
              setTitleName("");
              onChange("");
            }}
          >
            ×
          </button>
        </div>
      </label>
    </div>
  );
};

export default SearchInputComp;
