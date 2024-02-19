import React, { useEffect, useRef, useState } from "react";

const Dropdown = ({ options, selectedOption, onOptionChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current && ref.current.contains(event.target)) {
        return;
      }

      setOpen(false);
    };

    document.body.addEventListener("click", onBodyClick);

    return () => {
      document.body.removeEventListener("click", onBodyClick);
    };
  }, []);

  const mappedDropdownOptions = options.map((option) => {
    if (option === selectedOption) {
      return null;
    }
    return (
      <div key={option} onClick={() => onOptionChange(option)}>
        {option}
      </div>
    );
  });

  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">Select a Color</label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selectedOption}</div>
          <div
            onClick={() => setOpen(!open)}
            className={`menu ${open ? "visible transition" : ""}`}
          >
            {mappedDropdownOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
