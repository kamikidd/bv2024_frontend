import { useState, useEffect } from "react";
import styles from "./projects.module.css";
import { useSearchParams } from "react-router-dom";

const SearchInputComp = ({ onChange, url }) => {
  const [titleName, setTitleName] = useState("");
  const [hideClearBtn, setHideClearBtn] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams("");

  const handleKeyDown = (event) => {
    if (event.target.value.length <= 1) {
      if (event.key == "Backspace") {
        setSearchParams((searchParams) => {
          searchParams.delete("Titel");
          return searchParams;
        });
        setHideClearBtn(true);
        setTitleName("");
        onChange("");
      }
    }
  };
  const handleInputChange = (event) => {
    onChange(event.target.value);
    setSearchParams((searchParams) => {
      searchParams.delete("Titel");
      searchParams.append("Titel", event.target.value); // <-- append key-value pair
      return searchParams;
    });
  };

  useEffect(() => {
    const data = url.get("Titel");
    if (!data) {
      setHideClearBtn(true);
      setTitleName("");
      onChange("");
    } else {
      setTitleName(data);
      onChange(data);
      setHideClearBtn(false);
    }
  }, [url]);

  return (
    <div className="p-0">
      <label htmlFor="titleName" className={`${styles.search_label}`}>
        <div className={`${styles.clear_input_container}`}>
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
            className={`${styles.clear_search}`}
            type="reset"
            aria-label="Clear input"
            title="Clear input"
            hidden={hideClearBtn}
            onClick={() => {
              setHideClearBtn(true);
              setTitleName("");
              onChange("");
              setSearchParams((searchParams) => {
                searchParams.delete("Titel");
                return searchParams;
              });
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
