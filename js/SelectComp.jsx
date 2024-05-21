/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import { useEffect, useState } from "react";
import styles from "../css/select.module.css";
const SelectComp = ({
  isPreSelected,
  value,
  onChange,
  options,
  isClear,
  isCleared,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const [showClearButton, setShowClearButton] = useState(
    isPreSelected == undefined ? false : true
  );

  const [defaultStyle, setDefaultStyle] = useState(
    isPreSelected == undefined ? true : false
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
    isCleared(false);
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
    if (isClear) clearOptions();
  }, [isClear]);

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
          <ul
            onClick={(e) => {
              e.stopPropagation();
              selectOption(option.title.rendered);
              setShowClearButton(true);
              setDefaultStyle(false);
              setIsOpen(false);
              setShowArrow(false);
            }}
            onMouseEnter={() => setHighlightedIndex(index)}
            key={option.id}
            className={`${styles.option} ${
              isOptionSelected(option.title.rendered) ? styles.selected : ""
            } ${index == highlightedIndex ? styles.highlighted : ""}`}
          >
            {option.title.rendered}
          </ul>
        ))}
      </ul>
    </div>
  );
};
export default SelectComp;
