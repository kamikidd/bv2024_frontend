/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import { useEffect, useState } from "react";
import styles from "./select.module.css";
import { useSearchParams } from "react-router-dom";

const SelectComp = ({ isPreSelected, value, onChange, options, type, url }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams("");
  const [showClearButton, setShowClearButton] = useState(
    isPreSelected == undefined ? false : true,
  );
  const [defaultStyle, setDefaultStyle] = useState(
    isPreSelected == undefined ? true : false,
  );
  const [showArrow, setShowArrow] = useState(isPreSelected ? false : true);
  const [arrowIsDown, setArrowIsDown] = useState(true);
  const [highlightedIndex, setHighlightedIndex] = useState("");
  function clearOptions() {
    onChange(undefined);
    setShowClearButton(false);
    setDefaultStyle(true);
    setShowArrow(true);
    setArrowIsDown(true);
  }

  function selectOption(option) {
    onChange(option);
  }

  function isOptionSelected(option) {
    return option == value;
  }

  useEffect(() => {
    if (isOpen) setHighlightedIndex(0);
  }, [isOpen]);

  useEffect(() => {
    const data = url.get(type);
    if (!data) {
      clearOptions();
    } else {
      selectOption(data);
      setShowClearButton(true);
      setDefaultStyle(false);
      setIsOpen(false);
      setShowArrow(false);
    }
  }, [url]);

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events
    <div
      onBlur={() => {
        setIsOpen(false);
        setArrowIsDown(true);
      }}
      onClick={() => {
        setIsOpen((prev) => !prev);
        setArrowIsDown((prev) => !prev);
      }}
      tabIndex={0}
      className={`${styles.container}  ${
        defaultStyle ? styles.red : styles.white
      }`}
    >
      {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}
      <span className={styles.value}>{value}</span>
      <button
        onClick={(e) => {
          e.stopPropagation();
          clearOptions();
          setSearchParams((searchParams) => {
            searchParams.delete(type);
            return searchParams;
          });
        }}
        className={`${styles.clearbtn}  ${showClearButton ? styles.show : ""}`}
      >
        &times;
      </button>
      <div
        className={`${styles.arrow} ${arrowIsDown ? styles.down : styles.up} ${
          showArrow ? styles.show : ""
        } }`}
      ></div>
      <ul className={`${styles.options}  ${isOpen ? styles.show : ""}`}>
        {options.map((option, index) => (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
          <li
            onClick={(e) => {
              e.stopPropagation();
              selectOption(option.title.rendered);
              setShowClearButton(true);
              setDefaultStyle(false);
              setIsOpen(false);
              setShowArrow(false);
              setSearchParams((searchParams) => {
                if (option.title.rendered == undefined) {
                  searchParams.delete(type);
                } else {
                  searchParams.delete(type);
                  searchParams.append(type, option.title.rendered); // <-- append key-value pair
                }
                return searchParams;
              });
            }}
            onMouseEnter={() => setHighlightedIndex(index)}
            key={option.id}
            className={`${styles.option} ${
              isOptionSelected(option.title.rendered) ? styles.selected : ""
            } ${index == highlightedIndex ? styles.highlighted : ""}`}
          >
            {option.title.rendered}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default SelectComp;
